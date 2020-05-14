const userRepository = require('../../repositories/UserRepository')
const { ADM, MGR, EMP } = require('../../utils/typeUsers')

module.exports.findAll = async (auth, type, enterpriseId) => {
  try {
    let users

    if (auth.type === ADM) {
      users = await userRepository.findAll()
    } else if (auth.type === MGR) {
    //   enterprises = await enterpriseRepository.findAllByManagerId(auth.id)
    //   enterprises = enterprises.map(enterprise => enterprise.id)
      users = await userRepository.findAllByType('Employee', [])
    } else if (auth.type === EMP) {
      users = await userRepository.findAllByType('Employee', [])
    }

    if (!users) {
      throw new Error('Não foi possível carregar a lista de usuários')
    }

    if (type) {
      users = users.filter(user => user.type === type)
    }
    if (enterpriseId) {
      users = users.filter(user => user.enterprise_id === enterpriseId)
    }

    return users
  } catch (error) {
    console.error(error)
    throw error
  }
}
