function Calculator() {
	this.actions = ["+", "-", "*", "/", "^"]
	this.history = []
}

Calculator.prototype.isCorrectAction = function (action) {
	return this.actions.includes(action)
}

Calculator.prototype.getHistoryAsString = function () {
	return this.history.join("\n")
}

Calculator.prototype.addToHistory = function (value) {
    return this.history.push(value)
}

// ADD
Calculator.prototype.add = function (num1, num2) {
	const number1 = Number(num1)
	const number2 = Number(num2)

	const addResult = number1 + number2
	const addOperation = `${number1} + ${number2} = ${addResult}`

    calc.addToHistory(addOperation)
    console.log(this.history);
    
	return addResult
    
	// 1. zamień wartości przekazane przez parametr na typ number
	// 2. sprawdź czy są one poprawne
	// 3. jeśli tak to wykonaj działanie i zapisz jego resultat
	// 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}

//SUBSTRACT
Calculator.prototype.substract = function (num1, num2) {
    const number1 = Number(num1)
	const number2 = Number(num2)
    
	const substractResult = number1 - number2
    
	const substractOperation = `${number1} - ${number2} = ${substractResult}`
    
    calc.addToHistory(substractOperation)
    console.log(this.history);
	console.log(substractResult)
	return substractResult
}

//multiply
Calculator.prototype.multiply = function (num1, num2) {
    const number1 = Number(num1)
	const number2 = Number(num2)
    
	const multiplyResult = number1 * number2
    
	const multiplyOperation = `${number1} * ${number2} = ${multiplyResult}`
    
    calc.addToHistory(multiplyOperation)
    console.log(this.history);
	console.log(multiplyResult)
	return multiplyResult
}

//divide
Calculator.prototype.divide = function (num1, num2) {
    const number1 = Number(num1)
	const number2 = Number(num2)
    
	const divideResult = number1 / number2
    
	const divideOperation = `${number1} / ${number2} = ${divideResult}`
    
    calc.addToHistory(divideOperation)
    console.log(this.history);
	console.log(divideResult)
	return divideResult
}

//exponentiation
Calculator.prototype.expo = function (num1, num2) {
    const number1 = Number(num1)
	const number2 = Number(num2)
    
	let iter = 0
	let expoResult = 1
	let expoOperation = ""
    
	while (iter < number2) {
        expoResult = expoResult * number1
        
        if (iter > 0) {
            expoOperation = expoOperation + " * "
        }
		expoOperation = expoOperation + number1
		iter++
	}
	expoOperation = expoOperation + " = " + expoResult
    
    calc.addToHistory(expoOperation)
    console.log(this.history);
	console.log(expoResult)
	console.log(expoOperation)
	return expoResult
}





const calc = new Calculator()
let action, promptContent, isCorrectAction, number1, number2
do {
	promptContent =
		"Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n" // \n - znak nowej linii
	promptContent += "Jeśli chcesz zrezygnować wciśnij Anuluj. \n"
	promptContent += "Lista poprzednich operacji: \n" + calc.getHistoryAsString()

	action = prompt(promptContent)
	isCorrectAction = calc.isCorrectAction(action)
	if (isCorrectAction) {
		number1 = prompt("Podaj liczbę nr 1")
		number2 = prompt("Podaj liczbę nr 2")

		if (action === "+") {
			calc.add(number1, number2)
		} else if (action === "-") {
			calc.substract(number1, number2)
		} else if (action === "*") {
			calc.multiply(number1, number2)
		} else if (action === "/") {
			calc.divide(number1, number2)
		} else if (action === "^") {
			calc.expo(number1, number2)
		}
	}
} while (calc.isCorrectAction(action))
