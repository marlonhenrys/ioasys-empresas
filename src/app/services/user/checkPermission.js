const ApplicationError = require('../../utils/errorHandler')
const { ADM, MGR, EMP } = require('../../utils/typeUsers')

module.exports = {

  create: async (user, auth) => {
    try {
      let permission = false

      switch (auth.type) {
        case ADM:
          permission = user.type === ADM || user.type === MGR
          break
        case MGR:
          permission = user.type === EMP
          break
        default:
          permission = false
          break
      }

      if (!permission) { throw new ApplicationError('Você não tem permissão para realizar esta ação', 403) }
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
