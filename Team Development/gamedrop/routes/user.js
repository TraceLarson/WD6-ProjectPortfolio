const express = require('express');
const csrf = require("csurf");
const passport = require("passport");

const Product = require("../models/product");

let router = express.Router();

let csrfProtection = csrf();
router.use(csrfProtection); // Protect all routes in this file with csrf protection

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