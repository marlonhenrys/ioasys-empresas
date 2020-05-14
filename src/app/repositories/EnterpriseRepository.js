const { Enterprise } = require('../models')

module.exports = {

  create: enterprise => Enterprise.create(enterprise),

  findById: id => Enterprise.findByPk(id),

  findAllByManagerId: managerId => Enterprise.findAll({
    where: { manager_id: managerId }
  }),

  findByIdAndManager: (id, managerId) => Enterprise.findOne({
    where: { id, manager_id: managerId }
  })

}
