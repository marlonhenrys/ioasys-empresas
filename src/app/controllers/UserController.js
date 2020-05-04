const userService = require('../services/UserService')

module.exports = {

    index: async (req, res) => {

    },

    create: async (req, res) => {

        const data = await userService.create(req.body)

        if (data.success)
            return res.status(201).json(data.user)

        return res.status(422).json(data.errors)
    },

    show: async (req, res) => {

    },

    update: async (req, res) => {

    },

    destroy: async (req, res) => {

    }
}