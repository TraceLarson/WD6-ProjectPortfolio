var express = require('express');
var router = express.Router();

const Product = require("../models/product");

/* GET home page. */
router.get('/', function(req, res, next) {
  // Find all products in db
  let products = Product.find();

  // Render products index view
  // Pass products data to view
  res.render('shop/index', { title: 'Express', products: products});
});

module.exports = router;
