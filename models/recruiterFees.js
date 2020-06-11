const recruiterFees = (connection, sequelize) => connection.define('recruiterFees', {
  id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  majorDiscipline: { type: sequelize.STRING, allowNull: false },
  avgPercent: { type: sequelize.DECIMAL, allowNull: false },
  avgSalary: { type: sequelize.INTEGER, allowNull: false },

}, {
  defaultScope: { attributes: { exclude: ['deletedAt', 'createdAt', 'updatedAt'] } },
}, {
  paranoid: true,
})

module.exports = recruiterFees
