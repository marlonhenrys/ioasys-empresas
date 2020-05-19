const validation = require('./validation')
const create = require('./create')
const findAll = require('./findAll')
const findOne = require('./findOne')
const update = require('./update')
const setStatus = require('./setStatus')
const destroy = require('./destroy')

module.exports = {
  validation,
  create,
  findAll,
  findOne,
  update,
  setStatus,
  destroy
}
