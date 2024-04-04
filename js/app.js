
function Calculator() {
    this.actions = ['+', '-', '*', '/', '^']
    this.history = []
}

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action)
}

Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n')
}
Calculator.prototype.numberValidation = function(number) {
    while (isNaN(number) || number === "") { number = prompt('Nieprawidłowa wartość, wprowadź ponownie liczbę') }
    return number
}

Calculator.prototype.getPowResult = function(a, b) {
    let i = 0
    let powResult = 1
    while (i < b) {
        powResult *= a
        i++
    }
    return powResult
}

Calculator.prototype.getResult = function(operator, a, b) {

    switch (operator) {
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        case '*':
            return a * b
            break
        case '/':
            return a / b
            break
        case '^':
            return this.getPowResult(a, b)
            break
    }

}

Calculator.prototype.calculate = function (action, num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    let result = this.getResult(action, num1, num2)
    this.history.push(`${num1} ${action} ${num2} = ${result}`)
}

const calc = new Calculator()
let action, promptContent, isCorrectAction, number1, number2
do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n' // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n'
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString()
    action = prompt(promptContent)
    isCorrectAction = calc.isCorrectAction(action)
    if (isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1')
        number1 = calc.numberValidation(number1)
        number2 = prompt('Podaj liczbę nr 2')
        number2 = calc.numberValidation(number2)
        calc.calculate(action, number1, number2)
    }
} while (calc.isCorrectAction(action))





