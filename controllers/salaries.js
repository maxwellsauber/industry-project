const models = require('../models')

const getAllSalaries = async (request, response) => {
  try {
    const allSalaries = await models.salaries.findAll()

    return response.send(allSalaries)
  } catch (error) {
    return response.status(500)
      .send('500 Error ')
  }
}

module.exports = { getAllSalaries }
