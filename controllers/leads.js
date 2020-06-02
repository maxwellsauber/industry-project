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

module.exports = { getAllLeads }
