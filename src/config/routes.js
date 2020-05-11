const { Router } = require('express')
const auth = require('../app/middlewares/auth')
const access = require('../app/middlewares/access')
const UserController = require('../app/controllers/UserController')
const AuthController = require('../app/controllers/AuthController')

const routes = Router()

routes.post('/auth/login', AuthController.login)
routes.post('/users', auth, access, UserController.create)

module.exports = routes
