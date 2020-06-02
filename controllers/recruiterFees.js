const models = require('../models')

const getAllRecruiterFees = async (request, response) => {
  try {
    const allRecruiterFees = await models.recruiterFees.findAll()

    return response.send(allRecruiterFees)
  } catch (error) {
    return response.status(500)
      .send('500 Error ')
  }
}

module.exports = { getAllRecruiterFees }
