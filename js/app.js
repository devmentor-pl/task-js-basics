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

// dodawanie
Calculator.prototype.add = function (num1, num2) {
	num1 = Number(num1)
	num2 = Number(num2)
	if (isNaN(num1) || isNaN(num2)) {
		console.error('Nieprawidłowe liczby dla dodawania')
		return
	}
	const result = num1 + num2
	const operation = `${num1} + ${num2} = ${result}`
	this.history.push(operation)
	console.log(operation)
}

// odejmowanie
Calculator.prototype.subtract = function (num1, num2) {
	num1 = Number(num1)
	num2 = Number(num2)
	if (isNaN(num1) || isNaN(num2)) {
		console.error('Nieprawidłowe liczby dla odejmowania')
		return
	}
	const result = num1 - num2
	const operation = `${num1} - ${num2} = ${result}`
	this.history.push(operation)
	console.log(operation)
}

// mnożenie
Calculator.prototype.multiply = function (num1, num2) {
	num1 = Number(num1)
	num2 = Number(num2)
	if (isNaN(num1) || isNaN(num2)) {
		console.error('Nieprawidłowe liczby dla mnożenia')
		return
	}
	const result = num1 * num2
	const operation = `${num1} * ${num2} = ${result}`
	this.history.push(operation)
	console.log(operation)
}

// dzielenie
Calculator.prototype.divide = function (num1, num2) {
	num1 = Number(num1)
	num2 = Number(num2)
	if (isNaN(num1) || isNaN(num2)) {
		console.error('Nieprawidłowe liczby do dzielenia')
		return
	}
	if (num2 === 0) {
		console.error('Dzielenie przez zero jest niedozwolone')
		return
	}
	const result = num1 / num2
	const operation = `${num1} / ${num2} = ${result}`
	this.history.push(operation)
	console.log(operation)
}

// potęgowanie
Calculator.prototype.potentiation = function (num1, num2) {
	num1 = Number(num1)
	num2 = Number(num2)
	if (isNaN(num1) || isNaN(num2) || !Number.isInteger(num2)) {
		console.error('Nieprawidłowe liczby dla potęgowania')
		return
	}
	let result = 1
	for (let i = 0; i < Math.abs(num2); i++) {
		result *= num1
	}
	if (num2 < 0) {
		result = 1 / result
	}
	const operation = `${num1} ^ ${num2} = ${result}`
	this.history.push(operation)
	console.log(operation)
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
		number2 = prompt('Podaj liczbę nr 2')

		if (action === '+') {
			calc.add(number1, number2)
		} else if (action === '-') {
			calc.subtract(number1, number2)
		} else if (action === '*') {
			calc.multiply(number1, number2)
		} else if (action === '/') {
			calc.divide(number1, number2)
		} else if (action === '^') {
			calc.potentiation(number1, number2)
		}
	}
} while (calc.isCorrectAction(action))
// while (action !== null && calc.isCorrectAction(action))
