var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema ({
  imagePath: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  releaseDate: {type: String, required: true},
  price: {type: Number, required: true},
  rating: {type: Number, required: true},
  reviews: {type: Array, required: true}
});

module.exports = mongoose.model('Item', ItemSchema);
