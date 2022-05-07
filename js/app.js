function Calculator() {
	this.actions = ['+', '-', '*', '/', '^'];
	this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
	return this.actions.includes(action);
};

Calculator.prototype.getHistoryAsString = function () {
	return this.history.join('\n');
};

Calculator.prototype.add = function (num1, num2) {
	let sum = num1 + num2;
	let sumResult = `${num1} + ${num2} = ${sum}`;
	this.history.push(sumResult);
};

Calculator.prototype.subtract = function (num1, num2) {
	let sub = num1 - num2;
	let subResult = `${num1} - ${num2} = ${sub}`;
	this.history.push(subResult);
};

Calculator.prototype.multiply = function (num1, num2) {
	let mul = num1 * num2;
	let mulResult = `${num1} * ${num2} = ${mul}`;
	this.history.push(mulResult);
};

Calculator.prototype.divide = function (num1, num2) {
	let div = num1 / num2;
	let divResult = `${num1} / ${num2} = ${div}`;
	this.history.push(divResult);
};

Calculator.prototype.exponetiate = function (num1, num2) {
	let exp = num1 ** num2;
	let expResult = `${num1} ^ ${num2} = ${exp}`;
	this.history.push(expResult);
};

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
	promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
	promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
	promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

	action = prompt(promptContent);
	isCorrectAction = calc.isCorrectAction(action);
	if (isCorrectAction) {
		number1 = parseInt(prompt('Podaj liczbę nr 1'));
		number2 = parseInt(prompt('Podaj liczbę nr 2'));

		if (isNaN(number1) || isNaN(number2)) {
			alert('Podaj liczbę z przedziału od 0 do 9!');
		} else if (action === '+') {
			calc.add(number1, number2);
		} else if (action === '-') {
			calc.subtract(number1, number2);
		} else if (action === '*') {
			calc.multiply(number1, number2);
		} else if (action === '/') {
			calc.divide(number1, number2);
		} else if (action === '^') {
			calc.exponetiate(number1, number2);
		}
	}
} while (calc.isCorrectAction(action));
