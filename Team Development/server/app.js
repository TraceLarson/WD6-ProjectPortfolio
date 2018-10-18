const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')
const expressValidator = require('express-validator')
const passport = require('./passport')
const MongoStore = require('connect-mongodb-session')(session)
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost/gamedrop'
// ROUTES
const index = require('./routes/index')
const user = require('./routes/user')
const item = require('./routes/item')
const reviews = require('./routes/reviews')
const checkout = require('./routes/checkout')


// Configure Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Connect to MongoDB Database
mongoose.Promise = global.Promise
mongoose.connect(CONNECTION_URI, { useNewUrlParser: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err))

// Get default connection
var db = mongoose.connection

// Instantiate MongoStore
var store = new MongoStore ({
  mongooseConnection: db,
  collection: 'mySession'
})

// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error'))

// Bind connection to connection event
db.once('open', () => console.log('DATABASE CONNECTED SUCCESSFULLY'))

//Config session
//using connect-mongodb-session as connect-mongo has a known deprciation warning: https://github.com/jdesboeufs/connect-mongo/issues/297
app.use(session({secret: 'wd6', store: store, saveUninitialized: false, resave: false}))

//express-validator
app.use(expressValidator());


//Passport
app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use('/', index)
app.use('/user', user)
app.use('/item', item)
app.use('/reviews', reviews)
app.use('/checkout', checkout)



module.exports = app
