module.exports = {
    user: {
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
        'enterprise_id.required_when': 'ID de empresa é obrigatório para funcionários',
        'enterprise_id.integer': 'ID de empresa inválido',
        'enterprise_id.above': 'ID de empresa inválido',
        'enterprise_id.only_accept': 'ID de empresa é aceito apenas para funcionários',
        'email.required': 'O email é obrigatório',
        'email.email': 'Formato de email inválido',
        'email.unique': 'Este email já está cadastrado'
    }
}