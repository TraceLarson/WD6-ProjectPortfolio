const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema({
    imgPath: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    totalRating: { // Total cumulative rating value
        type: Number,
        required: true
    },
    numRatings: { // Number of ratings the product has had
        type: Number,
        required: true
    },
    rating: { // Calculated average rating
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Product", productSchema);