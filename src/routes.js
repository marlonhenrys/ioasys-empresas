const { Router } = require('express')
const UserController = require('./app/controllers/UserController')

const routes = Router()

routes.get('/', (req, res) => {
    return res.json({ message: 'ioasys empresas' })
})

module.exports = routes
