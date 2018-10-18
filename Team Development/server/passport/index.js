const passport = require('passport')
const localStrategy = require('./localStrategy')
const User = require('../models/user')

//Save user id to session on login
passport.serializeUser((user, done) => {
	done(null, { _id: user._id })
})

//Attach user object to request
passport.deserializeUser((id, done) => {
	User.findOne({ _id: id }, (err, user) => {
		if(user){
			user.password = null
		}
		done(null, user)
	})
})

passport.use(localStrategy)

module.exports = passport
