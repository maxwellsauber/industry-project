const models = require('../models')

const getAllTasks = async (request, response) => {
  try {
    const allTasks = await models.tasks.findAll()

    return response.send(allTasks)
  } catch (error) {
    return response.status(500)
      .send('500 Error ')
  }
}

module.exports = { getAllTasks }
