const userRepository = require('../../repositories/UserRepository')

module.exports = async data => {
  try {
    const user = await userRepository.findById(data.id)

    if (data.name) { user.name = data.name }
    if (data.phone) { user.phone = data.phone }
    if (data.email) { user.email = data.email }

    await user.save()
  } catch (error) {
    console.error(error)
    throw error
  }
}
