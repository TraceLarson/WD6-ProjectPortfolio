const express = require('express')
const router = express.Router()
const path = require('path')


router.get('/', (req, res) => {
	console.log('Index route called')
	res.sendFile(path.join(__dirname, '/../views/index.html'))
})

module.exports = router