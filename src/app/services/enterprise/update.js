const enterpriseRepository = require('../../repositories/EnterpriseRepository')

module.exports = async data => {
  try {
    const enterprise = await enterpriseRepository.findById(data.id)

    if (data.name) { enterprise.name = data.name }
    if (data.phone) { enterprise.phone = data.phone }
    if (data.description) { enterprise.description = data.description }

    await enterprise.save()
  } catch (error) {
    console.error(error)
    throw error
  }
}
