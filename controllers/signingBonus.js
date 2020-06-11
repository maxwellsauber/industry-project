const models = require('../models')

const getAllSigningBonuses = async (request, response) => {
  try {
    const allSigningBonuses = await models.signingBonus.findAll()

    return response.send(allSigningBonuses)
  } catch (error) {
    return response.status(500)
      .send('500 Error ')
  }
}

module.exports = { getAllSigningBonuses }
