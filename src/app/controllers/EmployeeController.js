const { userService, enterpriseService } = require('../services')
const validator = require('indicative/validator')
const { user: errorMessages } = require('../utils/errorMessages')

module.exports = {

  index: async (req, res) => {

  },

  create: async (req, res) => {
    try {
      await validator.validate(req.body, {
        name: 'required|string|min:3',
        phone: 'required|string|numeric|min:10|max:11',
        password: 'required|string|min:6',
        enterprise_id: 'required|integer|above:0',
        email: 'required|email|unique:User'
      }, errorMessages)

      const user = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        enterprise_id: req.body.enterprise_id,
        type: 'Employee'
      }

      await enterpriseService.checkAuthority(user.enterprise_id, req.auth.id)

      await userService.create(user)

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
