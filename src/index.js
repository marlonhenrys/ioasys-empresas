const express = require('express')
const routes = require('./routes')
const swaggerUi = require('swagger-ui-express')
const swaggerConfig = require('./config/swagger')

require('./database')

const app = express()

const HOST = '0.0.0.0'
const PORT = 3333

app.use(express.json())
app.use(routes)

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerConfig))

app.listen(PORT, HOST, () => console.log('Application Running...'))
