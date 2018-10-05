// Set Environment Variables
var NODE_ENV = process.env.NODE_ENV || 'development'

if(NODE_ENV === 'development') {
	require('dotenv').config()
}


const app = require('../server/app')
const http = require('http')
const port = process.env.PORT || 5000

app.set('port', port)

const server = http.createServer(app)
server.listen(port)
server.on('listening', () => console.log(`Server running on port ${port}`))