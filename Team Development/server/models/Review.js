const mongoose = require('mongoose')

const ReviewSchema = mongoose.Schema({
	name: {type: String, required: true},
	message: {type: String, required: true},
	item: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'}
})

module.exports = mongoose.model('Review', ReviewSchema)