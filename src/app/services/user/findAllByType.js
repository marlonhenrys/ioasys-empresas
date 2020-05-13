const userRepository = require('../../repositories/UserRepository')

module.exports.findAllByType = async type => {
  try {
    const users = await userRepository.findAllByType(type)

    if (!users) {
      throw new Error('Não foi possível carregar a lista de usuários')
    }

    return users
  } catch (error) {
    console.error(error)
    throw error
  }
}
