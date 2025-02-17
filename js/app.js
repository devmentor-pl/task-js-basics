function Calculator() {
    this.operations = {
        '+': this.add,
        '-': this.subtract,
        '*': this.multiply,
        '/': this.divide,
        '^': this.power,
        '%': this.modulo
    };
    this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
    return typeof action === 'string' && Object.prototype.hasOwnProperty.call(this.operations, action);
};

Calculator.prototype.getHistoryAsString = function () {
    return this.history.length > 0 ? this.history.join('\n') : 'No operations performed yet.';
};

Calculator.prototype.performOperation = function (action, num1, num2) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (!isFinite(a) || !isFinite(b)) {
        this.history.push(`Invalid input: "${num1}" and "${num2}"`);
        return;
    }

    const result = this.operations[action].call(this, a, b);
    this.history.push(`${a} ${action} ${b} = ${result}`);
};

Calculator.prototype.add = function (a, b) {
    return a + b;
};

Calculator.prototype.subtract = function (a, b) {
    return a - b;
};

Calculator.prototype.multiply = function (a, b) {
    return a * b;
};

Calculator.prototype.divide = function (a, b) {
    return b === 0 ? 'Cannot divide by zero' : a / b;
};

Calculator.prototype.power = function (base, exponent) {
    if (base === 0 && exponent < 0) {
        return 'Undefined (0 cannot be raised to a negative power)';
    }

    const absExponent = Math.floor(Math.abs(exponent));
    let result = 1;

    for (let i = 0; i < absExponent; i++) {
        result *= base;
    }

    return exponent < 0 ? 1 / result : result;
};

Calculator.prototype.modulo = function (a, b) {
    return b === 0 ? 'Cannot modulo by zero' : a % b;
};

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
    promptContent = `Podaj jaką operację chcesz wykonać (${Object.keys(calc.operations).join(', ')}) i potwierdź.\n`; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);

    if (calc.isCorrectAction(action)) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');
        calc.performOperation(action, number1, number2);
    }
    
} while(calc.isCorrectAction(action));