function Calculator() {
    this.actions = ['+', '-', '*', '/', '**'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.add = function(num1, num2) {
    const number1 = parseInt(num1);
	const number2 = parseInt(num2);

	if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
		const result = number1 + number2;
		this.history.push(number1 + " + " + number2 + " = " + result);
	} else {
		alert("Blad!");
	}
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}
Calculator.prototype.sub = function (num1, num2) {
	const number1 = parseInt(num1);
	const number2 = parseInt(num2);

	if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
		const result = number1 - number2;
		this.history.push(number1 + " - " + number2 + " = " + result);
	} else {
		alert("Blad!");
	}
};
Calculator.prototype.devide = function (num1, num2) {
	const number1 = parseInt(num1);
	const number2 = parseInt(num2);

	if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
		const result = number1 / number2;
		this.history.push(number1 + " / " + number2 + " = " + result);
	} else {
		alert("Blad!");
	}
};
Calculator.prototype.multiply = function (num1, num2) {
	const number1 = parseInt(num1);
	const number2 = parseInt(num2);

	if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
		const result = number1 * number2;
		this.history.push(number2 + " * " + number1 + " = " + result);
	} else {
		alert("Blad!");
	}
};
Calculator.prototype.power = function (num1, num2) {
	const number1 = parseInt(num1);
	const number2 = parseInt(num2);

	if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
		const result = number1 ** number2;
		this.history.push(number1 + ' ** ' +  number2 + ' = ' + result);
	} else {
		alert("Blad!");
	}
};

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, **) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if (action === "+") {
			calc.add(number1, number2);
		} else if (action === "-") {
			calc.sub(number1, number2);
		} else if (action === "/") {
			calc.devide(number1, number2);
		} else if (action === '*') {
            calc.multiply(number1, number2)
        } else if (action === '**') {
            calc.power(number1, number2)
        }
    }
    
} while(calc.isCorrectAction(action));