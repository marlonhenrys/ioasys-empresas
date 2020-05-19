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
    'email.unique': 'Este email já está cadastrado',
    'users.required': 'A lista de usuários é obrigatória',
    'users.array': 'É esperado um vetor com ID de usuários',
    'status.required': 'O status é obrigatório',
    'status.in': 'Status inválido'
  },
  enterprise: {
    'name.required': 'O nome é obrigatório',
    'phone.required': 'O telefone é obrigatório',
    'phone.numeric': 'Formato de telefone inválido',
    'phone.min': 'O telefone deve possuir no mínimo 10 dígitos (com DDD)',
    'manager_id.required': 'O ID do Empresário é obrigatório',
    'manager_id.integer': 'ID de empresa inválido',
    'manager_id.above': 'ID de empresa inválido',
    'cnpj.required': 'O CNPJ é obrigatório',
    'cnpj.min': 'O CNPJ deve possuir 14 caracteres',
    'cnpj.max': 'O CNPJ deve possuir 14 caracteres',
    'cnpj.unique': 'Este CNPJ já está cadastrado'
  }
}
