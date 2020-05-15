const { Router } = require('express')
const { UserController } = require('../../app/controllers')
const { auth, access } = require('../../app/middlewares')

const routes = Router()

routes.get('/users', auth, access, UserController.index)
routes.post('/users', auth, access, UserController.create)
routes.get('/users/:id', auth, access, UserController.show)
routes.put('/users/:id', auth, access, UserController.update)
routes.delete('/users/:id', auth, access, UserController.destroy)

module.exports = routes
