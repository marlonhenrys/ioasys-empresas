const enterpriseRepository = require('../../repositories/EnterpriseRepository')

module.exports = async enterprise => {
  try {
    const created = await enterpriseRepository.create(enterprise)

    if (!created) {
      throw new Error('Não foi possível criar a empresa')
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
