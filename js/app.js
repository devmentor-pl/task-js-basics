function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.toNumber = function (num1, num2) {
    return [Number(num1), Number(num2)];
}

Calculator.prototype.conditionCheck =function(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        return true;
    }
}

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
}

Calculator.prototype.add = function (num1, num2) {
    [num1, num2] = this.toNumber(num1, num2);

    if (this.conditionCheck) {
        const result = num1 + num2;
        this.history.push(`${num1} + ${num2} = ${result}`);
    } else {
        alert('Niepoprawne dane');
    }
}

Calculator.prototype.subtract = function (num1, num2) {
    [num1, num2] = this.toNumber(num1, num2);

    if (this.conditionCheck) {
        const result = num1 - num2;
        this.history.push(`${num1} - ${num2} = ${result}`);
    } else {
        alert('Niepoprawne dane');
    }
}

Calculator.prototype.multiply = function (num1, num2) {
    [num1, num2] = this.toNumber(num1, num2);

    if (this.conditionCheck) {
        const result = num1 * num2;
        this.history.push(`${num1} * ${num2} = ${result}`);
    } else {
        alert('Niepoprawne dane');
    }
}

Calculator.prototype.divide = function (num1, num2) {
    [num1, num2] = this.toNumber(num1, num2);

    if (this.conditionCheck) {
        const result = num1 / num2;
        this.history.push(`${num1} / ${num2} = ${result}`);
    } else {
        alert('Niepoprawne dane');
    }
}

Calculator.prototype.pow = function (num1, num2) {
    [num1, num2] = this.toNumber(num1, num2);

    if (this.conditionCheck) {
        let result = 1;
        for (let i = 0; i < num2; i++) {
            result += num1;
        }
        this.history.push(`${num1} * ${num2} = ${result}`);
    } else {
        alert('Niepoprawne dane');
    }
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
            calc.pow(number1, number2);
        }
    }
} while (calc.isCorrectAction(action));