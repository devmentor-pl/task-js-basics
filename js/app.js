function Calculator() {
	this.actions = ['+', '-', '*', '/', '^', '%'];
	this.history = [];
}
const addition = (firstNumber, secondNumber) => {
	return firstNumber + secondNumber;
};
const subtraction = (firstNumber, secondNumber) => {
	return firstNumber - secondNumber;
};
const multiplication = (firstNumber, secondNumber) => {
	return firstNumber * secondNumber;
};
const exponentiation = (firstNumber, secondNumber) => {
	return firstNumber ** secondNumber;
};
const division = (firstNumber, secondNumber) => {
	return firstNumber / secondNumber;
};
const modulus = (firstNumber, secondNumber) => {
	return firstNumber % secondNumber;
};
const operations = {
	'+': addition,
	'-': subtraction,
	'*': multiplication,
	'^': exponentiation,
	'/': division,
	'%': modulus,
};
Calculator.prototype.isCorrectAction = function (action) {
	return this.actions.includes(action);
};

Calculator.prototype.getHistoryAsString = function () {
	return this.history.join('\n');
};
Calculator.prototype.createHistory = function (num1, num2, action, result) {
	const operation = `${num1} ${action} ${num2} = ${result}`;
	calc.history.push(operation);
	return result;
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
		const regExp = new RegExp(/[^0-9]/);
		const createResult = operations[action];

		number1 = prompt('Podaj liczbę nr 1');
		number2 = prompt('Podaj liczbę nr 2');

		if (!regExp.test(number1) && !regExp.test(number2)) {
			num1 = parseFloat(number1);
			num2 = parseFloat(number2);

			const result = createResult(num1, num2);
			calc.createHistory(num1, num2, action, result);
		}
	}
} while (calc.isCorrectAction(action));
