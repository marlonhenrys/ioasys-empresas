const ApplicationError = require('../../utils/errorHandler')
const { ADM, MGR, EMP } = require('../../utils/typeUsers')
const enterpriseRepository = require('../../repositories/EnterpriseRepository')
const userRepository = require('../../repositories/UserRepository')

module.exports = {

  create: async (user, auth) => {
    try {
      let permission = false

      if (auth.type === ADM) {
        permission = user.type === ADM || user.type === MGR
      } else if (auth.type === MGR && user.type === EMP) {
        const enterprise = await enterpriseRepository.findById(user.enterprise_id)
        permission = enterprise.manager_id === auth.id
      }

      if (!permission) {
        throw new ApplicationError('Você não tem permissão para criar este registro', 403)
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  },

  update: async (data, auth) => {
    try {
      let permission = false
      const user = await userRepository.findByIdWithEnterprise(data.id)

      if (!user) {
        throw new ApplicationError('Usuário não encontrado', 404)
      }

      if (auth.id === user.id) {
        permission = true
      } else if (auth.type === ADM && user.type === MGR) {
        permission = true
      } else if (auth.type === MGR && user.type === EMP) {
        permission = auth.id === user.job.manager_id
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
