const leads = (connection, sequelize) => connection.define('leads', {
  id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  firstName: { type: sequelize.STRING, allowNull: false },
  lastName: { type: sequelize.STRING, allowNull: false },
  email: { type: sequelize.STRING, allowNull: false },
  timeStart: { type: sequelize.DATEONLY },
  timeEnd: { type: sequelize.DATEONLY },
  companyIndustry: { type: sequelize.STRING },
  EIRSpecialty: { type: sequelize.STRING },
  EIRJobTitle: { type: sequelize.STRING },
  NAICSLaborCode: { type: sequelize.STRING },
  DOLAnnualSalary: { type: sequelize.DECIMAL(10, 2) },
  DOLHourlySalary: { type: sequelize.DECIMAL(10, 2) },
  weeklyHours: { type: sequelize.INTEGER },
  OESSOCCode: { type: sequelize.STRING },
  EIRDegree: { type: sequelize.STRING },
  isExternalRecruiter: { type: sequelize.TINYINT },
  isOfferedSigningBonus: { type: sequelize.TINYINT },
  isOfferedRelocationBonus: { type: sequelize.TINYINT },
}, {
  defaultScope: { attributes: { exclude: ['deletedAt', 'createdAt', 'updatedAt'] } },
}, {
  paranoid: true,
})

module.exports = leads
