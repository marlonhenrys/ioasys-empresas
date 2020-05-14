const { Enterprise } = require('../models')

module.exports = {

  create: enterprise => Enterprise.create(enterprise)

}
