let action, promptContent, isCorrectAction, number1, number2;

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

Calculator.prototype.transformToNumbers = function (num1, num2) {
    this.number1 = Number(num1);
    this.number2 = Number(num2);
}

Calculator.prototype.checkIsNumber = function (num1, num2) {
    if (isNaN(num1)) {
        alert('Number One Is Not a Number')
        return 0;
    } else if (isNaN(num2)) {
        alert('Number Two Is Not a Number')
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
    } else if(this.number1 !== 0) {
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

Calculator.prototype.startLoop = function () {
    promptContent = this.setPromptContent();
    action = prompt(promptContent);
    isCorrectAction = this.isCorrectAction(action);

    if (isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1', this.resultHistory[this.resultHistory.length - 1]);
        number2 = prompt('Podaj liczbę nr 2');

        this.transformToNumbers(number1, number2)

        if (this.checkIsNumber(this.number1, this.number2) !== 0) {
            this.makeOperation(action);
            this.setHistoryAsString(action);
        }

    } else {
        this.startAgain();
    }
}

Calculator.prototype.startAgain = function () {
    alert('Wrong action!');
    const confirmation = confirm('Continue???');
    if (confirmation === true) {
        return this.startLoop();
    }
}

Calculator.prototype.setPromptContent = function () {
    let promptContent;
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + this.getHistoryAsString();
    return promptContent;
}

const calc = new Calculator();
do {
    calc.startLoop();
} while (calc.isCorrectAction(action));