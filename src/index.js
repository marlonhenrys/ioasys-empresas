const express = require('express')
const routes = require('./routes')

const app = express()

const HOST = '0.0.0.0'
const PORT = 3333

app.use(express.json())
app.use(routes)

app.listen(PORT, HOST, () => console.log('Application Running...'))
