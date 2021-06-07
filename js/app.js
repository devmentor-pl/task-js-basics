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

Calculator.prototype.add = function (num1, num2) {
    if (!((isNaN(Number(num1))) || isNaN(Number(num2)))) {
        return this.history.push(`${(Number(num1))} + ${(Number(num2))} = ${(Number(num1))+(Number(num2)) }`);
    } else {
        return this.history.push('Podano błędne liczby');
    }
}

Calculator.prototype.subtract = function (num1, num2) {
    if (!((isNaN(Number(num1))) || isNaN(Number(num2)))) {
        return this.history.push(`${(Number(num1))} - ${(Number(num2))} = ${(Number(num1))-(Number(num2)) }`);
    } else {
        return this.history.push('Podano błędne liczby');
    }
}

Calculator.prototype.multiply = function (num1, num2) {
    if (!((isNaN(Number(num1))) || isNaN(Number(num2)))) {
        return this.history.push(`${(Number(num1))} * ${(Number(num2))} = ${(Number(num1))*(Number(num2)) }`);
    } else {
        return this.history.push('Podano błędne liczby');
    }
}

Calculator.prototype.divide = function (num1, num2) {
    if (!((isNaN(Number(num1))) || isNaN(Number(num2)))) {
        if ((Number(num2) === 0)) {
            return this.history.push(`Próba dzielenia przez 0`)
        } else {
            return this.history.push(`${(Number(num1))} / ${(Number(num2))} = ${(Number(num1))/(Number(num2)) }`);
        }
    } else {
        return this.history.push('Podano błędne liczby');
    }
}

Calculator.prototype.exponent = function (num1, num2) {
    if (!((isNaN(Number(num1))) || isNaN(Number(num2)))) {
        if (Number(num2) >= 0) {
            let exponentResult = 1;
            for (let i = 0; i < Number(num2); i++) {
                exponentResult *= Number(num1);
            }
            return this.history.push(`${(Number(num1))} ^ ${(Number(num2))} = ${exponentResult}`);
        } else {
            let exponentResult = 1;
            for (let i = 0; i > Number(num2); i--) {
                exponentResult *= 1 / Number(num1);
            }
            return this.history.push(`${(Number(num1))} ^ ${(Number(num2))} = ${exponentResult}`);
        }
    } else {
        return this.history.push('Podano błędne liczby');
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
        } else {
            calc.exponent(number1, number2)
        }
    }

} while (calc.isCorrectAction(action));