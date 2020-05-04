const userRepository = require('../repositories/UserRepository')
const validator = require('indicative/validator')
const bcrypt = require('bcrypt')

require('../../config/indicative')

module.exports = {

    create: async data => await validator.validateAll(data, {
        name: 'required|string|min:3',
        phone: 'required|string|numeric|min:10|max:11',
        password: 'required|string|min:6',
        type: 'required|string|in:Administrator,Manager,Employee',
        enterprise_id: 'required_when:type,Employee|integer|above:0',
        email: 'required|email|unique:User'
    }, {
        'name.required': 'O nome é obrigatório',
        'name.min': 'O nome deve possuir no mínimo 3 caracteres',
        'phone.required': 'O telefone é obrigatório',
        'phone.numeric': 'Formato de telefone inválido',
        'phone.min': 'O telefone deve possuir no mínimo 10 dígitos (com DDD)',
        'phone.max': 'O telefone deve possuir no máximo 11 dígitos (com DDD)',
        'password.required': 'A senha é obrigatória',
        'password.min': 'A senha deve possuir no mínimo 6 caracteres',
        'type.required': 'O tipo de usuário é obrigatório',
        'type.in': 'Tipo de usuário inválido',
        'enterprise_id.required_when': 'O ID de empresa é obrigatório para funcionários',
        'enterprise_id.above': 'ID de empresa inválido',
        'email.required': 'O email é obrigatório',
        'email.email': 'Formato de email inválido',
        'email.unique': 'Este email já está cadastrado'
    }).then(async ({ name, phone, email, password, type, enterprise_id }) => {

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

        return { success: true, user }

    }).catch(errors => ({ success: false, errors }))
}
