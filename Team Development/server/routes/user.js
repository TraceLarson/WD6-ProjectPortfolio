const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user.js')
const Item = require('../models/item.js')
const passport = require('../passport')
const Cart = require('../models/cart.js')

//Register user
router.post('/', (req, res) => {
  const { email, password } = req.body
  req.check('email').isEmail()
  let emailError = req.validationErrors()
  if(emailError) {
    return res.json({
        error: 'Invalid email'
    })
  }
  req.check('password').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
  let passError = req.validationErrors()
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
      let userInfo = {
        user: req.user.email
      }
      return res.send(userInfo)
    })
  })(req, res, next)
})

//Get logged user for session
router.get('/', (req, res, next) => {
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

//User account Details
router.get('/account', (req, res, next) => {
  if(req.user){
    User.findById(req.user.id).exec((err, user) => {
  		if (err) return next(err);
      user.password = null
      res.json(user);
  	});
  }
  else {
    res.json({
      error: 'noUserLogged'
    })
  }
})

//Add item to game radar list
router.get('/addToRadar/:id', (req, res, next) => {
  let itemId = req.params.id
  if (req.user){
    Item.findOne({ _id: itemId }).exec((err, item) => {
      if (err) {
        return res.json(err)
      }
      else {
        User.findByIdAndUpdate(req.user.id, { $push: { gameRadar: item}}, { new: true }, (err, user) => {
          if (err) {
            console.log(err);
            res.json(err)
          }
          else{
            req.user = user;
            res.json({user: user})
          }
        })
      }
    })
  }
  else {
    res.json({error: 'no user logged in'})
  }
})

//Add item to cart from gameRadar list
router.get('/addFromRadar/:id', (req, res, next) => {
  let itemId = req.params.id
  let cart = new Cart(req.session.cart ? req.session.cart : {})

  if (req.user) {
    Item.findOne({ _id: itemId }).exec((err, item) => {
      if (err) {
        return res.json({ error: 'Sorry, There was an error adding your item to the shopping cart.' })
      }
      else {
        radar = req.user.gameRadar

        let i = radar.indexOf(itemId);
        if (i > -1) {
          radar.splice(i, 1);
        }

        User.findByIdAndUpdate(req.user.id, { $set: { gameRadar: radar}}, { new: true }, (err, user) => {
          if (err) {
            console.log(err);
          }
          else {
            req.user = user;
            cart.add(item, item.id)
            req.session.cart = cart
            return res.json({ user: user, cart: cart })
          }
        })
      }
    })
  }
  else {
    return res.json({error: 'no user logged in'})
  }
})

//Drop item to game radar from shopping cart
router.get('/dropToRadar/:id', (req, res, next) => {
  let itemId = req.params.id
  if (req.user){
    Item.findOne({ _id: itemId }).exec((err, item) => {
      if (err) {
        return res.json(err)
      }
      else {
        User.findByIdAndUpdate(req.user.id, { $push: { gameRadar: item}}, { new: true }, (err, user) => {
          if (err) {
            console.log(err);
            res.json(err)
          }
          else{
            if (!req.session.cart) {
              return res.json({ items: null })
            }
            let itemId = req.params.id
            let cart = new Cart(req.session.cart ? req.session.cart : {})

            cart.removeItem(itemId)
            req.session.cart = cart;
            req.user = user;
            return res.json({user: user, items: cart.generateArray(), totalPrice: cart.totalPrice, totalQty: cart.totalQty })
          }
        })
      }
    })
  }
  else {
    res.json({error: 'no user logged in'})
  }
})

router.get('/dropFromRadar/:id', (req, res, next) => {
  let itemId = req.params.id
  if (req.user) {
    radar = req.user.gameRadar

    let i = radar.indexOf(itemId);
    if (i > -1) {
      radar.splice(i, 1);
    }

    User.findByIdAndUpdate(req.user.id, { $set: { gameRadar: radar}}, { new: true }, (err, user) => {
      if (err) {
        console.log(err);
        res.json({error: 'There was an error removing the item'})
      }
      else {
        req.user = user;
        return res.json({ user: user })
      }
    })
  }
  else {
    res.json({error: 'no user logged in'})
  }
})

//Check if item is on user gameRadar list
router.get('/checkGameRadar/:id', (req, res, next) => {
  if (req.user) {
    if (!req.user.gameRadar.length <= 0){

      radar = req.user.gameRadar

      let i = radar.indexOf(req.params.id);
      if (i > -1) {
        console.log('GAME ID FOUND!')
        return res.json({ onRadar: true })
      }
      else {
        console.log('GAME ID NOT ON RADAR!')
        return res.json({ onRadar: false })
      }
    }
    else {
      console.log('NO GAMES ON USER RADAR')
      return res.json({ onRadar: false })
    }
  }
  else {
    console.log('NO USER FOUND')
    res.json({error: 'no user logged in'})
  }
})


//get gameRadar
router.get('/gameRadar', (req, res, next) => {
  if (req.user) {
    Item.find({ _id: {$in: req.user.gameRadar }}).exec((err, items) => {
      if (err) {
        console.log(err)
      }
      else {
        res.json({items: items})
      }
    })
  }
  else {
    res.json({error: 'no user logged in'})
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
