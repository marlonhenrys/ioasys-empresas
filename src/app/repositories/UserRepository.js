const { User } = require('../models')

module.exports = {

  create: user => User.create(user),

  findByEmail: email => User.findOne({ where: { email } }),

  findById: id => User.findByPk(id)

}
