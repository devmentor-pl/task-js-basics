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

Calculator.prototype.calculate = function (action, num1, num2) {
	const number1 = parseInt(num1);
	const number2 = parseInt(num2);

	if (isNaN(number1) && isNaN(number2)) {
		this.history.push(
			`Obie z podanych danych nie są liczbami, spróbuj ponownie 😎`
		);
		return;
	} else if (isNaN(number1) || isNaN(number2)) {
		this.history.push(
			`Jedna z podanych danych nie jest liczbą, spróbuj ponownie 😎`
		);
		return;
	}
	let result;
	switch (action) {
		case '+':
			result = number1 + number2;
			break;
		case '-':
			result = number1 - number2;
			break;
		case '*':
			result = number1 * number2;
			break;
		case '/':
			if (number2 === 0) {
				this.history.push(`Nigdy 🤬 nie dziel przez zero!!!`);
				return result;
			} else {
				result = number1 / number2;
				break;
			}
		case '^':
			result = 1;
			for (i = 0; i < number2; i++) {
				result *= number1;
			}
			break;
		default:
	}
	const calculation = `${number1} ${action} ${number2} = ${result}`;
	this.history.push(calculation);
	return result;
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
	if (action === null) {
		break;
	} else if (isCorrectAction) {
		number1 = prompt('Podaj liczbę nr 1');
		number2 = prompt('Podaj liczbę nr 2');
		calc.calculate(action, number1, number2);
	} else {
		alert(`Błędny operator działania - spróbuj ponownie`);
	}
} while (action !== null || calc.isCorrectAction(action));
