function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}


Calculator.prototype.performOperation = function (num1, num2, operation) {
  const parsedNum1 = Number(num1)
  const parsedNum2 = Number(num2)

  if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
    alert("The given values must be numbers.")
    return
  }
  let result
  switch (operation) {
    case "+":
      result = parsedNum1 + parsedNum2
      break
    case "-":
      result = parsedNum1 - parsedNum2
      break
    case "*":
      result = parsedNum1 * parsedNum2
      break
    case "/":
      if (parsedNum2 === 0) {
        alert("Can't divide by zero.")
        return
      }
      result = parsedNum1 / parsedNum2
      break
    case "^":
      result = 1
      for (let i = 0; i < parsedNum2; i++) {
        result *= parsedNum1
      }
      break
    default:
      alert("Unknown operation.")
      return
  }
  this.history.push(`${parsedNum1} ${operation} ${parsedNum2} = ${result}`)
  alert(`Result: ${result}`)
}

const calc = new Calculator()
let action, promptContent, isCorrectAction, number1, number2
do {
  promptContent =
    "Specify the operation (+, -, *, /, ^) or Cancel, ending the action: \n"
  promptContent += "List of previous operations: \n" + calc.getHistoryAsString()
  action = prompt(promptContent)

  isCorrectAction = calc.isCorrectAction(action)
  if (isCorrectAction) {
    number1 = prompt("Enter the first number:")
    number2 = prompt("Enter the second number:")
    calc.performOperation(number1, number2, action)
  }
} while (calc.isCorrectAction(action))