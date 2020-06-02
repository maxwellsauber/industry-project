module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('leads', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      firstName: { type: Sequelize.STRING },
      lastName: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },

    })

    await queryInterface.createTable('postingFees', {

      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      postingName: { type: Sequelize.STRING },
      value: { type: Sequelize.INTEGER },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },

    })

    await queryInterface.createTable('recruiterFees', {

      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      majorDiscipline: { type: Sequelize.STRING },
      avgPercent: { type: Sequelize.DECIMAL(3, 2) },
      avgSalary: { type: Sequelize.INTEGER },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },

    })

    return queryInterface.createTable('signingBonus', {

      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      companyName: { type: Sequelize.STRING },
      value: { type: Sequelize.INTEGER },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: { type: Sequelize.DATE },

    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('leads')

    await queryInterface.dropTable('postingFees')

    await queryInterface.dropTable('recruiterFees')


    return queryInterface.dropTable('signingBonus')
  },
}
