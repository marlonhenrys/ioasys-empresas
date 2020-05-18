const { userService } = require('../services')
const validator = require('indicative/validator')
const { user: errorMessages } = require('../utils/errorMessages')

module.exports = {

  index: async (req, res) => {
    try {
      const { type, enterpriseId } = req.query
      const users = await userService.findAll(req.auth, type, enterpriseId)

      return res.status(200).json(users)
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

      await userService.validation.create(user, req.auth)
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
    try {
      const { id } = req.params
      const user = await userService.findOne(id, req.auth)

      return res.status(200).json(user)
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
        name: 'string|min:3',
        phone: 'string|numeric|min:10|max:11',
        email: 'email|unique:User'
      }, errorMessages)

      const data = {
        id: req.params.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
      }

      await userService.validation.update(data, req.auth)
      await userService.update(data)

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
      await userService.destroy(id, req.auth)

      return res.status(204).send()
    } catch (error) {
      console.error(error)

      return res.status(error.status || 500).json({
        message: error.message
      })
    }
  }
}
