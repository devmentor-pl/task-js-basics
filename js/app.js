function Calculator() {
    this.history = [];
    this.operations = {
        '+': this.add,
        '-': this.subtract,
        '*': this.multiply,
        '/': this.divide,
        '^': this.power
    }
}

Calculator.prototype.toNumber = function (num1, num2) {
    return [Number(num1), Number(num2)];
}

Calculator.prototype.conditionCheck =function(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        return true;
    } else {
        return false;
    }
}

Calculator.prototype.isCorrectAction = function (action) {
    return typeof this.operations[action] !== 'undefined';
}

Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
}

Calculator.prototype.add = function (num1, num2) {
        const result = num1 + num2;
        this.history.push(`${num1} + ${num2} = ${result}`);
}

Calculator.prototype.subtract = function (num1, num2) {
        const result = num1 - num2;
        this.history.push(`${num1} - ${num2} = ${result}`);
}

Calculator.prototype.multiply = function (num1, num2) {
        const result = num1 * num2;
        this.history.push(`${num1} * ${num2} = ${result}`);
}

Calculator.prototype.divide = function (num1, num2) {
        const result = num1 / num2;
        this.history.push(`${num1} / ${num2} = ${result}`);
}

Calculator.prototype.power = function (num1, num2) {
        let result = 1;
        for (let i = 0; i < num2; i++) {
            result *= num1;
        }
        this.history.push(`${num1} * ${num2} = ${result}`);
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

        if(calc.conditionCheck(number1, number2)) {
            [number1, number2] = calc.toNumber(number1, number2);
            const calculation = calc.operations[action].bind(calc);

            if(typeof calculation === 'function') {
                calculation(number1, number2);
            }
        } else {
            alert('Niepoprawne dane');
        }     
    }
} while (calc.isCorrectAction(action));