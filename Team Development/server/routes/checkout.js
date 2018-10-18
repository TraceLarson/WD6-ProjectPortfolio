const express = require('express')
const router = express.Router()
const Api = require('../models/api')

router.get('/', (req, res) => {
	Api.Stripe()
		.then(response => {
			console.log(response)
		})
})

module.exports = router