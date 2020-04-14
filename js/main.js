// Add an event listener to the calculator
document.getElementById("oa-calculator").addEventListener('submit', calculatorSubmit)

// Prevent the browser defeault, handle the calculator event
function calculatorSubmit(event) {
  event.preventDefault();
  var numOne = Number(document.getElementById("salary").value)
  var numTwo = Number(document.getElementById("recruiter-fee").value / 100)
  var numOperator = "multiply"
  var result = document.getElementById("result")

  var calculation = calculate(numOne, numTwo, numOperator)

  result.innerHTML = calculation


}//end Submit event handler

//Calculate two numbers
function calculate(n1, n2, operator) {
  switch (operator) {
    case 'add':
      return n1 + n2
      break
    case 'subtract':
      return n1 - n2
      break
    case 'multiply':
      return n1 * n2
      break
    case 'devide':
      return n1 / n2
      break
    default:
      return "How did you do that?"
      break
  }
} 