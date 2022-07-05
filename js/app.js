function Calculator() {
	// this.actions = ["+", "-", "*", "/", "^"];
	this.history = [];
	this.operations = {
		"+": this.add,
		"-": this.sub,
		"*": this.multi,
		"/": this.div,
	};
}

Calculator.prototype.isCorrectAction = function (action) {
	return this.operations.hasOwnProperty(action);
};

Calculator.prototype.getHistoryAsString = function () {
	return this.history.join("\n");
};

// Calculator.prototype.add = function (num1, num2) {
// 	let result = 0;
// 	// 1. zamień wartości przekazane przez parametr na typ number
// 	let intNum1 = parseInt(num1);
// 	let intNum2 = parseInt(num2);
// 	// 2. sprawdź czy są one poprawne
// 	if (typeof intNum1 === "number" && typeof intNum2 === "number") {
// 		// 3. jeśli tak to wykonaj działanie i zapisz jego resultat
// 		result = intNum1 + intNum2;
// 		alert(result);
// 	} else {
// 		alert("Podaj liczbę!");
// 	}
// 	// 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
// 	this.history.push(intNum1 + " + " + intNum2 + " = " + result);
// };

Calculator.prototype.add = function (num1, num2) {
	return num1 + num2;
};
Calculator.prototype.sub = function (num1, num2) {
	return num1 - num2;
};
Calculator.prototype.multi = function (num1, num2) {
	return num1 * num2;
};
Calculator.prototype.div = function (num1, num2) {
	return num1 / num2;
};

Calculator.prototype.getResult = function () {
	let result = 1;
	let intNum1 = parseInt(number1);
	let intNum2 = parseInt(number2);
	const operation = action;

	if (typeof this.operations[operation] !== "undefined")
		result = this.operations[operation](intNum1, intNum2);
	this.history.push(intNum1 + " " + action + " " + intNum2 + " = " + result);
	console.log(result);
	// if (typeof intNum1 === "number" && typeof intNum2 === "number") {

	// 	// if (action === '+') {
	// 	// 	result = intNum1 + intNum2
	// 	// 	alert(result);
	// 	// 	this.history.push(intNum1 + " + " + intNum2 + " = " + result);
	// 	// } else if (action === '-'){
	// 	// 	result = intNum1 - intNum2
	// 	// 	alert(result);
	// 	// 	this.history.push(intNum1 + " - " + intNum2 + " = " + result);
	// 	// } else if (action === '*'){
	// 	// 	result = intNum1 * intNum2
	// 	// 	alert(result);
	// 	// 	this.history.push(intNum1 + " * " + intNum2 + " = " + result);
	// 	// }
	// 	//  else if (action === '/'){
	// 	// 	result = intNum1 / intNum2
	// 	// 	alert(result);
	// 	// 	this.history.push(intNum1 + " / " + intNum2 + " = " + result);
	// 	// } else if( action === '^'){
	// 	// 	result = intNum1 ** intNum2
	// 	// 	alert(result);
	// 	// 	this.history.push(intNum1 + " ** " + intNum2 + " = " + result);
	// 	// } else {
	// 	// 	console.log(action);
	// 	// }
	// }
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

		calc.getResult();
	}
} while (calc.isCorrectAction(action));
