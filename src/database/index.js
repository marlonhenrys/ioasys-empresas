const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../app/models/User')
const Enterprise = require('../app/models/Enterprise')

const connection = new Sequelize(dbConfig)

User.init(connection)
Enterprise.init(connection)

User.associate(connection.models)
Enterprise.associate(connection.models)

module.exports = connection
