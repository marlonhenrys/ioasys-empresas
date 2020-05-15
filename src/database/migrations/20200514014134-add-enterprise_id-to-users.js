'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'enterprise_id',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'enterprises', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users',
      'enterprise_id'
    )
  }
}
