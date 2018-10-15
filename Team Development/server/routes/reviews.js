const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Review = require('../models/Review')
const Item = require('../models/item')


router.get('/', (req, res, next) => {
	Review.find().exec((err, reviews) => {
		res.send(reviews)
	})

})

router.post('/', (req, res, next) =>{
	// console.log(req.body)
	let newReview = new Review(req.body)
	Item.findById(req.body.item)
		.exec((err, item) => {
			err? console.error(`Error finding id: ${err.message}`): console.log(item)
			newReview.save((err, review) => {
				err ? res.sendStatus(500).send(`Error saving review`) : item.reviews.push(review._id)
				item.save((err, item) => {
					err ? res.sendStatus(500).send(`Error saving review to item`) : res.send(item)
				})
			})
		})

})

module.exports = router