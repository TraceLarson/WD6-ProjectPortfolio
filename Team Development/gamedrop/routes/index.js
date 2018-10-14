var express = require('express');
var router = express.Router();
const csrf = require("csurf");
const passport = require("passport");

const Product = require("../models/product");

let csrfProtection = csrf();
router.use(csrfProtection); // Protect all routes in this file with csrf protection

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

/* GET sign up page */
router.get("/user/signup", (req, res, next) => {
  // Cache any error messages that exist
  let messages = req.flash("error");

  // Render signup view, passing csrf token for protection and error messages to display
  res.render("user/signup", {csrfToken: req.csrfToken, messages: messages, hasErrors: messages.length > 0});
});

/* POST sign up page */
router.post("/user/signup", passport.authenticate("local.signup", {
  successRedirect: "/user/profile",
  failureRedirect: "/user/signup",
  failureFlash: true
}));

/* GET profile page */
router.get("/user/profile", (req, res, next) => {
  res.render("user/profile");
});

/* POST sign in page */
router.post("/user/signin", passport.authenticate("local.signin", {
  successRedirect: "/user/profile",
  failureRedirect: "/user/signin",
  failureFlash: true
}));


/* GET sign in page */
router.get("/user/signin", (req, res, next) => {
  // Cache any error messages that exist
  let messages = req.flash("error");

  // Render signin view, passing csrf token for protection and error messages to display
  res.render("user/signin", {csrfToken: req.csrfToken, messages: messages, hasErrors: messages.length > 0});
});

module.exports = router;
