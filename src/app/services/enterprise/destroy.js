const enterpriseRepository = require('../../repositories/EnterpriseRepository')
const { ADM, MGR } = require('../../utils/typeUsers')
const ApplicationError = require('../../utils/errorHandler')

module.exports = async (id, auth) => {
  try {
    let permission = false
    const enterprise = await enterpriseRepository.findById(id)

    if (!enterprise) {
      throw new ApplicationError('Empresa não encontrada', 404)
    }

    if (auth.type === ADM) {
      permission = true
    } else if (auth.type === MGR) {
      permission = auth.id === enterprise.manager_id
    }

    if (!permission) {
      throw new ApplicationError('Você não tem permissão para excluir este registro', 403)
    }

    await enterprise.destroy()
  } catch (error) {
    console.error(error)
    throw error
  }
}
