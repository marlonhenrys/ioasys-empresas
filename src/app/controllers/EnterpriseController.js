const { enterpriseService } = require('../services')
const validator = require('indicative/validator')
const { enterprise: errorMessages } = require('../utils/errorMessages')

module.exports = {

  index: async (req, res) => {

  },

  create: async (req, res) => {
    try {
      await validator.validate(req.body, {
        name: 'required|string',
        phone: 'required|string|numeric|min:10',
        manager_id: 'required|integer|above:0',
        cnpj: 'required|string|min:14|max:14|unique:Enterprise',
        description: 'string'
      }, errorMessages)

      const enterprise = {
        name: req.body.name,
        phone: req.body.phone,
        cnpj: req.body.cnpj,
        manager_id: req.body.manager_id,
        description: req.body.description
      }

      //   await userService.checkPermission.create(user, req.auth)

      await enterpriseService.create(enterprise)

      return res.status(204).send()
    } catch (error) {
      console.error(error)

      return res.status(error.status || 500).json({
        message: error.message
      })
    }
  },

  show: async (req, res) => {

  },

  update: async (req, res) => {

  },

  destroy: async (req, res) => {

  }
}
