const { Model, DataTypes } = require('sequelize')

class Enterprise extends Model {
  static init (sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.belongsTo(models.User, { foreignKey: 'manager_id', as: 'manager' })
    this.hasMany(models.User, { foreignKey: 'enterprise_id', as: 'employees' })
  }
}

module.exports = Enterprise
