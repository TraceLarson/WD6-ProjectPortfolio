var express = require('express');
var router = express.Router();

const Product = require("../models/product");

/* GET home page. */
router.get('/', function(req, res, next) {
  // Find all products in db
  let products = Product.find((err, docs) => {
    // Use callback to ensure all records are found prior to passing data and rendering view

    let productChunks = []; // Array to hold groups (chunks) of returned product docs
    let chunkSize = 3; // Number of product docs in each group

    for (let i = 0; i < docs.length; i += chunkSize) { // Loop through returned documents, incrementing by chunkSize each iteration
      // Push a chunk of product docs into arr
      productChunks.push(docs.slice(i, i+chunkSize)); // Slice from current arr position to chunkSize positions forward
    }

    // Render products index view
    // Pass products data to view
    res.render('shop/index', { title: 'GameDrop', products: docs});
  });
});

module.exports = router;
