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

// Calculator.prototype.add = function (num1, num2) {
// 1. zamień wartości przekazane przez parametr na typ number
// 2. sprawdź czy są one poprawne
// 3. jeśli tak to wykonaj działanie i zapisz jego resultat
// 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
// };

Calculator.prototype.addToHistory = function (num1, num2, action, result) {
	this.history.push(`${num1} ${action} ${num2} = ${result}`);
};

Calculator.prototype.add = function (num1, num2) {
	return num1 + num2;
};

Calculator.prototype.substract = function (num1, num2) {
	return num1 - num2;
};

Calculator.prototype.multiply = function (num1, num2) {
	return num1 * num2;
};

Calculator.prototype.divide = function (num1, num2) {
	return num1 / num2;
};

Calculator.prototype.expo = function (a, n) {
	if (n === 0) return 1;
	let result = a;
	for (let i = 1; i < n; i++) {
		result *= a;
	}
	return result;
};

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2, result;
do {
	promptContent = "Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n"; // \n - znak nowej linii
	promptContent += "Jeśli chcesz zrezygnować wciśnij Anuluj. \n";
	promptContent += "Lista poprzednich operacji: \n" + calc.getHistoryAsString();

	action = prompt(promptContent);
	isCorrectAction = calc.isCorrectAction(action);
	if (isCorrectAction) {
		number1 = prompt("Podaj liczbę nr 1");
		number2 = prompt("Podaj liczbę nr 2");
		if (!isNaN(number1) && !isNaN(number2)) {
			if (action === "+") {
				result = calc.add(number1, number2);
			}
			if (action === "-") {
				result = calc.substract(number1, number2);
			}
			if (action === "*") {
				result = calc.multiply(number1, number2);
			}
			if (action === "/") {
				result = calc.divide(number1, number2);
			}
			if (action === "^") {
				result = calc.expo(number1, number2);
			}
			calc.addToHistory(number1, number2, action, result);
		}
	}
} while (action);

console.log(calc.history);
