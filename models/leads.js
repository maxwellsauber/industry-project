const leads = (connection, sequelize) => connection.define('leads', {
  id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  firstName: { type: sequelize.STRING, allowNull: false },
  lastName: { type: sequelize.STRING, allowNull: false },
  email: { type: sequelize.STRING, allowNull: false },
}, {
  defaultScope: { attributes: { exclude: ['deletedAt', 'createdAt', 'updatedAt'] } },
}, {
  paranoid: true,
})

module.exports = leads
