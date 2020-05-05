const userRepository = require('../../repositories/UserRepository')
const bcrypt = require('bcrypt')

module.exports = {

    create: async ({ name, phone, email, password, type, enterprise_id }) => {

        try {

            password = await bcrypt.hash(password, 10)

            const user = await userRepository.create({
                name,
                phone,
                email,
                password,
                type,
                enterprise_id
            })

            user.password = undefined
            return user

        } catch (error) {
            console.error(error)
            throw error
        }
    }
}