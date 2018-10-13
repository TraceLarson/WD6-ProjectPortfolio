var express = require('express');
var router = express.Router();

const Product = require("../models/product");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop/index', { title: 'Express' });
});

module.exports = router;
