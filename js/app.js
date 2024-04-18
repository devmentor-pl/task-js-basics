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
 // rename to validate
Calculator.prototype.validateArguments = function (num1, num2, operation) {
    const a = Number(num1);
    const b = Number(num2);
    if (isNaN(a) || isNaN(b)) {
        throw console.error("Wprowadziłeś coś co nie jest liczbą");
    }
    if (operation === 'div' && b === 0) {
        throw console.error("Nie dzielimy przez 0");
    } else if (operation === 'pow' && !Number.isInteger(b)) {
        throw console.error("Wykładnik musi być liczba całkowitą");
    }
    return {a, b};
}

Calculator.prototype.saveToHistory = function (operand1, operand2, result, operator) {
    this.history.push(operand1 + ' ' + operator + ' ' + operand2 + ' = ' + result);
}

Calculator.prototype.add = function (summand1, summand2) {    
    const numbers = this.validateArguments(summand1, summand2);
    const sum = numbers['a'] + numbers['b'];
    this.saveToHistory(summand1, summand2, sum, '+');
}

Calculator.prototype.subtract = function (minuend, subtrahend) {    
    const numbers = this.validateArguments(minuend, subtrahend);
    const difference = numbers['a'] - numbers['b'];
    this.saveToHistory(minuend, subtrahend, difference, '-');
}

Calculator.prototype.multiply = function (factor1, factor2) {
    const numbers = this.validateArguments(factor1, factor2);
    const product = numbers['a'] * numbers['b'];
    this.saveToHistory(factor1, factor2, product, '*');
}

Calculator.prototype.divide = function (dividend, divisor) {
    const numbers = this.validateArguments(dividend, divisor, 'div');
    const quotient = numbers['a'] / numbers['b'];
    this.saveToHistory(dividend, divisor, quotient, '/');
}

Calculator.prototype.power = function (base, exponent) {
    const numbers = this.validateArguments(base, exponent, 'pow');
    let result = 1;
    for (let i = 1; i <= Math.abs(numbers['b']); i++) result *= numbers['a'];
    if (numbers['b'] < 0) result = 1 / result
    this.saveToHistory(numbers['a'], numbers['b'], result, '^');
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

