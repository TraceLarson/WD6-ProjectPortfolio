const express = require('express')
const router = express.Router()
const User = require('../models/user.js')
const passport = require('../passport')

//Register user
router.post('/', (req, res) => {
  const { email, password } = req.body
  req.check('email').isEmail()
  var emailCheck = req.validationErrors()
  if(emailCheck) {
    return res.json({
        error: 'Email must be a valid email'
    })
  }
  req.check('password').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
  var passCheck = req.validationErrors()
  if(passCheck) {
    return res.json({
        error: 'Password must be a minimum of 8 characters, at least one letter and one number'
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
    console.log(req.body)
    next()
  },
  passport.authenticate('local', { failureFlash: 'Invalid username or password.' }), (req, res) => {
    console.log('logged user: ', req.user)
    var userInfo = {
      email: req.user.email
    };
    res.send(userInfo)
  }
)

//Get logged user for session
router.get('/', (req, res, next) => {
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
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
