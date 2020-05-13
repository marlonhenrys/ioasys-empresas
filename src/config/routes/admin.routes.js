const { Router } = require('express')
const { AdminController } = require('../../app/controllers')
const { auth, access } = require('../../app/middlewares')

const routes = Router()

routes.get('/administrators', auth, access, AdminController.index)
routes.post('/administrators', auth, access, AdminController.create)
routes.get('/administrators/:id', auth, access, AdminController.show)

module.exports = routes
