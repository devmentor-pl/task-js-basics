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

Calculator.prototype.add = function (num1, num2) {
	const result = number1 + number2
	this.history.push(`${number1} + ${number2} = ${result}`)
}

Calculator.prototype.odd = function (num1, num2) {
	const result = number1 - number2
	this.history.push(`${number1} - ${number2} = ${result}`)
}

Calculator.prototype.multiply = function (num1, num2) {
	const result = number1 * number2
	this.history.push(`${number1} * ${number2} = ${result}`)
}

Calculator.prototype.divide = function (num1, num2) {
	const result = number1 / number2
	this.history.push(`${number1} / ${number2} = ${result}`)
}

Calculator.prototype.pow = function (num1, num2) {
	let result = 1
	for (let i = 0; i < number2; i++) {
		result = result * number1
	}
	this.history.push(`${number1} ^ ${number2} = ${result}`)
}

const calc = new Calculator()
let action, promptContent, isCorrectAction, number1, number2
do {
	promptContent =
		'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'
	promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n'
	promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString()

	action = prompt(promptContent)
	isCorrectAction = calc.isCorrectAction(action)
	if (isCorrectAction) {
		number1 = parseFloat(prompt('Podaj liczbę nr 1'))
		number2 = parseFloat(prompt('Podaj liczbę nr 2'))

		if (isNaN(number1) || isNaN(number2)) {
			alert('Podaj poprawne liczby!')
		} else {
			switch (action) {
				case '+':
					calc.add(number1, number2)
					break

				case '-':
					calc.odd(number1, number2)
					break

				case '*':
					calc.multiply(number1, number2)
					break

				case '/':
					calc.divide(number1, number2)
					break

				case '^':
					calc.pow(number1, number2)
					break
			}
		}
	}
} while (calc.isCorrectAction(action))
