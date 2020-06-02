const postingFees = (connection, sequelize) => connection.define('postingFees', {
  id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  postingName: { type: sequelize.STRING, allowNull: false },
  value: { type: sequelize.STRING, allowNull: false },
}, {
  defaultScope: { attributes: { exclude: ['deletedAt', 'createdAt', 'updatedAt'] } },
}, {
  paranoid: true,
})

module.exports = postingFees
