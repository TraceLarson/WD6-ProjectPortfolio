const express = require('express');
const csrf = require("csurf");
const passport = require("passport");

const Order = require("../models/order");

let router = express.Router();

let csrfProtection = csrf();
router.use(csrfProtection); // Protect all routes in this file with csrf protection

/* GET profile page */
router.get("/profile", isLoggedIn, (req, res, next) => {
    // Find all of the user's orders
    Order.find({user: req.user}, () => { // Compare user that passport stores on request object to the user property of order documents
        if (err) {
            // Add error message to flash
            req.flash("error", "SERVER ERROR: PROBLEM FINDING ORDERS. If this issue persists, please contact the website administrator.");
        }
    }); 

    // Store first error message
    let errMsg = req.flash("error")[0];
    res.render("user/profile", {errMsg: errMsg, noError: !errMsg});
});

/* GET logout page */
router.get("/logout", isLoggedIn, (req, res, next) => {
    // Log user out with passport
    req.logout();

    // Redirect user to root route
    res.redirect("/");
});

router.use("/", notLoggedIn, (req, res, next) => {
    next();
});

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
    failureRedirect: "/user/signup",
    failureFlash: true
}), (req, res, next) => { // Handle success
        if (req.session.oldUrl) {
        // Redirect user to url they were attempting to access prior to logging in
        let oldUrl = req.session.oldUrl;
        req.session.oldUrl = null; // Reset session old url, ensures user won't keep getting redirected to checkout after logging out & in again
        res.redirect(oldUrl);
    } else {
        res.redirect("/user/profile");
    }
});

/* POST sign in page */
router.post("/signin", passport.authenticate("local.signin", {
    failureRedirect: "/user/signin",
    failureFlash: true
}), (req, res, next) => { // Handle success
    if (req.session.oldUrl) {
        // Redirect user to url they were attempting to access prior to logging in
        let oldUrl = req.session.oldUrl;
        req.session.oldUrl = null; // Reset session old url, ensures user won't keep getting redirected to checkout after logging out & in again
        res.redirect(oldUrl);
    } else {
        res.redirect("/user/profile");
    }
});


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