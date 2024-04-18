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

Calculator.prototype.checkArguments = function (a, b, operation) {
    if (isNaN(a) || isNaN(b)) {
        throw console.error("Wprowadziłeś coś co nie jest liczbą");
    }
    if (operation === 'div' && b === 0) {
        throw console.error("Nie dzielimy przez 0");
    } else if (operation === 'pow' && !Number.isInteger(b)) {
        throw console.error("Wykładnik musi być liczba całkowitą");
    }

}

Calculator.prototype.saveToHistory = function (operand1, operand2, result, operator) {
    this.history.push(operand1 + ' ' + operator + ' ' + operand2 + ' = ' + result);
}

Calculator.prototype.add = function (num1, num2) {
    const summand1 = Number(num1);
    const summand2 = Number(num2);
    this.checkArguments(summand1, summand2);
    const sum = summand1 + summand2;
    this.saveToHistory(summand1, summand2, sum, '+');
}

Calculator.prototype.subtract = function (num1, num2) {
    const minuend = Number(num1);
    const subtrahend = Number(num2);
    this.checkArguments(minuend, subtrahend);
    const difference = minuend - subtrahend;
    this.saveToHistory(minuend, subtrahend, difference, '-');
}

Calculator.prototype.multiply = function (num1, num2) {
    const factor1 = Number(num1);
    const factor2 = Number(num2);
    this.checkArguments(factor1, factor2);
    const product = factor1 * factor2;
    this.saveToHistory(factor1, factor2, product, '*');
}

Calculator.prototype.divide = function (num1, num2) {
    const dividend = Number(num1);
    const divisor = Number(num2);
    this.checkArguments(dividend, divisor, 'div');
    const quotient = dividend / divisor;
    this.saveToHistory(dividend, divisor, quotient, '/');
}

Calculator.prototype.power = function (num1, num2) {
    const base = Number(num1);
    const exponent = Number(num2);
    this.checkArguments(base, exponent, 'pow');
    let result = 1;

    for (let i = 1; i <= Math.abs(exponent); i++) result *= base;

    if (exponent < 0) result = 1 / result
    
    this.saveToHistory(base, exponent, result, '^');
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
        } else if (action === '-') {
            calc.subtract(number1, number2);
        } else if (action === '*') {
            calc.multiply(number1, number2);
        } else if (action === '/') {
            calc.divide(number1, number2);
        } else if (action === '^') {
            calc.power(number1, number2);
        }
    }

} while (calc.isCorrectAction(action));

