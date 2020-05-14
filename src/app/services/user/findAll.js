const userRepository = require('../../repositories/UserRepository')
const enterpriseRepository = require('../../repositories/EnterpriseRepository')
const { ADM, MGR, EMP } = require('../../utils/typeUsers')

module.exports = async (auth, type, enterpriseId) => {
  try {
    let users

    if (auth.type === ADM) {
      users = await userRepository.findAll()
    } else if (auth.type === MGR) {
      const enterprises = await enterpriseRepository.findAllByManagerId(auth.id)
      const onlyId = enterprises.map(enterprise => enterprise.id)

      users = await userRepository.findAllInEnterprises([...onlyId])
    } else if (auth.type === EMP) {
      users = await userRepository.findAllInEnterprises([])
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
