const userRepository = require('../../repositories/UserRepository')

module.exports = async (users, status) => {
  try {
    for (const id of users) {
      const user = await userRepository.findById(id)

      if (user) {
        user.status = status
        await user.save()
      }
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
