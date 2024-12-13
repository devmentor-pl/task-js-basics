function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action);
};

Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
};

Calculator.prototype.add = function (num1, num2) {
    number1 = parseInt(num1);
    number2 = parseInt(num2);
    if (isNaN(number1) && isNaN(number2)) {
        this.history.push(
            `obie z podanych danych nie są liczbami, spróbuj ponownie 😎`
        );
    } else if (isNaN(number1) || isNaN(number2)) {
        this.history.push(
            `jedna z podanych danych nie jest liczbą, spróbuj ponownie 😎`
        );
    } else {
        const result = `${number1} + ${number2} = ${number1 + number2}`;
        return this.history.push(result);
    }
};

Calculator.prototype.subtract = function (num1, num2) {
    number1 = parseInt(num1);
    number2 = parseInt(num2);
    if (isNaN(number1) && isNaN(number2)) {
        this.history.push(
            `obie z podanych danych nie są liczbami, spróbuj ponownie 😎`
        );
    } else if (isNaN(number1) || isNaN(number2)) {
        this.history.push(
            `jedna z podanych danych nie jest liczbą, spróbuj ponownie 😎`
        );
    } else {
        const result = `${number1} - ${number2} = ${number1 - number2}`;
        return this.history.push(result);
    }
};
Calculator.prototype.multiply = function (num1, num2) {
    number1 = parseInt(num1);
    number2 = parseInt(num2);
    if (isNaN(number1) && isNaN(number2)) {
        this.history.push(
            `obie z podanych danych nie są liczbami, spróbuj ponownie 😎`
        );
    } else if (isNaN(number1) || isNaN(number2)) {
        this.history.push(
            `jedna z podanych danych nie jest liczbą, spróbuj ponownie 😎`
        );
    } else {
        const result = `${number1} * ${number2} = ${number1 * number2}`;
        return this.history.push(result);
    }
};
Calculator.prototype.divide = function (num1, num2) {
    number1 = parseInt(num1);
    number2 = parseInt(num2);
    if (isNaN(number1) && isNaN(number2)) {
        this.history.push(
            `obie z podanych danych nie są liczbami, spróbuj ponownie 😎`
        );
    } else if (isNaN(number1) || isNaN(number2)) {
        this.history.push(
            `jedna z podanych danych nie jest liczbą, spróbuj ponownie 😎`
        );
    } else {
        if (number2 === 0) {
            this.history.push(`nigdy 🤬 nie dziel przez zero!!!`);
        } else {
            const result = `${number1} / ${number2} = ${number1 / number2}`;
            return this.history.push(result);
        }
    }
};

Calculator.prototype.power = function (num1, num2) {
    number1 = parseInt(num1);
    number2 = parseInt(num2);
    let powerResult = 1;
    if (isNaN(number1) && isNaN(number2)) {
        this.history.push(
            `obie z podanych danych nie są liczbami, spróbuj ponownie 😎`
        );
    } else if (isNaN(number1) || isNaN(number2)) {
        this.history.push(
            `jedna z podanych danych nie jest liczbą, spróbuj ponownie 😎`
        );
    } else {
        for (i = 0; i < number2; i++) {
            powerResult *= number1;
        }
        return this.history.push(
            `${number1} do potęgi ${number2} = ${powerResult}`
        );
    }
};

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
    promptContent =
        'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
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
            calc.multiply(number1, number2);
        }
        if (action === '/') {
            calc.divide(number1, number2);
        }
        if (action === '^') {
            calc.power(number1, number2);
        }
    }
} while (calc.isCorrectAction(action));