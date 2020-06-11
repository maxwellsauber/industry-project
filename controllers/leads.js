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
  const {
    email,
    firstName,
    lastName,
    DOLAnnualSalary,
    DOLHourlySalary,
    isExternalRecruiter,
    timeStart, timeEnd,
    companyIndustry,
    EIRSpecialty,
    EIRJobTitle,
    OESSOCCode,
    NAICSLaborCode,
    EIRDegree,
  } = request.body
  if (!DOLAnnualSalary || !email || !lastName) {
    return response
      .status(400)
      .send('404 - Required attributes:  "DOLAnnualSalary", "email", "lastName"')
  }

  const newLead = await models.leadItems.create({
    email,
    firstName,
    lastName,
    DOLAnnualSalary,
    DOLHourlySalary,
    isExternalRecruiter,
    timeStart,
    timeEnd,
    companyIndustry,
    EIRSpecialty,
    EIRJobTitle,
    OESSOCCode,
    NAICSLaborCode,
    EIRDegree,
  })
  return response.send(newLead)
  //  } catch (error) {
  //    return response.status(500)
  //     .send('500 Error ')
  //  }
}

module.exports = { getAllLeads, postLead }
