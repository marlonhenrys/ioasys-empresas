const { Router } = require('express')
const { ManagerController } = require('../../app/controllers')
const { auth, access } = require('../../app/middlewares')

const routes = Router()

routes.get('/managers', auth, access, ManagerController.index)
routes.post('/managers', auth, access, ManagerController.create)
routes.get('/managers/:id', auth, access, ManagerController.show)

module.exports = routes
