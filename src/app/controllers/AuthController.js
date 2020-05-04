const authService = require('../services/AuthService')

module.exports = {

    authenticate: async (req, res) => {

        const { email, password } = req.body

        const data = await authService.authenticate(email, password)

        if (data.success)
            return res.status(200).json(data.user)

        return res.status(401).json(data.error)
    }
}