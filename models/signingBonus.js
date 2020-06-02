const signingBonus = (connection, sequelize) => connection.define('signingBonus', {
  id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  companyName: { type: sequelize.STRING, allowNull: false },
  value: { type: sequelize.STRING, allowNull: false },
}, {
  defaultScope: { attributes: { exclude: ['deletedAt', 'createdAt', 'updatedAt'] } },
}, {
  paranoid: true,
})

module.exports = signingBonus
