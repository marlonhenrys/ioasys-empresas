const http = require('http')
const app = require('./src/config/app')

const server = http.createServer(app)

server.listen(3333, () => console.log('server running...'))