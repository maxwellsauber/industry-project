// const bodyParser = require('body-parser')
const express = require('express')
// const path = require('path')

const { getAllLeads, postLead } = require('./controllers/leads')
const { getAllSigningBonuses } = require('./controllers/signingBonus')
const { getAllPostingFees } = require('./controllers/postingFees')
const { getAllRecruiterFees } = require('./controllers/recruiterFees')
const { getAllSalaries } = require('./controllers/salaries')
const { getAllTasks } = require('./controllers/tasks')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('index.html')
})

app.get('/leads', getAllLeads)
app.get('/bonus', getAllSigningBonuses)
app.get('/postingFees', getAllPostingFees)
app.get('/recruiterFees', getAllRecruiterFees)
app.get('/salaries', getAllSalaries)
app.get('/tasks', getAllTasks)

// TO DO
app.post('/leads', postLead)

app.all('*', (request, response) => response.status(404).send('Page Not Found'))

app.listen(3000, () => {
  console.log('Listening on port 3000...') // eslint-disable-line no-console
})
