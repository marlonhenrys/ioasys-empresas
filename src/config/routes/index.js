const { Router } = require('express')

const routes = Router()

routes.use(require('./auth.routes'))
routes.use(require('./admin.routes'))
routes.use(require('./manager.routes'))
routes.use(require('./employee.routes'))

module.exports = routes
