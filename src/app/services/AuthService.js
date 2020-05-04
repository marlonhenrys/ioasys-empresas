const userRepository = require('../repositories/UserRepository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { secret } = require('../../config/auth');

const generateToken = user_id => jwt.sign({ user_id }, secret, { expiresIn: 86400 })

module.exports = {

    authenticate: async (email, password) => {

        const user = await userRepository.findByEmail(email)

        if (!user)
            return { success: false, error: { message: 'User not found' } }

        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword)
            return { success: false, error: { message: 'Invalid password' } }

        const token = generateToken(user.id)
        user.password = undefined

        return { success: true, user: { ...user.toJSON(), token } }
    }
}
