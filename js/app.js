function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
    this.resultHistory = [0];
    this.number1 = 0;
    this.number2 = 0;
    this.result = 0;
}

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
}

Calculator.prototype.setHistoryAsString = function (operator) {
    if (((this.number2 === 0) && (operator === '/')) || ((this.number1 === 0) && (this.number2 === 0) && (operator === '^'))) {
        return this.history.push('Math Error')
    } else {
        return this.history.push(this.number1 + ' ' + operator + ' ' + this.number2 + ' = ' + this.result);
    }
}

Calculator.prototype.setResultHistory = function () {
    this.resultHistory.push(this.result)
}

Calculator.prototype.transformToNumber = function (num) {
    return Number(num);
}

Calculator.prototype.createNumbersInCalculator = function (num1, num2) {
    this.number1 = num1;
    this.number2 = num2;
}

Calculator.prototype.checkIsNumber = function (num) {
    if (isNaN(num)) {
        alert('This Is NOT a Number');
        return 0;
    }
}

Calculator.prototype.add = function () {
    this.result = this.number1 + this.number2;
    this.setResultHistory();
}

Calculator.prototype.subtract = function () {
    this.result = this.number1 - this.number2;
    this.setResultHistory();
}

Calculator.prototype.multiply = function () {
    this.result = this.number1 * this.number2;
    this.setResultHistory();
}

Calculator.prototype.divide = function () {
    if (this.number2 !== 0) {
        this.result = this.number1 / this.number2;
        this.setResultHistory();
    } else {
        alert("You can't divide by zero");
    }
}

Calculator.prototype.countExponentiation = function () {
    let resultExponentiate = this.number1;
    for (let i = 1; i < this.number2; i++) {
        resultExponentiate *= this.number1
    }
    return resultExponentiate;
}

Calculator.prototype.exponentiate = function () {
    if (this.number2 !== 0) {
        this.result = this.countExponentiation();
        this.setResultHistory();
    } else if (this.number1 !== 0) {
        this.result = 1;
        this.setResultHistory();
    }
}

Calculator.prototype.makeOperation = function (operator) {
    if (operator === '+') {
        this.add();
    } else if (operator === '-') {
        this.subtract();
    } else if (operator === '*') {
        this.multiply();
    } else if (operator === '/') {
        this.divide();
    } else if (operator === '^') {
        this.exponentiate();
    }
}

Calculator.prototype.setPromptContent = function () {
    let setPromptContent;
    setPromptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    setPromptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    setPromptContent += 'Lista poprzednich operacji: \n' + this.getHistoryAsString();
    return setPromptContent;
}

Calculator.prototype.startLoop = function () {
    let promptContent = this.setPromptContent();
    action = prompt(promptContent);
    let isCorrectAction = this.isCorrectAction(action);

    if (isCorrectAction) {
        let number1 = prompt('Podaj liczbę nr 1', this.resultHistory[this.resultHistory.length - 1]);
        number1 = this.transformToNumber(number1)

        if (this.checkIsNumber(number1) !== 0) {
            let number2 = prompt('Podaj liczbę nr 2');
            number2 = this.transformToNumber(number2)

            if (this.checkIsNumber(number2) !== 0) {
                this.createNumbersInCalculator(number1, number2);
                this.makeOperation(action);
                this.setHistoryAsString(action);
            }
        }
    } else {
        this.clearHistoryInCalculator();
    }
}

Calculator.prototype.clearHistoryInCalculator = function () {
    const clear = confirm('Do You Want to Clear History?')
    if (clear === true) {
        this.history = [];
        this.resultHistory = [0];
        this.number1 = 0;
        this.number2 = 0;
        this.result = 0;
        return this.startLoop();
    } else {
        return this.startAgain();
    }
}

Calculator.prototype.startAgain = function () {
    const confirmation = confirm('Continue work?');
    if (confirmation === true) {
        return this.startLoop();
    }
}

const calc = new Calculator();
let action;
do {
    calc.startLoop();
} while (calc.isCorrectAction(action));