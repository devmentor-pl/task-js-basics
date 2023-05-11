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
	let sum = num1 + num2
	let sumResult = `${num1} + ${num2} = ${sum}`
	this.history.push(sumResult)
}
Calculator.prototype.subtract = function (num1, num2) {
	let sub = num1 - num2
	let subResult = `${num1} - ${num2} = ${sub}`
	this.history.push(subResult)
}
Calculator.prototype.multiply = function (num1, num2) {
	let multiply = num1 * num2
	let multiplyResult = `${num1} * ${num2} = ${multiply}`
	this.history.push(multiplyResult)
}
Calculator.prototype.divide = function (num1, num2) {
	let divide = num1 / num2
	let divStringResult = `${num1} / ${num2} = ${divide}`
	this.history.push(divStringResult)
}
Calculator.prototype.powers = function (num1, num2) {
	let exp = num1 ** num2
	let expStringResult = `${num1} ^ ${num2} = ${exp}`
	this.history.push(expStringResult)
}

const calc = new Calculator()
let action, promptContent, isCorrectAction, number1, number2
do {
	promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n' // \n - znak nowej linii
	promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n'
	promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString()

	action = prompt(promptContent)
	isCorrectAction = calc.isCorrectAction(action)
	if (!isCorrectAction) {
		alert('Błędna wartość. wybierz jedną z nich=(+, -, *, /, ^)')
	}
	if (isCorrectAction) {
		number1 = parseInt(prompt('Podaj liczbę nr 1'))
		if (isNaN(number1)) {
			alert('To nie jest liczba-otrzymasz niewłaściwy wynik')
		}
		number2 = parseInt(prompt('Podaj liczbę nr 2'))
		if (isNaN(number2)) {
			alert('To nie jest liczba-otrzymasz niewłaściwy wynik')
		}
		if (action === '+') {
			calc.add(number1, number2)
		} else if (action === '-') {
			calc.subtract(number1, number2)
		} else if (action === '*') {
			calc.multiply(number1, number2)
		} else if (action === '/') {
			calc.divide(number1, number2)
		} else if (action === '^') {
			calc.powers(number1, number2)
		}
	}
} while (calc.isCorrectAction(action))
