const userRepository = require('../../repositories/UserRepository')
const { ADM, MGR, EMP } = require('../../utils/typeUsers')
const ApplicationError = require('../../utils/errorHandler')

module.exports = async (id, auth) => {
  try {
    let permission = false
    const user = await userRepository.findByIdWithEnterprise(id)

    if (!user) {
      throw new ApplicationError('Usuário não encontrado', 404)
    }

    if (auth.type === ADM && user.type === MGR) {
      permission = true
    } else if (auth.type === MGR && user.type === EMP) {
      permission = auth.id === user.job.manager_id
    }

    if (!permission) {
      throw new ApplicationError('Você não tem permissão para excluir este registro', 403)
    }

    await user.destroy()
  } catch (error) {
    console.error(error)
    throw error
  }
}
