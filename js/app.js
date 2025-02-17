class Operation {
    constructor(symbol, fn) {
        if (typeof symbol !== 'string' || symbol.trim() === '') {
            throw new Error('Operation symbol must be a non-empty string');
        }
        if (typeof fn !== 'function') {
            throw new Error('Operation function must be a function');
        }
        this.symbol = symbol;
        this.fn = fn;
    }
}
class Calculator {
    constructor() {
        this.operations = {};
        this.history = [];
    }
    addOperation(operation) {
        if (operation instanceof Operation) {
            this.operations[operation.symbol] = operation.fn;
        } else {
            throw new Error('Invalid parameter');
        }
    }
    validateOperands(operands) {
        const parsed = operands.map(op => parseFloat(op));
        return parsed.every(op => isFinite(op)) ? parsed : null;
    }
    performOperation(symbol, operands) {
        if (!this.isCorrectAction(symbol)) throw new Error(`Operation "${symbol}" is not defined`);

        const parsedOperands = this.validateOperands(operands);
        if (!parsedOperands) {
            this.history.push(`Invalid input: "${operands.join(', ')}"`);
            return;
        }

        const result = this.operations[symbol](...parsedOperands);
        this.history.push(`${parsedOperands.join(` ${symbol} `)} = ${result}`);

        return result;
    }

    isCorrectAction(symbol) {
        return typeof symbol === 'string' && symbol in this.operations;
    };
    getOperations() {
        return Object.keys(this.operations).join(', ');
    }
    getHistory() {
        return this.history.length > 0 ? this.history.join('\n') : 'No operations performed yet.';
    }
}

const sumOperation = new Operation('+', (a, b) => a + b);
const subtractOperation = new Operation('-', (a, b) => a - b);
const multiplyOperation = new Operation('*', (a, b) => a * b);
const divideOperation = new Operation('/', (a, b) => (b === 0 ? 'Cannot divide by zero' : a / b));
const moduloOperation = new Operation('%', (a, b) => (b === 0 ? 'Cannot modulo by zero' : a % b));
const powerOperation = new Operation('^', (base, exponent) => {
    if (base === 0 && exponent < 0) return 'Undefined (0 cannot be raised to a negative power)';

    const absExponent = Math.floor(Math.abs(exponent));
    let result = 1;

    for (let i = 0; i < absExponent; i++) {
        result *= base;
    }

    return exponent < 0 ? 1 / result : result;
});

const calc = new Calculator();

calc.addOperation(sumOperation);
calc.addOperation(subtractOperation);
calc.addOperation(multiplyOperation);
calc.addOperation(divideOperation);
calc.addOperation(moduloOperation);
calc.addOperation(powerOperation);

let action, promptContent, number1, number2;
do {
    promptContent = `Podaj jaką operację chcesz wykonać (${calc.getOperations()}) i potwierdź.\n`; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistory();

    action = prompt(promptContent);

    if (calc.isCorrectAction(action)) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');
        calc.performOperation(action, [number1, number2]);
    }

} while (calc.isCorrectAction(action));