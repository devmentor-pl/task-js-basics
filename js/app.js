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
	// 1. zamień wartości przekazane przez parametr na typ number
	// 2. sprawdź czy są one poprawne
	// 3. jeśli tak to wykonaj działanie i zapisz jego resultat
	// 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
	const number2 = parseFloat(num2)
	const number1 = parseFloat(num1)

	if (typeof number1 === 'number' && typeof number2 === 'number') {
		const result = number1 + number2
		this.history.push(`${number1} + ${number2} = ${result}`)
	}
}

Calculator.prototype.odd = function (num1, num2) {
	const number1 = parseInt(num1)
	const number2 = parseInt(num2)

	if (typeof number1 === 'number' && typeof number2 === 'number') {
		const result = number1 - number2
		this.history.push(`${number1} - ${number2} = ${result}`)
	}
}

Calculator.prototype.multiply = function (num1, num2) {
	const number1 = parseInt(num1)
	const number2 = parseInt(num2)

	if (typeof number1 === 'number' && typeof number2 === 'number') {
		const result = number1 * number2
		this.history.push(`${number1} * ${number2} = ${result}`)
	}
}

Calculator.prototype.divide = function (num1, num2) {
	const number1 = parseInt(num1)
	const number2 = parseInt(num2)

	if (typeof number1 === 'number' && typeof number2 === 'number') {
		const result = number1 / number2
		this.history.push(`${number1} / ${number2} = ${result}`)
	}
}

Calculator.prototype.pow = function (num1, num2) {
	const number1 = parseInt(num1)
	const number2 = parseInt(num2)

	if (typeof number1 === 'number' && typeof number2 === 'number') {
		let result = 1
		for (let i = 0; i < number2; i++) {
			result = result * number1
		}
		this.history.push(`${number1} ^ ${number2} = ${result}`)
	}
}

const calc = new Calculator()
let action, promptContent, isCorrectAction, number1, number2
do {
	promptContent =
		'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n' // \n - znak nowej linii
	promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n'
	promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString()

	action = prompt(promptContent)
	isCorrectAction = calc.isCorrectAction(action)
	if (isCorrectAction) {
		number1 = prompt('Podaj liczbę nr 1')
		number2 = prompt('Podaj liczbę nr 2')

		if (action === '+') {
			calc.add(number1, number2)
		} else if (action === '-') {
			calc.odd(number1, number2)
		} else if (action === '*') {
			calc.multiply(number1, number2)
		} else if (action === '/') {
			calc.divide(number1, number2)
		} else if (action === '^') {
			calc.pow(number1, number2)
		}
	}
} while (calc.isCorrectAction(action))
