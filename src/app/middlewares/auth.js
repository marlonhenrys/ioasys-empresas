const jwt = require('jsonwebtoken')
const { secret } = require('../../config/auth')
const userRepository = require('../repositories/UserRepository')
const ApplicationError = require('../utils/errorHandler')

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      throw new ApplicationError('Nenhum token fornecido', 401)
    }

    const parts = authHeader.split(' ')

    if (!parts.length === 2) {
      throw new ApplicationError('Erro de token', 401)
    }

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) {
      throw new ApplicationError('Token mal formatado', 401)
    }

    await jwt.verify(token, secret, async (error, decoded) => {
      if (error) {
        throw new ApplicationError('Token inválido', 401)
      }

      const user = await userRepository.findById(decoded.user_id)

      if (!user) {
        throw new ApplicationError('Não foi possível autenticar o usuário', 401)
      } else if (user.status === 'Disabled') {
        throw new ApplicationError('Este usuário está desabilitado', 403)
      }

      req.auth = {
        id: user.id,
        email: user.email,
        type: user.type
      }

      return next()
    })
  } catch (error) {
    console.error(error)

    return res.status(error.status || 500).json({
      message: error.message
    })
  }
}
