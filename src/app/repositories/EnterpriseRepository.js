const { Enterprise } = require('../models')

module.exports = {

  create: enterprise => Enterprise.create(enterprise),

  findById: id => Enterprise.findByPk(id, {
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  }),

  findAll: () => Enterprise.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  }),

  findAllByManagerId: managerId => Enterprise.findAll({
    where: { manager_id: managerId },
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  })

}
