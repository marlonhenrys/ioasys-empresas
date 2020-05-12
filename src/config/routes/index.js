const { Router } = require('express')
const authRoutes = require('./auth.routes')
const userRoutes = require('./user.routes')

const routes = Router()

routes.use(authRoutes)
routes.use(userRoutes)

module.exports = routes
