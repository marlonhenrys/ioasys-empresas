const userRepository = require('../../repositories/UserRepository')
const ApplicationError = require('../../utils/errorHandler')

module.exports.findByIdAndType = async (id, type) => {
  try {
    const user = await userRepository.findByIdAndType(id, type)

    if (!user) {
      throw new ApplicationError('Usuário não encontrado', 404)
    }

    return user
  } catch (error) {
    console.error(error)
    throw error
  }
}
