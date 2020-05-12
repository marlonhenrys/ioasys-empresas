const userService = require('../services/user/create')
const validator = require('indicative/validator')
const { user: errorMessages } = require('../utils/errorMessages')
const checkPermission = require('../services/user/checkPermission')

module.exports = {

  index: async (req, res) => {

  },

  create: async (req, res) => {
    try {
      await validator.validate(req.body, {
        name: 'required|string|min:3',
        phone: 'required|string|numeric|min:10|max:11',
        password: 'required|string|min:6',
        type: 'required|string|in:Administrator,Manager,Employee',
        enterprise_id: 'required_when:type,Employee|integer|' +
                    'above:0|only_accept:type,Employee',
        email: 'required|email|unique:User'
      }, errorMessages)

      const user = {
        name: req.body.name,
        phone: req.body.phone,
        password: req.body.password,
        type: req.body.type,
        enterprise_id: req.body.enterprise_id,
        email: req.body.email
      }

      await checkPermission.create(user, req.auth)

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
