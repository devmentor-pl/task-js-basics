function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectValue = function (num) {
    return Number.isNaN(num) ? false : true;
}

Calculator.prototype.addToHistory = function (num1, num2, action, result) {
    this.history.push(`${num1} ${action} ${num2} = ${result}`)
}

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
}

Calculator.prototype.add = function (num1, num2) {
    if (this.isCorrectValue(num1) && this.isCorrectValue(num2)) {
        result = num1 + num2;
    } else {
        result = 'Podano błędne liczby';
    }
}

Calculator.prototype.subtract = function (num1, num2) {
    if (this.isCorrectValue(num1) && this.isCorrectValue(num2)) {
        result = num1 - num2;
    } else {
        result = 'Podano błędne liczby';
    }
}

Calculator.prototype.multiply = function (num1, num2) {
    if (this.isCorrectValue(num1) && this.isCorrectValue(num2)) {
        result = num1 * num2;
    } else {
        result = 'Podano błędne liczby';
    }
}

Calculator.prototype.divide = function (num1, num2) {
    if (this.isCorrectValue(num1) && this.isCorrectValue(num2)) {
        if (num2 === 0) {
            result = "Próba dzielenia przez 0";
        } else {
            result = num1 / num2;
        }
    } else {
        result = 'Podano błędne liczby';
    }
}

Calculator.prototype.exponentiate = function (num1, num2) {
    if (this.isCorrectValue(num1) && this.isCorrectValue(num2)) {
        if (num2 >= 0) {
            let exponentResult = 1;
            for (let i = 0; i < num2; i++) {
                exponentResult *= num1;
            }
            result = exponentResult;
        } else {
            let exponentResult = 1;
            for (let i = 0; i > num2; i--) {
                exponentResult *= 1 / num1;
            }
            result = exponentResult;
        }
    } else {
        result = 'Podano błędne liczby';
    }
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2, result;
do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if (isCorrectAction) {
        number1 = Number(prompt('Podaj liczbę nr 1'));
        number2 = Number(prompt('Podaj liczbę nr 2'));

        if (action === '+') {
            calc.add(number1, number2);
        } else if (action === '-') {
            calc.subtract(number1, number2);
        } else if (action === '*') {
            calc.multiply(number1, number2);
        } else if (action === '/') {
            calc.divide(number1, number2);
        } else {
            calc.exponentiate(number1, number2)
        }
        calc.addToHistory(number1, number2, action, result);
    }

} while (calc.isCorrectAction(action));