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

// Create a new local strategy called local.signup
passport.use("local.signup", new localStrategy({
    // Strategy configuration
    usernameField: "email",
    password: "password",
    passReqToCallback: true
}, (req, email, password, done) => {
    // Check if user with that email already exists in database
    User.findOne({"email": email}, (err, user) => {
        if (err) { // There was an error with the search
            return done(err);
        }
        if (user) { // User already exists in database
            return done(null, false, {message: "Email is already in use."}); // Return a message to be output in the view
        }

        let newUser = new User();
        newUser.email = email;
        newUser.password = password;
    });
}));