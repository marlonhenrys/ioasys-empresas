const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init (sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 254]
        }
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNumeric: true,
          len: [10, 11]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6, 254]
        }
      },
      type: {
        type: DataTypes.ENUM('Administrator', 'Manager', 'Employee'),
        allowNull: false
      }
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.belongsTo(models.Enterprise, { foreignKey: 'enterprise_id', as: 'job' })
    this.hasMany(models.Enterprise, { foreignKey: 'manager_id', as: 'enterprises' })
  }
}

module.exports = User
