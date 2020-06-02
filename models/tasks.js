const tasks = (connection, sequelize) => connection.define('tasks', {
  id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  task: { type: sequelize.STRING, allowNull: false },
  name: { type: sequelize.STRING, allowNull: false },
  hours: { type: sequelize.INTEGER, allowNull: false },
  salaryId: { type: sequelize.INTEGER, allowNull: false },
}, {
  defaultScope: { attributes: { exclude: ['deletedAt', 'createdAt', 'updatedAt'] } },
}, {
  paranoid: true,
})

module.exports = tasks
