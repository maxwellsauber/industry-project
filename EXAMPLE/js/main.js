// Calculate two numbers
function calculate(n1, n2, operator) {
  switch (operator) {
    case 'add':
      return n1 + n2
    case 'subtract':
      return n1 - n2
    case 'multiply':
      return n1 * n2
    case 'devide':
      return n1 / n2
    default:
      return 'How did you do that?'
  }
}

// Prevent the browser defeault, handle the calculator event
function calculatorSubmit(event) {
  event.preventDefault()
  const numOne = Number(document.getElementById('salary').value)
  const numTwo = Number(document.getElementById('recruiter-fee').value / 100)
  const numOperator = 'multiply'
  const result = document.getElementById('result')

  const calculation = calculate(numOne, numTwo, numOperator)

  result.innerHTML = calculation
}// end Submit event handler

// Add an event listener to the calculator
document.getElementById('oa-calculator').addEventListener('submit', calculatorSubmit)
