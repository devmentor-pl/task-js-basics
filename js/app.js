function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.add = function(num1, num2) {
	// 1. zamień wartości przekazane przez parametr na typ number
	// 2. sprawdź czy są one poprawne
	// 3. jeśli tak to wykonaj działanie i zapisz jego resultat
	// 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

	// 1. zamień wartości przekazane przez parametr na typ number
	const operand1 = parseFloat(num1);
	const operand2 = parseFloat(num2);

	// 2. sprawdź czy są one poprawne
	if (isNaN(operand1) || isNaN(operand2)) {
		console.log("Podane wartości nie są liczbami. Operacja anulowana.");
		return;
	}

	// 3. jeśli tak to wykonaj działanie i zapisz jego resultat
	const result = operand1 + operand2;

	// 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
	const operationString = `${operand1} + ${operand2} = ${result}`;
	this.history.push(operationString);

	console.log(`Wynik dodawania: ${operationString}`);
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if(action === '+') {
            calc.add(number1, number2);
        }
    }
    
} while(calc.isCorrectAction(action));



// ------------------------------REFAKTORYZACJA-----------------------

function Calculator() {
	this.actions = ["+", "-", "*", "/", "^"];
	this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
	return this.actions.includes(action);
};

Calculator.prototype.getHistoryAsString = function () {
	return this.history.join("\n");
};

Calculator.prototype.updateHistory = function (operationString) {
	this.history.push(operationString);
	console.log(`Wynik operacji: ${operationString}`);
};

Calculator.prototype.performAddition = function (num1, num2) {
	const operand1 = parseFloat(num1);
	const operand2 = parseFloat(num2);

	if (isNaN(operand1) || isNaN(operand2)) {
		console.log("Podane wartości nie są liczbami. Operacja anulowana.");
		return;
	}

	const result = operand1 + operand2;
	const operationString = `${operand1} + ${operand2} = ${result}`;
	this.updateHistory(operationString);
};

function getUserInput(promptContent) {
	return prompt(promptContent);
}

function runCalculator() {
	const calc = new Calculator();
	let action, promptContent, isCorrectAction, number1, number2;

	do {
		promptContent =
			"Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n"; // \n - znak nowej linii
		promptContent += "Jeśli chcesz zrezygnować wciśnij Anuluj. \n";
		promptContent +=
			"Lista poprzednich operacji: \n" + calc.getHistoryAsString();

		action = getUserInput(promptContent);
		isCorrectAction = calc.isCorrectAction(action);

		if (isCorrectAction) {
			number1 = getUserInput("Podaj liczbę nr 1");
			number2 = getUserInput("Podaj liczbę nr 2");

			if (action === "+") {
				calc.performAddition(number1, number2);
			} else {
				console.log(
					"Nieobsługiwana operacja. Proszę wpisać poprawną operację."
				);
			}
		}
	} while (isCorrectAction);
}

runCalculator();
