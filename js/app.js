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

Calculator.prototype.start = function (num1, num2, operator) {
    const number1 = Number(num1)
    const number2 = Number(num2)
    let result
    if (Number.isNaN(number1) || Number.isNaN(number2)) {
        const error = 'Wprowadzone dane ' + num1 + ' i ' + num2 + ' są nieprawidłowe. Spróbuj ponownie!'
        return this.history.push(error)
    }
    if (operator === '/' && number2 === 0) {
        const error = 'Nie można dzielić przez 0! Spróbuj ponownie!'
        return this.history.push(error)
    }
    if (operator === '^' && number1 === 0 && number2 === 0) {
        const error = 'Nie można rozwiązać równania 0 do potęgi 0! Spróbuj ponownie!'
        return this.history.push(error)
    }
    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        case '^': {
            function customPowerFunc(numb1, numb2) {
                powResult = 1
                if (numb2 > 0) {
                    for (let i = 0; i < numb2; i++) {
                        powResult *= numb1
                    }
                }
                if (numb2 < 0) {
                    for (let i = 0; i > numb2; i--) {
                        powResult /= numb1
                    }
                }
                if (numb2 = 0) {
                    powResult = 1
                }
                return powResult
            }
            result = customPowerFunc(number1, number2)
            break
        }
        default:
            result = 'Nieprawidłowy operator!' // przypadek niemożliwy do wystąpienia ze względu na isCorretAction
            break
    }
    return this.history.push(number1 + ' ' + operator + ' ' + number2 + ' = ' + result)
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n';
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if (isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');
        calc.start(number1, number2, action)
    }

} while (calc.isCorrectAction(action));