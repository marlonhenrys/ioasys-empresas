const userRepository = require('../../repositories/UserRepository')

module.exports = async (users, status) => {
  try {
    const userList = await Promise.all(users.forEach(async id => {
      const user = await userRepository.findById(id)

      if (user) { return user }
    }))

    await Promise.all(userList.forEach(async user => {
      user.status = status
      console.log(user)
      await user.save()
    }))
  } catch (error) {
    console.error(error)
    throw error
  }
}
