const mongoose = require('mongoose')

const ReviewSchema = mongoose.Schema({
	name: {type: String, required: true},
	message: {type: String, required: true}
})

module.exports = mongoose.model('Review', ReviewSchema)