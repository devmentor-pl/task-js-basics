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
    const number1 = Number(num1)
    const number2 = Number(num2)
    if (Number.isNaN(number1) || Number.isNaN(number2)) {
        const result = 'Wprowadzone dane ' + num1 + ' i ' + num2 + ' są nieprawidłowe. Spróbuj ponownie'
        return this.history.push(result)
    }
    const result = number1 + number2
    return this.history.push(number1 + ' + ' + number2 + ' = ' + result)
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
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if (action === '+') {
            calc.add(number1, number2);
        }
        if (action === '-') {
            calc.subtract(number1, number2);
        }
        if (action === '*') {
            calc.add(number1, number2);
        }
        if (action === '/') {
            calc.add(number1, number2);
        }
        if (action === '^') {
            calc.add(number1, number2);
        }
    }

} while (calc.isCorrectAction(action));