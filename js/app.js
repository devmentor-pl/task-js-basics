function Calculator() {
	this.actions = {
		'+': add,
		'-': sub,
		'*': mply,
		'/': divide,
		'^': pow,
	};
	this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
	if (action in this.actions) {
		return action;
	}
};

Calculator.prototype.getHistoryAsString = function () {
	return this.history.join('\n');
};

Calculator.prototype.changeType = function (num1, num2) {
	return [Number(num1), Number(num2)];
};

Calculator.prototype.isCorrectValues = function (arr) {
	return arr.every((item) => {
		return !Number.isNaN(item);
	});
};

Calculator.prototype.addToHistory = function (num1, num2, action, result) {
	this.history.push(`${num1} ${action} ${num2} = ${result}`);
};

function add(num1, num2) {
	return num1 + num2;
}

function sub(num1, num2) {
	return num1 - num2;
}

function mply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	if (num2 !== 0) {
		return num1 / num2;
	} else {
		alert('Nie dzielimy przez 0!');
		return null;
	}
}

function pow(num1, num2) {
	let result = 1;
	for (let i = 1; i <= num2; i++) {
		result *= num1;
	}
	return result;
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2, result;
do {
	promptContent =
		'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
	promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
	promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

	action = prompt(promptContent);
	isCorrectAction = calc.isCorrectAction(action);
	const operationFunc = calc.actions[action];

	if (isCorrectAction && typeof operationFunc === 'function') {
		number1 = prompt('Podaj liczbę nr 1');
		number2 = prompt('Podaj liczbę nr 2');
		const arr = calc.changeType(number1, number2);

		if (calc.isCorrectValues(arr)) {
			result = operationFunc(arr[0], arr[1]);
			if (result !== null) {
				calc.addToHistory(arr[0], arr[1], action, result);
			}
		} else {
			alert('Niepoprawne dane!');
		}
	}
} while (calc.isCorrectAction(action));
