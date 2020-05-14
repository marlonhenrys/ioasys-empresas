const { Router } = require('express')
const { EnterpriseController } = require('../../app/controllers')
const { auth, access } = require('../../app/middlewares')

const routes = Router()

routes.get('/enterprises', auth, access, EnterpriseController.index)
routes.post('/enterprises', auth, access, EnterpriseController.create)
routes.get('/enterprises/:id', auth, access, EnterpriseController.show)
routes.put('/enterprises/:id', auth, access, EnterpriseController.update)
routes.delete('/enterprises/:id', auth, access, EnterpriseController.destroy)

module.exports = routes
