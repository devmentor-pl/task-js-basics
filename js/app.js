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


// ADD
Calculator.prototype.add = function (num1, num2) {
    const number1 = Number(num1)
	const number2 = Number(num2)
    
	// console.log(typeof number1) 
	// console.log(typeof number2) 
    
    const addResult = number1 + number2
    
    // console.log(addResult);
    const addOperation = `${number1} + ${number2} = ${addResult}`
    
    // Calculator.prototype.addResultToHistory = function (result) {
    //     this.history.push(result)
    // }
    
    // Calculator.addResultToHistory(addOperation)
    // console.log(this.history);
    
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
    console.log(number1);
    
    console.log(substractResult);
    return substractResult
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
        }
	}
} while (calc.isCorrectAction(action))
