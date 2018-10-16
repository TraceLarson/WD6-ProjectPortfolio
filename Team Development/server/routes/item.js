const express = require('express')
const router = express.Router()
const Item = require('../models/item.js')
const Cart = require('../models/cart.js')

// Get all items
router.get('/', (req, res, next) => {
  Item.find((err, items) => {
    if (err) return next(err)
    res.json(items)
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
  let cart = new Cart(req.session.cart ? req.session.cart : {})

  Item.findById(req.params.id, (err, item) => {
    if (err) {
      return res.json(
        { error: 'Sorry, There was an error adding your item to the shopping cart.' }
      )
    }
    else {
      cart.add(item, item.id)
      req.session.cart = cart
      console.log('Shopping Cart Items: ')
      console.log(req.session.cart)
      return res.json(req.session.cart)
    }
  })
})

module.exports = router
