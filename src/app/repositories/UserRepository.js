const { User } = require('../models')
const { Op } = require('sequelize')

module.exports = {

  create: user => User.create(user),

  findByEmail: email => User.findOne({ where: { email } }),

  findById: id => User.findByPk(id),

  findAll: () => User.findAll(),

  findAllEmployeesByEnterpriseId: enterprises => User.findAll({
    where: {
      enterprise_id: {
        [Op.in]: [...enterprises]
      }
    }
  })

}
