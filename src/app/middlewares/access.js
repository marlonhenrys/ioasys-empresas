const ApplicationError = require('../utils/errorHandler')
const { ADM, MGR } = require('../utils/typeUsers')

module.exports = async (req, res, next) => {
  try {
    const action = req.method + ' ' + req.path
    const userType = req.auth.type

    let permission = false

    switch (action) {
      case 'POST /administrators':
        permission = userType === ADM
        break
      case 'POST /managers':
        permission = userType === ADM
        break
      case 'POST /employees':
        permission = userType === MGR
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
