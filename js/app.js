function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
}

Calculator.prototype.add = function (num1, num2) {
    const result = num1 + num2;
    this.history.push(num1 + '+' + num2 + '=' + result);

};

Calculator.prototype.sub = function (num1, num2) {

    const result = num1 - num2;
    this.history.push(num1 + '-' + num2 + '=' + result);

};

Calculator.prototype.multi = function (num1, num2) {
    const result = num1 * num2;
    this.history.push(num1 + '*' + num2 + '=' + result);
};

Calculator.prototype.division = function (num1, num2) {
    if (num2 !== 0) {
        const result = num1 / num2;
        this.history.push(num1 + '/' + num2 + '=' + result);
    } else {
        this.history.push(num1 + '/' + num2 + '=> Nie dzielimy przez 0');
    }
};

Calculator.prototype.pow = function (num1, num2) {
    let result = 1;
    if (num2 !== 0) {
        for (let i = 0; i < num2; i++) {
            result *= num1;
        }
    }
    this.history.push(num1 + '^' + num2 + '=' + result);
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if (isCorrectAction) {
        number1 = parseFloat(prompt('Podaj liczbę nr 1'));
        number2 = parseFloat(prompt('Podaj liczbę nr 2'));
        if (!isNaN(number1) && !isNaN(number2)) {
            if (action === '+') {
                calc.add(number1, number2);
            }
            if (action === '-') {
                calc.sub(number1, number2);
            }
            if (action === '*') {
                calc.multi(number1, number2);
            }
            if (action === '/') {
                calc.division(number1, number2);
            }
            if (action === '^') {
                calc.pow(number1, number2);
            }
        } else {
            alert('Wprowadzone dane nie są liczbą');
        }
    }
} while (calc.isCorrectAction(action));