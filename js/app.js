function Calculator() {
	this.actions = ['+', '-', '*', '/', '^']
	this.history = []
}

const checkIfCorrectProperties = (num1, num2) => {
	if (Number.isFinite(num1) && Number.isFinite(num2)) {
		return true
	} else {
		alert('Wprowadziłeś niepoprawne dane')
		location.reload()
	}
}

Calculator.prototype.isCorrectAction = function (action) {
	return this.actions.includes(action)
}

Calculator.prototype.getHistoryAsString = function () {
	return this.history.join('\n')
}

// Addition
Calculator.prototype.add = function (number1, number2) {
	// 1. zamień wartości przekazane przez parametr na typ number
	let num1 = parseInt(number1)
	let num2 = parseInt(number2)
	let result = 0

	// 2. sprawdź czy są one poprawne
	// 3. jeśli tak to wykonaj działanie i zapisz jego resultat
	// 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
	if (checkIfCorrectProperties(num1, num2)) {
		result = num1 + num2
		this.history.push(`${num1} + ${num2} = ${result}`)
	}
}
// Subtraction
Calculator.prototype.subtract = function (number1, number2) {
	let num1 = parseInt(number1)
	let num2 = parseInt(number2)
	let result = 0

	if (checkIfCorrectProperties(num1, num2)) {
		result = num1 - num2
		this.history.push(`${num1} - ${num2} = ${result}`)
	}
}

// Multiplication
Calculator.prototype.multiply = function (number1, number2) {
	let num1 = parseInt(number1)
	let num2 = parseInt(number2)
	let result = 0

	if (checkIfCorrectProperties(num1, num2)) {
		result = num1 * num2
		this.history.push(`${num1} * ${num2} = ${result}`)
	}
}

// Division
Calculator.prototype.divide = function (number1, number2) {
	let num1 = parseInt(number1)
	let num2 = parseInt(number2)
	let result = 0

	if (checkIfCorrectProperties(num1, num2)) {
		if (num1 !== 0 && num2 !== 0) {
			result = num1 / num2
			this.history.push(`${num1} / ${num2} = ${result}`)
		} else {
			alert('Wprowadziłeś niepoprawne dane, liczby 1 i 2 nie mogą wynosić  0')
			location.reload()
		}
	}
}

// Exponentiation
Calculator.prototype.exponentiate = function (number1, number2) {
	let num1 = parseInt(number1)
	let num2 = parseInt(number2)
	let result = 1

	if (checkIfCorrectProperties(num1, num2)) {
		for (let i = 0; i < num2; i++) {
			result *= num1
		}
		this.history.push(`${num1} ^ ${num2} = ${result}`)
		return result
	}
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
			calc.exponentiate(number1, number2)
		}
	}
} while (calc.isCorrectAction(action))
