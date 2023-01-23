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

Calculator.prototype.add = function (num1, num2) {
	const num1Parsed = parseInt(num1);
	const num2Parsed = parseInt(num2);

	let result;

	// if (typeof num1Parsed === "number" && typeof num2Parsed === "number") {
	result = num1Parsed + num2Parsed;
	this.history.push(num1Parsed + " + " + num2Parsed + " = " + result);
	return result;
	// } else {
	alert("Podałeś błędne dane!");
	// }
};

Calculator.prototype.subtract = function (num1, num2) {
	// const num1Parsed = parseInt(num1);
	// const num2Parsed = parseInt(num2);

	let result;

	// if (typeof num1Parsed === "number" && typeof num2Parsed === "number") {
	result = num1 - num2;
	this.history.push(num1 + " - " + num2 + " = " + result);
	return result;
	// } else {
	// alert("Podałeś błędne dane!");
	// }
};

Calculator.prototype.multiply = function (num1, num2) {
	// const num1Parsed = parseInt(num1);
	// const num2Parsed = parseInt(num2);

	let result;

	// if (typeof num1Parsed === "number" && typeof num2Parsed === "number") {
	// console.log(num1Parsed);
	result = num1 * num2;
	this.history.push(num1 + " * " + num2 + " = " + result);
	return result;
	// } else {
	alert("Podałeś błędne dane!");
	// }
};

Calculator.prototype.divide = function (num1, num2) {
	// const num1Parsed = parseInt(num1);
	// const num2Parsed = parseInt(num2);

	let result;

	// if (typeof num1Parsed === "number" && typeof num2Parsed === "number") {
	result = num1 / num2;
	this.history.push(num1Parsed + " / " + num2Parsed + " = " + result);
	console.log(this.history);
	return result;
	// } else {
	alert("Podałeś błędne dane!");
	// }
};

Calculator.prototype.power = function (num1, num2) {
	// const num1Parsed = parseInt(num1);
	// const num2Parsed = parseInt(num2);

	let result = 1;

	// if (typeof num1Parsed === "number" && typeof num2Parsed === "number") {
	for (let i = 1; i <= num2Parsed; i++) {
		result = result * num1Parsed;
	}
	this.history.push(num1Parsed + " ^ " + num2Parsed + " = " + result);
	return result;
};

const calc = new Calculator();

let action, promptContent, isCorrectAction, number1, number2;

do {
	promptContent =
		"Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n"; // \n - znak nowej linii
	promptContent += "Jeśli chcesz zrezygnować wciśnij Anuluj. \n";
	promptContent += "Lista poprzednich operacji: \n" + calc.getHistoryAsString();

	action = prompt(promptContent);
	isCorrectAction = calc.isCorrectAction(action);
	if (isCorrectAction) {
		number1 = prompt("Podaj liczbę nr 1");
		number2 = prompt("Podaj liczbę nr 2");

		if (Number.isNaN(number1) || Number.isNaN(number2)) {
			alert("To nie jest liczba.");
		} else {
			if (action === "+") {
				calc.add(number1, number2);
			} else if (action === "-") {
				calc.subtract(number1, number2);
			} else if (action === "*") {
				calc.multiply(number1, number2);
			} else if (action === "/") {
				calc.divide(number1, number2);
			} else if (action === "^") {
				calc.power(number1, number2);
			}
		}
	}
} while (calc.isCorrectAction(action));
