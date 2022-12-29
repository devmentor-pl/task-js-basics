function Calculator() {
    this.actions = {
        '+': this.add,
        '-': this.subtract,
        '*': this.multiply,
        '/': this.divide,
        '^': this.power,
    },

        this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
    return Object.keys(this.actions).includes(action);
}

Calculator.prototype.isCorrectNumber = function (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return alert('To nie wygląda jak liczba...');
    } else {
        return true;
    }
}

Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
}

// Push result to history array and return to prompt history list
Calculator.prototype.addHistory = function (result) {
    calc.history.push(result);
    return result;
}

Calculator.prototype.add = function (num1, num2) {
    return `${num1} + ${num2} = ${num1 + num2}`;
}

Calculator.prototype.subtract = function (num1, num2) {
    return `${num1} - ${num2} = ${num1 - num2}`;
}

Calculator.prototype.multiply = function (num1, num2) {
    return result = `${num1} * ${num2} = ${num1 * num2}`;
}

Calculator.prototype.divide = function (num1, num2) {
    return `${num1} / ${num2} = ${num1 / num2}`;
}

Calculator.prototype.power = function (a, n) {
    let res = 1;
    let result = '';

    if (a === 0 && n === 0) {
        result = 0;
    } else if (n === 0) {
        result = 1;
    } else if (n < 0) {
        n = Math.abs(n);
        let j = 0;

        while (j < n) {
            let x = 1;
            res = res / a;
            if (j > 0) {
                result += ' * ';
            }

            result += x / a;

            j++;
        }

        result += ' = ' + res;
    } else {
        let i = 0;
        while (i < n) {
            res = res * a;

            if (i > 0) {
                result += ' * ';
            }

            result += a;
            i++;
        }
        result += ' = ' + res;
    }

    return result;
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2, isCorrectNumber;
do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n';
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    const actionFunc = calc.actions[action]
    if (isCorrectAction) {
        number1 = Number(prompt('Podaj liczbę nr 1'));
        number2 = Number(prompt('Podaj liczbę nr 2'));

        isCorrectNumber = calc.isCorrectNumber(number1, number2)
        if (isCorrectNumber) {
            if (typeof actionFunc === 'function') {
                calc.addHistory(actionFunc(number1, number2));
            };
        }
    } else {
        alert('Podałeś błędną operację!');
    }
} while (calc.isCorrectAction(action));