const models = require('../models')

const getAllLeads = async (request, response) => {
  try {
    const allLeads = await models.leadItems.findAll()

    return response.send(allLeads)
  } catch (error) {
    return response.status(500)
      .send('500 Error ')
  }
}

const postLead = async (request, response) => {
  try {
    const allLeads = await models.leadItems.findAll()
    /*    const {
          categories, characters, decades, description, name, slug, tags,
        } = request.body

        if (!categories || !characters || !decades || !description || !name || !slug || !tags) {
          return response
            .status(400)
            .send('404 - Required attributes:  "categories","characters","decades","description","name","slug","tags"')
        }

        const [newNostalgiaItem] = await models.nostalgiaItems.findOrCreate({
          where: { slug },
          defaults: { description, name },
        }) */


    /*
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  timeStart: { type: Sequelize.DATEONLY },
  timeEnd: { type: Sequelize.DATEONLY },
  companyIndustry: { type: Sequelize.STRING },
  EIRSpecialty: { type: Sequelize.STRING },
  EIRJobTitle: { type: Sequelize.STRING },
  NAICSLaborCode: { type: Sequelize.STRING },
  DOLAnnualSalary: { type: Sequelize.DECIMAL(10, 2) },
  DOLHourlySalary: { type: Sequelize.DECIMAL(10, 2) }, // Annual/52/40
  weeklyHours: { type: Sequelize.INTEGER },
  OESSOCCode: { type: Sequelize.STRING },
  EIRDegree: { type: Sequelize.STRING },
  isExternalRecruiter: { type: Sequelize.TINYINT },
  isOfferedSigningBonus: { type: Sequelize.TINYINT },
  isOfferedRelocationBonus: { type: Sequelize.TINYINT },
  */
    return response.send(allLeads)
  } catch (error) {
    return response.status(500)
      .send('500 Error ')
  }
}

module.exports = { getAllLeads, postLead }
