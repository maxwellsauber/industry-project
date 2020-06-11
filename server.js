const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const csv = require('express-csv') // eslint-disable-line no-unused-vars

const { getAllLeads, postLead } = require('./controllers/leads')
const { getAllSigningBonuses } = require('./controllers/signingBonus')
const { getAllPostingFees } = require('./controllers/postingFees')
const { getAllRecruiterFees } = require('./controllers/recruiterFees')
const { getAllSalaries } = require('./controllers/salaries')
const { getAllTasks } = require('./controllers/tasks')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('index.html')
})

app.get('/leads', getAllLeads)


app.get('/csv', (req, res) => {
  res.csv([getAllLeads], true)
})
// Use /leads, copy paste into https://json-csv.com/
/*
app.get('/csv', (req, res) => {
  res.csv([
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 },
  ], true)
})
*/

app.get('/bonus', getAllSigningBonuses)
app.get('/postingFees', getAllPostingFees)
app.get('/recruiterFees', getAllRecruiterFees)
app.get('/salaries', getAllSalaries)
app.get('/tasks', getAllTasks)
app.post('/leads', bodyParser.json(), postLead)
app.all('*', (request, response) => response.status(404).send('Page Not Found'))

app.listen(3000, () => {
  console.log('Listening on port 3000...') // eslint-disable-line no-console
})
