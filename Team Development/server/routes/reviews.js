const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')


router.get('/', (req, res, next) => {
	res.send('get all reviews')
})

router.post('/', (req, res, next) =>{
	res.send(req.body)
})