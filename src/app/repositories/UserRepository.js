const User = require('../models/User');

module.exports = {

    create: async user => await User.create(user),

    findByEmail: async email => await User.findOne({ where: { email } })

};
