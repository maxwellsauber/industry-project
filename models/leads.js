const leads = (connection, sequelize) => connection.define('leads', {
  id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  firstName: { type: sequelize.STRING },
  lastName: { type: sequelize.STRING },
  email: { type: sequelize.STRING },
  timeStart: { type: sequelize.STRING },
  timeEnd: { type: sequelize.STRING },
  companyIndustry: { type: sequelize.STRING },
  EIRSpecialty: { type: sequelize.STRING },
  EIRJobTitle: { type: sequelize.STRING },
  NAICSLaborCode: { type: sequelize.STRING },
  DOLAnnualSalary: { type: sequelize.DECIMAL(10, 2) },
  DOLHourlySalary: { type: sequelize.DECIMAL(10, 2) },
  weeklyHours: { type: sequelize.INTEGER },
  OESSOCCode: { type: sequelize.STRING },
  EIRDegree: { type: sequelize.STRING },
  isExternalRecruiter: { type: sequelize.STRING },
  isOfferedSigningBonus: { type: sequelize.STRING },
  isOfferedRelocationBonus: { type: sequelize.STRING },
}, {
  defaultScope: { attributes: { exclude: ['deletedAt', 'createdAt', 'updatedAt'] } },
}, {
  paranoid: true,
})

module.exports = leads
