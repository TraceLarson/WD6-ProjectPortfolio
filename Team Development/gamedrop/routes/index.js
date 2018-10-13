var express = require('express');
var router = express.Router();

const Product = require("../models/product");

/* GET home page. */
router.get('/', function(req, res, next) {
  // Find all products in db
  let products = Product.find((err, docs) => {
    // Use callback to ensure all records are found prior to passing data and rendering view

    // Render products index view
    // Pass products data to view
    res.render('shop/index', { title: 'GameDrop', products: docs});
  });
});

module.exports = router;
