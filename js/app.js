function Calculator() {
	this.actions = {
		'+': this.add,
		'-': this.odd,
		'*': this.multiply,
		'/': this.divide,
		'^': this.pow,
	}
	this.history = []
}

Calculator.prototype.isCorrectAction = function (action) {
	if (Object.keys(this.actions).includes(action)) {
		return true
	}
}

Calculator.prototype.getHistoryAsString = function () {
	return this.history.join('\n')
}

Calculator.prototype.add = function (num1, num2) {
	return number1 + number2
}

Calculator.prototype.odd = function (num1, num2) {
	return number1 - number2
}

Calculator.prototype.multiply = function (num1, num2) {
	return number1 * number2
}

Calculator.prototype.divide = function (num1, num2) {
	return number1 / number2
}

Calculator.prototype.pow = function (num1, num2) {
	let res = 1
	for (let i = 0; i < number2; i++) {
		res = res * number1
	}
	return res
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
	const operationFunc = calc.actions[action]

	if (isCorrectAction) {
		number1 = parseFloat(prompt('Podaj liczbę nr 1'))
		number2 = parseFloat(prompt('Podaj liczbę nr 2'))

		if (isNaN(number1) || isNaN(number2)) {
			alert('Podaj poprawne liczby!')
		} else {
			if (typeof operationFunc === 'function') {
				const result = operationFunc(number1, number2)
				calc.history.push(`${number1} ${action} ${number2} = ${result}`)
			}
		}
	}
} while (calc.isCorrectAction(action))
