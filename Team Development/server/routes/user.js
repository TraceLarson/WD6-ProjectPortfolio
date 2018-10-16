const express = require('express')
const router = express.Router()
const User = require('../models/user.js')
const passport = require('../passport')

//Register user
router.post('/', (req, res) => {
  const { email, password } = req.body
  req.check('email').isEmail()
  var emailError = req.validationErrors()
  if(emailError) {
    return res.json({
        error: 'Invalid email'
    })
  }
  req.check('password').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
  var passError = req.validationErrors()
  if(passError) {
    return res.json({
        error: 'Invalid password. Must be a minimum of 8 characters, at least one letter and one number.'
    })
  }
  else {
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        console.log(err)
      }
      else if (user) {
        res.json({
            error: `Sorry, email already registered: ${email}`
        })
      }
      else {
        const newUser = new User({
            email: email,
            password: password
        })
        newUser.save((err, savedUser) => {
            if (err) return res.json(err)
            res.json(savedUser)
        })
      }
    })
  }
})

//Login user
router.post('/login', (req, res, next) => {
  //Passport custom callback to pass errors with res
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err) }
    if (!user) { return res.json(info.message) }
    req.logIn(user, err => {
      if (err) { return next(err) }
      var userInfo = {
        user: req.user.email
      }
      console.log('logged user: ', req.user)
      return res.send(userInfo)
    })
  })(req, res, next)
})

//Get logged user for session
router.get('/', (req, res, next) => {
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

//User account Details
router.get('/account', (req, res, next) => {
  console.log(req.user)
  if(req.user){
    User.findById(req.user.id).exec((err, user) => {
  		if (err) return next(err);
      res.json(user);
  	});
  }
  else {
    res.json({
      error: 'noUserLogged'
    })
  }
})

//Logout User
router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'user logged out' })
    } else {
        res.send({ msg: 'no user logged in' })
    }
})

module.exports = router
