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
	if (num1.match(/[1-9]/g) && num2.match(/[1-9]/g)) {
		const toNumber1 = Number(num1);
		const toNumber2 = Number(num2);
		const result = toNumber1 + toNumber2;
		this.history.push(`${num1} + ${num2} = ${result}`);
		return result;
	}
};

Calculator.prototype.sub = function (num1, num2) {
	if (num1.match(/[1-9]/g) && num2.match(/[1-9]/g)) {
		const toNumber1 = Number(num1);
		const toNumber2 = Number(num2);
		const result = toNumber1 - toNumber2;
		this.history.push(`${num1} - ${num2} = ${result}`);
		return result;
	}
};

Calculator.prototype.mult = function (num1, num2) {
	if (num1.match(/[1-9]/g) && num2.match(/[1-9]/g)) {
		const toNumber1 = Number(num1);
		const toNumber2 = Number(num2);
		const result = toNumber1 * toNumber2;
		this.history.push(`${num1} * ${num2} = ${result}`);
		return result;
	}
};

Calculator.prototype.div = function (num1, num2) {
	if (num1.match(/[1-9]/g) && num2.match(/[1-9]/g)) {
		const toNumber1 = Number(num1);
		const toNumber2 = Number(num2);
		const result = toNumber1 / toNumber2;
		this.history.push(`${num1} / ${num2} = ${result}`);
		return result;
	}
};

Calculator.prototype.toPower = function (num1, num2) {
	if (num1.match(/[1-9]/g) && num2.match(/[1-9]/g)) {
		const toNumber1 = Number(num1);
		const toNumber2 = Number(num2);
		const result = toNumber1 ** toNumber2;
		this.history.push(`${num1}^${num2} = ${result}`);
		return result;
	}
};

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
	promptContent =
		'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
	promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
	promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

	action = prompt(promptContent);
	isCorrectAction = calc.isCorrectAction(action);
	if (isCorrectAction) {
		number1 = prompt('Podaj liczbę nr 1');
		number2 = prompt('Podaj liczbę nr 2');

		if (action === '+') {
			calc.add(number1, number2);
		} else if (action === '-') {
			calc.sub(number1, number2);
		} else if (action === '*') {
			calc.mult(number1, number2);
		} else if (action === '/') {
			calc.div(number1, number2);
		} else if (action === '^') {
			calc.toPower(number1, number2);
		}
	}
} while (calc.isCorrectAction(action));
