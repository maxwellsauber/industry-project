const salaries = (connection, sequelize) => connection.define('salaries', {
  id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: sequelize.STRING, allowNull: false },
  hourlyRate: { type: sequelize.DECIMAL, allowNull: false },
}, {
  defaultScope: { attributes: { exclude: ['deletedAt', 'createdAt', 'updatedAt'] } },
}, {
  paranoid: true,
})

module.exports = salaries
