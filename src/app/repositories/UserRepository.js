const { User } = require('../models')
const { Op } = require('sequelize')

module.exports = {

  create: user => User.create(user),

  findByEmail: email => User.findOne({ where: { email } }),

  findById: id => User.findByPk(id),

  findAll: () => User.findAll(),

  findAllByType: (type, enterprises) => User.findAll({
    where: {
      type,
      enterprise_id: {
        [Op.in]: [...enterprises]
      }
    }
  })

}
