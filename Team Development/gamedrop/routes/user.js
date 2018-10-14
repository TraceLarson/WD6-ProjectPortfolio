const express = require('express');
const csrf = require("csurf");
const passport = require("passport");

const Product = require("../models/product");

let router = express.Router();

let csrfProtection = csrf();
router.use(csrfProtection); // Protect all routes in this file with csrf protection

/* GET sign up page */
router.get("/signup", (req, res, next) => {
    // Cache any error messages that exist
    let messages = req.flash("error");

    // Render signup view, passing csrf token for protection and error messages to display
    res.render("user/signup", {
        csrfToken: req.csrfToken,
        messages: messages,
        hasErrors: messages.length > 0
    });
});

/* POST sign up page */
router.post("/signup", passport.authenticate("local.signup", {
    successRedirect: "/user/profile",
    failureRedirect: "/user/signup",
    failureFlash: true
}));

/* POST sign in page */
router.post("/signin", passport.authenticate("local.signin", {
    successRedirect: "/user/profile",
    failureRedirect: "/user/signin",
    failureFlash: true
}));


/* GET sign in page */
router.get("/signin", (req, res, next) => {
    // Cache any error messages that exist
    let messages = req.flash("error");

    // Render signin view, passing csrf token for protection and error messages to display
    res.render("user/signin", {
        csrfToken: req.csrfToken,
        messages: messages,
        hasErrors: messages.length > 0
    });
});

/* GET logout page */
router.get("/logout", (req, res, next) => {
    // Log user out with passport
    req.logout();

    // Redirect user to root route
    res.redirect("/");
});

/* GET profile page */
router.get("/profile", isLoggedIn, (req, res, next) => {
    res.render("user/profile");
});

module.exports = router;

// Write own middleware to handle route protection
function isLoggedIn(req, res, next) {
    // If user is authenticated, continue as normal
    if (req.isAuthenticated()) {
        return next();
    }

    // Otherwise user is not authenticated, so redirect them to root route
    res.redirect("/");
}

// Write middleware function to check if user is NOT logged in
function notLoggedIn(req, res, next) {
    // If user is not authenticated, continue as normal
    if (!req.isAuthenticated()) {
        return next();
    }

    // Otherwise user is authenticated, so redirect them to root route
    res.redirect("/");
}