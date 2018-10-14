var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
const validator = require("express-validator");

/* Routes */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/* Express App */
var app = express();

/* Database */
mongoose.connect("mongodb://localhost:27017/gamedrop", { useNewUrlParser: true });

// Setup passport
require("./config/passport");

/* View Engine */
app.engine(".hbs", expressHbs({
  defaultLayout: "layout",
  extname: ".hbs"
}));
app.set('view engine', '.hbs');

/* Middleware */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: "798had83hbyawd67b",
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public'))); // Static file serving

/* Routes */
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
