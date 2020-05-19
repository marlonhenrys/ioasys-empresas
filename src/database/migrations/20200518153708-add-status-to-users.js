'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'status',
      {
        type: Sequelize.ENUM([
          'Active',
          'Disabled'
        ]),
        allowNull: false,
        defaultValue: 'Active'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users',
      'status'
    )
  }
}
