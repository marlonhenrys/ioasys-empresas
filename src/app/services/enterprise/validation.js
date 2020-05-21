const ApplicationError = require('../../utils/errorHandler')
const enterpriseRepository = require('../../repositories/EnterpriseRepository')
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
  },

  update: async (data, auth) => {
    try {
      let permission = false
      const enterprise = await enterpriseRepository.findById(data.id)

      if (!enterprise) {
        throw new ApplicationError('Empresa não encontrada', 404)
      }

      if (auth.type === ADM) {
        permission = true
      } else if (auth.type === MGR) {
        permission = enterprise.manager_id === auth.id
      }

      if (!permission) {
        throw new ApplicationError('Você não tem permissão para editar este registro', 403)
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
