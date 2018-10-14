const express = require('express');

const Product = require("../models/product");

let router = express.Router();

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
    res.render('shop/index', { title: 'GameDrop', products: productChunks});
  });
});

/* GET add to cart view */
router.get("/add-to-cart/:id", (req, res, next) => { // id of product to add to cart
  // Cache id of item to add to cart
  let productId = req.params.id;
});

module.exports = router;
