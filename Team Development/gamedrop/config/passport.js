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
    // Validate form inputs using express-validator
    req.checkBody("email", "Invalid email").notEmpty().isEmail();
    req.checkBody("password", "Invalid password").notEmpty().isLength({ min: 4 });

    // Cache validation errors
    let errors = req.validationErrors();

    // Check to see if there are any validation errors
    if (errors) {
        // Create array of messages to pass to view
        let messages = [];

        // Loop through the errors and push their messages to message arr
        errors.forEach((err) => {
            messages.push(err.msg);
        });

        // Send errors to flash middleware to be be passed to view
        return done(null, false, req.flash("error", messages));
    }

    // Check if user with that email already exists in database
    User.findOne({"email": email}, (err, user) => {
        if (err) { // There was an error with the search
            return done(err);
        }
        if (user) { // User already exists in database
            return done(null, false, {message: "Email is already in use."}); // Return a message to be output in the view
        }

        let newUser = new User();
        newUser.email = email; // Set user's email to what was entered in form
        newUser.password = newUser.encryptPassword(password); // Encrypt the password the user entered in the form before setting it to the user document
        newUser.save((err, result) => { // Save user in db
            if (err) {
                return done(err);
            }
            return done(null, newUser);
        });
    });
}));