const enterpriseRepository = require('../../repositories/EnterpriseRepository')
const { ADM, MGR } = require('../../utils/typeUsers')

module.exports = async auth => {
  try {
    let enterprises = null

    switch (auth.type) {
      case ADM:
        enterprises = await enterpriseRepository.findAll()
        break
      case MGR:
        enterprises = await enterpriseRepository.findAllByManagerId(auth.id)
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
