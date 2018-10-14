const passport = require('passport')
const localStrategy = require('./localStrategy')
const User = require('../models/user')

//Save user id to session on login
passport.serializeUser((user, done) => {
	console.log('serializeUser user: 'user)
	done(null, { _id: user._id })
})

//Attach user object to request
passport.deserializeUser((id, done) => {
	User.findOne({ _id: id }, 'email', (err, user) => {
    console.log('Deserialize user: ' user)
		done(null, user)
	})
})

passport.use(localStrategy)

module.exports = passport
