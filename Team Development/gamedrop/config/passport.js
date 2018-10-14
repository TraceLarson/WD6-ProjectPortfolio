const passport = require("passport");
const User = require("../models/user");
const localStrategy = require("passport-local").Strategy;

// Tells passport how to store the user in the session
passport.serializeUser((user, done) => {
    // Serialize user by id
    done(null, user.id);
});

// Tells passport how to find the user using session information
passport.deserializeUser((id, done) => {
    // Find user in database
    User.findById(id, (err, user) => {
        done(err, user);
    });
});