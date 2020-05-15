const ApplicationError = require('../../utils/errorHandler')
const { ADM, MGR } = require('../../utils/typeUsers')

module.exports = {

  create: async (enterprise, auth) => {
    try {
      let permission = false

      switch (auth.type) {
        case ADM:
          permission = true
          break
        case MGR:
          permission = enterprise.manager_id === auth.id
          break
        default:
          permission = false
          break
      }

      if (!permission) {
        throw new ApplicationError('Você não tem permissão para realizar esta ação', 403)
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
