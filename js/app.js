function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) { return this.actions.includes(action); }

Calculator.prototype.getHistoryAsString = function () { return this.history.join('\n'); }

Calculator.prototype.add = function (num1, num2) { return num1 + num2; }

Calculator.prototype.subtract = function (num1, num2) { return num1 - num2; }

Calculator.prototype.divide = function (num1, num2) { return num1 / num2; }

Calculator.prototype.multiply = function (num1, num2) { return num1 * num2; }

Calculator.prototype.magnify = function (num, power) {
    let result = 1;
    for (let i = 0; i < power; i++) result *= num;
    return result;
}

Calculator.prototype.calculate = function (operator, num1, num2) {
    let result = 0;
    switch (operator) {
        case '+':
            result = this.add(num1, num2);
            break;
        case '-':
            result = this.subtract(num1, num2);
            break;
        case '/':
            result = this.divide(num1, num2);
            break;
        case '*':
            result = this.multiply(num1, num2);
            break;
        case '^':
            result = this.magnify(num1, num2);
            break;
    }
    this.history.push(number1 + ' ' + operator + ' ' + number2 + ' = ' + result);
}


const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;

do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n';
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);

    if (isCorrectAction) {
        number1 = Number(prompt('Podaj liczbę nr 1'));
        number2 = Number(prompt('Podaj liczbę nr 2'));

        if (!Number.isNaN(number1) && !Number.isNaN(number2)) calc.calculate(action, number1, number2);
    }

} while (calc.isCorrectAction(action));