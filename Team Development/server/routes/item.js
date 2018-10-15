const express = require('express')
const router = express.Router()
const Item = require('../models/item.js')

// Get all items
router.get('/', (req, res, next) => {
  Item.find((err, items) => {
    if (err) return next(err)
    res.json(items)
  })
})

// Get item by id
router.get('/:id', (req, res, next) => {
  Item.findById(req.params.id, (err, item) => {
    if (err) return next(err)
    res.json(item)
  });
});

module.exports = router
