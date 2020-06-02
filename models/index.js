const sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')

const leadItemsModels = require('./leads')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new sequelize(config.database, config.username, config.password, { /* Disable require capital "S" on sequelize */ // eslint-disable-line new-cap
  host: config.host, dialect: config.dialect,
})

const leadItems = leadItemsModels(connection, sequelize)

module.exports = {
  leadItems,
  Op: sequelize.Op,
}
