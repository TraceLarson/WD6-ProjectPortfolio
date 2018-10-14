const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs")

const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create a method to encrypt a password
userSchema.methods.encryptPassword = function(password) {
    // Hash and salt the password
    // Return result
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

module.exports = mongoose.model("User", userSchema);