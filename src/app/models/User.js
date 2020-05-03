const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            phone: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            type: DataTypes.ENUM('Administrator', 'Manager', 'Employee')
        }, {
            sequelize
        })
    }
}

module.exports = User