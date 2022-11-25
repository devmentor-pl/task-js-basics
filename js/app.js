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
	// 1. zamień wartości przekazane przez parametr na typ number
	const number1 = Number(num1);
	const number2 = Number(num2);
	// 2. sprawdź czy są one poprawne
	if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
		// 3. jeśli tak to wykonaj działanie i zapisz jego rezultat
		const result = number1 + number2;
		// 4. dodaj do historii operacji to działanie w formie: 1 + 1 = 2
		this.history.push(`${number1} + ${number2} = ${result}`);
	} else {
		// 5. jeżeli liczby są NaN wyświetl komunikat o niepoprawnych danych
		alert('Podałeś błędne dane!');
	}
};

Calculator.prototype.sub = function (num1, num2) {
	const number1 = Number(num1);
	const number2 = Number(num2);

	if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
		const result = number1 - number2;
		this.history.push(`${number1} - ${number2} = ${result}`);
	} else {
		alert('Podałeś błędne dane!');
	}
};

Calculator.prototype.mply = function (num1, num2) {
	const number1 = Number(num1);
	const number2 = Number(num2);

	if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
		const result = number1 * number2;
		this.history.push(`${number1} * ${number2} = ${result}`);
	} else {
		alert('Podałeś błędne dane!');
	}
};

Calculator.prototype.divide = function (num1, num2) {
	const number1 = Number(num1);
	const number2 = Number(num2);

	if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
		if (number2 !== 0) {
			const result = number1 / number2;
			this.history.push(`${number1} / ${number2} = ${result}`);
		} else {
			alert('Nie dzielimy przez 0!');
		}
	} else {
		alert('Podałeś błędne dane!');
	}
};

Calculator.prototype.pow = function (num1, num2) {
	const number1 = Number(num1);
	const number2 = Number(num2);

	if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
		let result = 1;
		for (i = 1; i <= number2; i++) {
			result = result * number1;
		}
		this.history.push(`${number1} ^ ${number2} = ${result}`);
	} else {
		alert('Podałeś błędne dane!');
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
		}

		if (action === '-') {
			calc.sub(number1, number2);
		}

		if (action === '*') {
			calc.mply(number1, number2);
		}

		if (action === '/') {
			calc.divide(number1, number2);
		}

		if (action === '^') {
			calc.pow(number1, number2);
		}
	}
} while (calc.isCorrectAction(action));
