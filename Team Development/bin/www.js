// Set Environment Variables
var NODE_ENV = process.env.NODE_ENV || 'development'

NODE_ENV === 'developement' ? require('dotenv').load() : ''

const app = require('../app')
const http = require('http')
const port = process.env.PORT || 5000

app.set('port', port)

const server = http.createServer(app)
server.listen(port)
server.on('listening', () => console.log(`Server running on port ${port}`))