const userRepository = require('../../repositories/UserRepository')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { secret } = require('../../../config/auth');
const ApplicationError = require('../../utils/errorHandler')

module.exports = {

    login: async (email, password) => {

        try {

            const user = await userRepository.findByEmail(email)

            if (!user)
                throw new ApplicationError('Usuário não encontrado', 404)

            const validPassword = await bcrypt.compare(password, user.password)

            if (!validPassword)
                throw new ApplicationError('Senha incorreta', 401)

            const token = jwt.sign({ user_id: user.id }, secret, {
                expiresIn: 86400
            })

            const response = {
                id: user.id,
                name: user.name,
                phone: user.phone,
                email: user.email,
                type: user.type,
                token
            }

            return response

        } catch (error) {
            console.error(error)
            throw error
        }
    }
}