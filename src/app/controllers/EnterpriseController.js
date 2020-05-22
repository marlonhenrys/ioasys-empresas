const { enterpriseService } = require('../services')
const validator = require('indicative/validator')
const { enterprise: errorMessages } = require('../utils/errorMessages')

module.exports = {

  index: async (req, res) => {
    try {
      const enterprises = await enterpriseService.findAll(req.auth)

      return res.status(200).json(enterprises)
    } catch (error) {
      console.error(error)

      return res.status(error.status || 500).json({
        message: error.message
      })
    }
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

      await enterpriseService.validation.create(enterprise, req.auth)
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
    try {
      const { id } = req.params
      const enterprise = await enterpriseService.findOne(id, req.auth)

      return res.status(200).json(enterprise)
    } catch (error) {
      console.error(error)

      return res.status(error.status || 500).json({
        message: error.message
      })
    }
  },

  update: async (req, res) => {
    try {
      await validator.validate(req.body, {
        name: 'string',
        phone: 'string|numeric|min:10',
        description: 'string'
      }, errorMessages)

      const data = {
        id: req.params.id,
        name: req.body.name,
        phone: req.body.phone,
        description: req.body.description
      }

      await enterpriseService.validation.update(data, req.auth)
      await enterpriseService.update(data)

      return res.status(204).send()
    } catch (error) {
      console.error(error)

      return res.status(error.status || 500).json({
        message: error.message
      })
    }
  },

  destroy: async (req, res) => {
    try {
      const { id } = req.params
      await enterpriseService.destroy(id, req.auth)

      return res.status(204).send()
    } catch (error) {
      console.error(error)

      return res.status(error.status || 500).json({
        message: error.message
      })
    }
  }
}
