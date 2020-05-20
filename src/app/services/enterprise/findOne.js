const enterpriseRepository = require('../../repositories/EnterpriseRepository')
const userRepository = require('../../repositories/UserRepository')
const { ADM, MGR, EMP } = require('../../utils/typeUsers')
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
    } else if (auth.type === EMP) {
      const employee = await userRepository.findById(auth.id)
      permission = employee.enterprise_id === enterprise.id
    }

    if (!permission) {
      throw new ApplicationError('Você não tem permissão para acessar estes dados', 403)
    }

    return enterprise
  } catch (error) {
    console.error(error)
    throw error
  }
}
