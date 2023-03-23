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

Calculator.prototype.add = function (num1, num2, action) {
	return calculate(num1, num2, action);
};
Calculator.prototype.subtraction = function (num1, num2, action) {
	return calculate(num1, num2, action);
};
Calculator.prototype.multiply = function (num1, num2, action) {
	return calculate(num1, num2, action);
};
Calculator.prototype.power = function (num1, num2, action) {
	return calculate(num1, num2, action);
};
Calculator.prototype.division = function (num1, num2, action) {
	return calculate(num1, num2, action);
};
const calculate = (number1, number2, action) => {
	let result = 1;
	num1 = parseFloat(number1);
	num2 = parseFloat(number2);

	switch (action) {
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		case '/':
			result = num1 / num2;
			break;
		case '^':
			for (let i = 0; i < num2; i++) result *= num1;
			break;
		default:
			result = 'Invalid operator';
	}
	if (typeof result === 'string') return;
	operation = `${num1} ${action} ${num2} = ${result}`;
	calc.history.push(operation);
	return;
};
const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2, result;

do {
	promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n';
	promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
	promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

	action = prompt(promptContent);
	isCorrectAction = calc.isCorrectAction(action);
	if (isCorrectAction) {
		const regExp = new RegExp(/([0-9])\w*/);
		number1 = prompt('Podaj liczbę nr 1');
		number2 = prompt('Podaj liczbę nr 2');

		if (regExp.test(number1) && regExp.test(number2)) {
			if (action === '+') {
				calc.add(number1, number2, action);
			} else if (action === '-') {
				calc.subtraction(number1, number2, action);
			} else if (action === '*') {
				calc.multiply(number1, number2, action);
			} else if (action === '^') {
				calc.power(number1, number2, action);
			} else if (action === '/') {
				calc.division(number1, number2, action);
			}
		}
	}
} while (calc.isCorrectAction(action));
