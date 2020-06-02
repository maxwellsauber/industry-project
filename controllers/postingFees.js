const models = require('../models')

const getAllPostingFees = async (request, response) => {
  try {
    const allPostingFees = await models.postingFees.findAll()

    return response.send(allPostingFees)
  } catch (error) {
    return response.status(500)
      .send('500 Error ')
  }
}

module.exports = { getAllPostingFees }
