function Calculator() {
  this.history = []

  this.operations = {
    "+": this.add.bind(this),
    "-": this.subtract.bind(this),
    "*": this.multiply.bind(this),
    "/": this.divide.bind(this),
    "^": this.power.bind(this),
  }
}

Calculator.prototype.add = function (a, b) {
  return a + b
}

Calculator.prototype.subtract = function (a, b) {
  return a - b
}

Calculator.prototype.multiply = function (a, b) {
  return a * b
}

Calculator.prototype.divide = function (a, b) {
  if (b === 0) {
    alert("Can't divide by zero.")
    zero
    return
  }
  return a / b
}

Calculator.prototype.power = function (a, b) {
  let result = 1
  for (let i = 0; i < b; i++) {
    result *= a
  }
  return result
}

Calculator.prototype.isCorrectAction = function (action) {
  return Object.keys(this.operations).includes(action)
}

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join("\n")
}

Calculator.prototype.performOperation = function (num1, num2, operation) {
  const parsedNum1 = Number(num1)
  const parsedNum2 = Number(num2)

  if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
    alert("The given values must be numbers.")
    return
  }

  const operationFunc = this.operations[operation]
  if (!operationFunc) {
    alert("Unknown operation.")
    return
  }

  const result = operationFunc(parsedNum1, parsedNum2)
  if (result !== undefined) {
    this.history.push(`${parsedNum1} ${operation} ${parsedNum2} = ${result}`)
    alert(`Result: ${result}`)
  }
}

const calc = new Calculator()
let action, promptContent, isCorrectAction, number1, number2
do {
  promptContent =
    "Specify the operation (+, -, *, /, ^) or Cancel, ending the action: \n"
  promptContent += "List of previous operations: \n" + calc.getHistoryAsString()
  action = prompt(promptContent)

  if (calc.isCorrectAction(action)) {
    number1 = prompt("Enter the first number:")
    number2 = prompt("Enter the second number:")
    calc.performOperation(number1, number2, action)
  }
} while (calc.isCorrectAction(action))
