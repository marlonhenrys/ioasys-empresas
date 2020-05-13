const { Router } = require('express')
const { EmployeeController } = require('../../app/controllers')
const { auth, access } = require('../../app/middlewares')

const routes = Router()

routes.get('/employees', auth, access, EmployeeController.index)
routes.post('/employees', auth, access, EmployeeController.create)
routes.get('/employess/:id', auth, access, EmployeeController.show)

module.exports = routes
