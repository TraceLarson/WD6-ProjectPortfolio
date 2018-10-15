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
    totalRating: {
        type: Number,
        required: true
    },
    numRatings: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Product", productSchema);