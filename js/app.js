function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
    if (this.actions.includes(action)) {
        return this.actions.includes(action);
    }
    else {
       alert('Wrong operator! Refresh and try again')
    }

}

Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
}
function converToNumber(x, y) {
    num1 = Number(x)
    num2 = Number(y)
    return num1, num2
}
function isNumber(num1, num2) {
    if (isNaN(num1) === true) {
        return calc.history.push('Not a number. Please try again')
    }
    else if (isNaN(num2) === true) {
        return calc.history.push('Not a number. Please try again')
    }
    else {
        return true
    }
}

Calculator.prototype.add = function (x, y) {
    converToNumber(x, y)
    if (isNumber(num1, num2) === true) {
        const result = num1 + num2
        calc.history.push(num1 + ' + ' + num2 + ' = ' + result)
        return result
    }
}
Calculator.prototype.sbtr = function (x, y) {
    converToNumber(x, y)
    if (isNumber(num1, num2) === true) {
        const result = num1 - num2
        calc.history.push(num1 + ' - ' + num2 + ' = ' + result)
        return result
    }
}
Calculator.prototype.mply = function (x, y) {
    converToNumber(x, y)
    if (isNumber(num1, num2) === true) {
        const result = num1 * num2
        calc.history.push(num1 + ' * ' + num2 + ' = ' + result)
        return result

    }
}
Calculator.prototype.divide = function (x, y) {
    converToNumber(x, y)
    if (isNumber(num1, num2) === true) {
        const result = num1 / num2
        calc.history.push(num1 + ' / ' + num2 + ' = ' + result)
        return result

    }
}
Calculator.prototype.exp = function (x, y) {
    converToNumber(x, y)
    if (isNumber(num1, num2) === true) {
        let result = 1
        for (let i = 1; i <= num2; i++) {
            result = result * num1
        }
        calc.history.push(num1 + ' ^ ' + num2 + ' = ' + result)
        return result

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
        }
        else if (action === '-') {
            calc.sbtr(number1, number2);
        }
        else if (action === '*') {
            calc.mply(number1, number2);
        }
        else if (action === '/') {
            calc.divide(number1, number2);
        }
        else if (action === '^') {
            calc.exp(number1, number2);
        }
    }
} while (calc.isCorrectAction(action))
