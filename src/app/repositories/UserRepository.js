const { User } = require('../models')
const { Op } = require('sequelize')

module.exports = {

  create: user => User.create(user),

  findByEmail: email => User.findOne({ where: { email } }),

  findById: id => User.findByPk(id, {
    attributes: {
      exclude: ['password', 'createdAt', 'updatedAt']
    }
  }),

  findByIdWithEnterprise: id => User.findByPk(id, {
    attributes: {
      exclude: ['password', 'createdAt', 'updatedAt']
    },
    include: [
      {
        association: 'job',
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      }
    ]
  }),

  findAll: () => User.findAll({
    attributes: {
      exclude: ['password', 'createdAt', 'updatedAt']
    }
  }),

  findAllByEnterprisesId: enterprises => User.findAll({
    where: {
      enterprise_id: {
        [Op.in]: [...enterprises]
      }
    },
    attributes: {
      exclude: ['password', 'createdAt', 'updatedAt']
    }
  })

}
