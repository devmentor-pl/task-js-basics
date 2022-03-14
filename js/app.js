function Calculator() {
    this.actions = ['+', '-', '*', '/', '^']
    this.history = []
}

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action) && action.length === 1 && isNaN(Number(action))
}

Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n')
}

Calculator.prototype.add = function (num1, num2) {
    this.history.push(num1 + num2)
    return num1 + num2
}
Calculator.prototype.subtract = function (num1, num2) {
    this.history.push(num1 - num2)
    return num1 - num2
}
Calculator.prototype.multiply = function (num1, num2) {
    this.history.push(num1 * num2)
    return num1 * num2
}
Calculator.prototype.divide = function (num1, num2) {
    this.history.push(num1 / num2)
    return num1 / num2
}
Calculator.prototype.pow = function (num1, num2) {
    let poweredNumbers = 1
    for (let i = 1; i <= num2; i++) {
        poweredNumbers = poweredNumbers * num1
    }
    this.history.push(poweredNumbers)
    return poweredNumbers
}

const calc = new Calculator()
let action, promptContent, isCorrectAction, number1, number2
do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n'
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString()

    action = prompt(promptContent)
    isCorrectAction = calc.isCorrectAction(action)
    if (isCorrectAction) {
        number1 = Number(prompt('Podaj liczbę nr 1'))
        number2 = Number(prompt('Podaj liczbę nr 2'))

        if (!isNaN(number1) && !isNaN(number2)) {
            if (action === '+') {
                calc.add(number1, number2)
            }
            if (action === '-') {
                calc.subtract(number1, number2)
            }
            if (action === '*') {
                calc.multiply(number1, number2)
            }
            if (action === '/') {
                calc.divide(number1, number2)
            }
            if (action === '^') {
                calc.pow(number1, number2)
            }
        }
    }

} while (calc.isCorrectAction(action))

console.log({ calc })