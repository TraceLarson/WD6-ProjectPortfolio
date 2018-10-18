const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Item = require('../models/item.js')
const Cart = require('../models/cart.js')

// Get all items and shopping cart qty
router.get('/', (req, res, next) => {
  Item.find((err, items) => {
    if (err) return next(err)
    else if (!req.session.cart) {
      res.json({items: items})
    }
    else {
      res.json({items: items, totalQty: req.session.cart.totalQty})
    }
  })
})

// Get item by id
router.get('/:id', (req, res, next) => {
	Item.findById(req.params.id).populate('reviews').exec((err, item) => {
		if (err) return next(err);
		res.json(item);
	});
  // updated to use .populare
  // Item.findById(req.params.id, (err, item) => {
  //   if (err) return next(err);
  //   res.json(item);
  // });
});

//Add item to shopping cart
router.get('/addToCart/:id', (req, res, next) => {
  let itemId = req.params.id
  let cart = new Cart(req.session.cart ? req.session.cart : {})
  console.log(req.user)
  Item.findOne({ _id: itemId }).exec((err, item) => {
    if (err) {
      return res.json(
        { error: 'Sorry, There was an error adding your item to the shopping cart.' }
      )
    }
    else {
      cart.add(item, item.id)
      req.session.cart = cart
      return res.json(req.session.cart)
    }
  })
})

//Reduce item qty in cart
router.get('/reduce/:id', (req, res, next) => {
  if (!req.session.cart) {
    return res.json({ items: null })
  }
  let itemId = req.params.id
  let cart = new Cart(req.session.cart ? req.session.cart : {})

  cart.reduce(itemId)
  req.session.cart = cart;
  return res.json({ items: cart.generateArray(), totalPrice: cart.totalPrice, totalQty: cart.totalQty })
})

//Remove item qty in cart
router.get('/removeItem/:id', (req, res, next) => {
  if (!req.session.cart) {
    return res.json({ items: null })
  }
  let itemId = req.params.id
  let cart = new Cart(req.session.cart ? req.session.cart : {})

  cart.removeItem(itemId)
  req.session.cart = cart;
  return res.json({ items: cart.generateArray(), totalPrice: cart.totalPrice, totalQty: cart.totalQty })
})

//Get shopping cart
router.get('/cart/items', (req, res, next) => {
  if (!req.session.cart) {
    return res.json({ items: null })
  }
  let cart = new Cart(req.session.cart)
  return res.json({ items: cart.generateArray(), totalPrice: cart.totalPrice })
})

module.exports = router
