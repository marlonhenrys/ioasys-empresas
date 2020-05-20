/* eslint-disable no-case-declarations */
const enterpriseRepository = require('../../repositories/EnterpriseRepository')
const userRepository = require('../../repositories/UserRepository')
const { ADM, MGR, EMP } = require('../../utils/typeUsers')

module.exports = async auth => {
  try {
    let enterprises

    switch (auth.type) {
      case ADM:
        enterprises = await enterpriseRepository.findAll()
        break
      case MGR:
        enterprises = await enterpriseRepository.findAllByManagerId(auth.id)
        break
      case EMP:
        const employee = await userRepository.findByIdWithEnterprise(auth.id)
        enterprises = employee.job
        break
      default:
        enterprises = null
        break
    }

    if (!enterprises) {
      throw new Error('Não foi possível carregar a lista de empresas')
    }

    return enterprises
  } catch (error) {
    console.error(error)
    throw error
  }
}
