// USD currency formatter.
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

// Prevent the browser defeault, handle the calculator event
function calculatorSubmit(event) {
  event.preventDefault()

  let DOLAnnualSalary = 0
  let seperationPay = 0
  let recruiterFee = 0
  let relocationBonus = 0
  let signingBonus = 0
  // productiviy - exit
  let staffMoraleLoss = 0
  let productionDelays = 0
  let employeeProductivityLoss = 0
  let productivityExitTotal = 0
  // productiviy - RNH
  let RNHVacancy = 0
  let RNHLostCustomers = 0
  let productivityRNHTotal = 0
  let produductivityOnboarding = 0
  // productivity total
  let productivityLossTotal = 0
  // administrative - exit
  let outsourcedWork = 0
  let administrativeSeperationPay = 0
  let estimateUnemploymentTaxesIncrease = 0
  let possibleLegalClaims = 0
  let administrativeAdvertisingFees = 0
  let travelAndRegistrationFees = 0
  let outsideTrainer = 0
  let workshopMaterials = 0
  let administrativeTotal = 0
  // Salaries
  let salaryRecruiter = 0
  let salaryDirector = 0
  let salaryTechnician = 0
  let salaryHRManager = 0
  let salaryCEO = 0
  let salaryPeerWorker = 0
  let totalSalaries = 0
  let programCost = 0

  DOLAnnualSalary = Number(document.getElementById('DOL-annual-salary').value)
  seperationPay = (DOLAnnualSalary / 52) * 2
  const hasRecruiterFee = document.querySelector('input[name="visibleIsExternalRecruiter"]:checked').value
  if (hasRecruiterFee === 'yes') {
    document.getElementById('isExternalRecruiter').value = 'yes'
    recruiterFee = DOLAnnualSalary * 0.22
  } else {
    document.getElementById('isExternalRecruiter').value = 'no'
    recruiterFee = 0
  }

  const hasSigningBonus = document.querySelector('input[name="visibleIsOfferedSigningBonus"]:checked').value
  if (hasSigningBonus === 'yes') {
    document.getElementById('isOfferedSigningBonus').value = 'yes'
    signingBonus = 20238.46
  } else {
    document.getElementById('isOfferedSigningBonus').value = 'no'
    signingBonus = 0
  }

  const hasRelocationBonus = document.querySelector('input[name="visibleIsOfferedRelocationBonus"]:checked').value
  if (hasRelocationBonus === 'yes') {
    document.getElementById('isOfferedRelocationBonus').value = 'yes'
    relocationBonus = 2100
  } else {
    document.getElementById('isOfferedRelocationBonus').value = 'no'
    relocationBonus = 0
  }
  // Hidden Costs
  // Productivity -Exit
  staffMoraleLoss = Number(document.getElementById('staff-morale-loss').value)
  productionDelays = Number(document.getElementById('production-delays').value)
  employeeProductivityLoss = ((DOLAnnualSalary / 52) * 2) * 0.15
  productivityExitTotal = staffMoraleLoss + productionDelays + employeeProductivityLoss
  // Productivity - RNH
  RNHLostCustomers = Number(document.getElementById('lost-customers').value)
  RNHVacancy = ((0.45 * (DOLAnnualSalary / 365)) * 60) // 60 is the average vancy
  productivityRNHTotal = RNHLostCustomers + RNHVacancy
  // Productivity Onboarding
  produductivityOnboarding = ((0.15 * DOLAnnualSalary) / 365) * 60
  // Productivity Total
  productivityLossTotal = productivityExitTotal + productivityRNHTotal + produductivityOnboarding

  // ADMINISTRATIVE - exit
  outsourcedWork = Number(document.getElementById('outsourced-work').value)
  administrativeSeperationPay = (DOLAnnualSalary / 52) * 2
  estimateUnemploymentTaxesIncrease = Number(document.getElementById('outsourced-work').value)
  possibleLegalClaims = Number(document.getElementById('possible-legal-claims').value)
  administrativeAdvertisingFees = 4180 // This is for one posting across major job search sites.
  travelAndRegistrationFees = Number(document.getElementById('travel-and-registration-fees').value)
  outsideTrainer = Number(document.getElementById('outside-trainer').value)
  workshopMaterials = Number(document.getElementById('workshop-materials').value)

  administrativeTotal = outsourcedWork +
    administrativeSeperationPay +
    estimateUnemploymentTaxesIncrease +
    possibleLegalClaims +
    administrativeAdvertisingFees +
    travelAndRegistrationFees +
    outsideTrainer +
    workshopMaterials
  // if (document.getElementById('EXAMPLE-CHECKBOX').checked === true) { EXAMPLEPOSITION = HOURS * (H-SALARY + (H-SALARY * 0.35)) }
  if (document.getElementById('salary-recruiter').checked === true) { salaryRecruiter = 42 * (32.41 + (32.41 * 0.35)) }
  if (document.getElementById('salary-director').checked === true) { salaryDirector = 46 * (84.33 + (84.33 * 0.35)) }
  if (document.getElementById('salary-technician').checked === true) { salaryTechnician = 2 * (21.79 + (21.79 * 0.35)) }
  if (document.getElementById('salary-hr-manager').checked === true) { salaryHRManager = 29 * (40.79 + (40.79 * 0.35)) }
  if (document.getElementById('salary-ceo').checked === true) { salaryCEO = 9 * ((1.75 * (DOLAnnualSalary / 2080)) + ((1.75 * (DOLAnnualSalary / 2080)) * 0.35)) } // eslint-disable-line max-len
  if (document.getElementById('salary-peer-worker').checked === true) { salaryPeerWorker = 103 * ((DOLAnnualSalary / 2080) + ((DOLAnnualSalary / 2080) * 0.35)) } // eslint-disable-line max-len

  programCost = 5710 + (1300 * 12)

  totalSalaries = salaryRecruiter +
    salaryDirector +
    salaryTechnician +
    salaryHRManager +
    salaryCEO +
    salaryPeerWorker

  // ADD ALL THE THINGS
  const calculation = seperationPay +
    recruiterFee +
    relocationBonus +
    signingBonus +
    productivityLossTotal +
    administrativeTotal +
    totalSalaries

  const programSavings = calculation - programCost

  document.getElementById('DOLHourlySalary').value = DOLAnnualSalary / 2080

  document.getElementById('result-calcuation').innerHTML = formatter.format(calculation)
  document.getElementById('seperation-pay').innerHTML = formatter.format(seperationPay)
  document.getElementById('productivity-loss-total').innerHTML = formatter.format(productivityLossTotal)
  document.getElementById('administraive-total').innerHTML = formatter.format(administrativeTotal)
  document.getElementById('salaries-total').innerHTML = formatter.format(totalSalaries)

  document.getElementById('program-cost').innerHTML = formatter.format(programCost)
  document.getElementById('program-savings').innerHTML = formatter.format(programSavings)

  document.getElementById('result').style.display = 'block'

  document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'end' })

  const xhttp = new XMLHttpRequest()
  const data = {}
  const form = document.getElementById('oa-calculator')
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < form.length; i++) {
    const input = form[i]
    if (input.name) {
      data[input.name] = input.value
    }
  }

  xhttp.open('POST', '/leads', true)
  xhttp.setRequestHeader('Content-type', 'application/json')
  xhttp.send(JSON.stringify(data))
}// end Submit event handler

// Add an event listener to the calculator
document.getElementById('oa-calculator').addEventListener('submit', calculatorSubmit)

/* eslint-disable */
jQuery(document).ready(function ($) {
  if (window.jQuery().datetimepicker) {
    $('#timeStart').datetimepicker({ format: 'MM-DD-YYYY' });
    $('#timeEnd').datetimepicker({ format: 'MM-DD-YYYY' });
  }
});

const doc = new jsPDF()
const specialElementHandlers = {
  '#editor': function (element, renderer) {
    return true
  }
}

$('#print').click(function () {
  doc.fromHTML($('#result-inner').html(), 15, 15, {
    'width': 170,
    'elementHandlers': specialElementHandlers
  });
  doc.save('open-avenues-result.pdf');
})
/* eslint-disable */