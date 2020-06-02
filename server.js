// const bodyParser = require('body-parser')
const express = require('express')
// const path = require('path')

const { getAllLeads } = require('./controllers/leads')
const { getAllSigningBonuses } = require('./controllers/signingBonus')

const app = express()

// app.set('view engine', 'pug')
// app.use(express.static('public'))

app.get('/', getAllLeads)
app.get('/bonus', getAllSigningBonuses)

app.all('*', (request, response) => response.status(404).send('Page Not Found'))


app.listen(3000, () => {
  console.log('Listening on port 3000...') // eslint-disable-line no-console
})
