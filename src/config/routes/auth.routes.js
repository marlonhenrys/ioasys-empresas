const { Router } = require('express')
const { AuthController } = require('../../app/controllers')

const routes = Router()

routes.post('/authenticate', AuthController.authenticate)

module.exports = routes
