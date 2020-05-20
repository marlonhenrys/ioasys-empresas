const ApplicationError = require('../utils/errorHandler')
const { ADM, MGR } = require('../utils/typeUsers')

module.exports = async (req, res, next) => {
  try {
    const action = req.method + ' ' + req.path
    const userType = req.auth.type
    const { id } = req.params

    let permission = false

    switch (action) {
      case 'POST /users':
        permission = userType === ADM || userType === MGR
        break
      case 'GET /users':
        permission = true
        break
      case `GET /users/${id}`:
        permission = true
        break
      case `PUT /users/${id}`:
        permission = true
        break
      case 'PATCH /users':
        permission = userType === ADM
        break
      case `DELETE /users/${id}`:
        permission = userType === ADM || userType === MGR
        break
      case 'POST /enterprises':
        permission = userType === ADM || userType === MGR
        break
      case 'GET /enterprises':
        permission = true
        break
      case `GET /enterprises/${id}`:
        permission = true
        break
      default:
        permission = false
        break
    }

    if (!permission) {
      throw new ApplicationError('Você não tem permissão para acessar este recurso', 403)
    }

    return next()
  } catch (error) {
    console.error(error)

    return res.status(error.status || 500).json({
      message: error.message
    })
  }
}
