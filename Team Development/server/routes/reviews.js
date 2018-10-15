const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Review = require('../models/Review')


router.get('/', (req, res, next) => {
	Review.find().exec((err, reviews) => {
		res.send(reviews)
	})

})

router.post('/', (req, res, next) =>{
	res.send(req.body)
})

module.exports = router