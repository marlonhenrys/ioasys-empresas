const ApplicationError = require('../../utils/errorHandler')

module.exports.checkAuthority = async (enterpriseId, managerId) => {
  try {
    const permission = true

    if (!permission) {
      throw new ApplicationError('Você não tem permissão para realizar esta ação', 403)
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
