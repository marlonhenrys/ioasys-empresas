/* eslint-disable no-case-declarations */
const userRepository = require('../../repositories/UserRepository')
const enterpriseRepository = require('../../repositories/EnterpriseRepository')
const { ADM, MGR, EMP } = require('../../utils/typeUsers')

module.exports = async (auth, type, enterpriseId) => {
  try {
    let users = null

    switch (auth.type) {
      case ADM:
        users = await userRepository.findAll()
        break
      case MGR:
        const enterprises = await enterpriseRepository.findAllByManagerId(auth.id)
        const enterprisesId = enterprises.map(enterprise => enterprise.id)
        users = await userRepository.findAllByEnterprisesId(enterprisesId)
        break
      case EMP:
        const employee = await userRepository.findById(auth.id)
        users = await userRepository.findAllByEnterprisesId([employee.enterprise_id])
        break
      default:
        users = null
        break
    }

    if (!users) {
      throw new Error('Não foi possível carregar a lista de usuários')
    }
    if (type) {
      users = users.filter(user => user.type === type)
    }
    if (enterpriseId) {
      users = users.filter(user => user.enterprise_id === parseInt(enterpriseId))
    }

    return users
  } catch (error) {
    console.error(error)
    throw error
  }
}
