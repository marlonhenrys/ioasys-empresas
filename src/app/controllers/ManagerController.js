const { userService } = require('../services')
const validator = require('indicative/validator')
const { user: errorMessages } = require('../utils/errorMessages')
const { MGR } = require('../utils/typeUsers')

module.exports = {

  index: async (req, res) => {
    try {
      const managers = await userService.findAllByType(MGR)
      return res.status(200).json(managers)
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
        email: 'required|email|unique:User'
      }, errorMessages)

      const user = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        type: 'Manager'
      }

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
      const manager = await userService.findByIdAndType(id, MGR)
      return res.status(200).json(manager)
    } catch (error) {
      console.error(error)
      return res.status(error.status || 500).json({
        message: error.message
      })
    }
  },

  update: async (req, res) => {

  },

  destroy: async (req, res) => {

  }
}
