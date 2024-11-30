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

Calculator.prototype.checkNumbers = function (num1, num2) {
    let number1 = Number(num1);
    let number2 = Number(num2);
    if (((number1 && number2))) {
        return true;
    } else {
        alert("Spróbuj ponownie. Podane wyrażenie to nie liczba lub podałeś 0.")
    }
}
Calculator.prototype.addHistory = function (num1, num2, action, result) {
    return this.history.push(`${num1} ${action} ${num2} = ${result}`);
}
Calculator.prototype.add = function (num1, num2) {
    return result = num1 + num2;
}

Calculator.prototype.sub = function (num1, num2) {
    return result = num1 - num2;
}

Calculator.prototype.multi = function (num1, num2) {
    return result = num1 * num2;

}
Calculator.prototype.div = function (num1, num2) {
    return result = num1 / num2;
}

Calculator.prototype.exponentation = function (num1, num2) {
    let exp = num1;
    for (let i = 1; i < num2; i++) {
        exp *= num1;
    }
    return exp;
}

const calc = new Calculator();

let action, promptContent, isCorrectAction, number1, number2;

do {
    const operations = {
        "+": calc.add,
        "-": calc.sub,
        "*": calc.multi,
        "/": calc.div,
        "^": calc.exponentation,

    }
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n';
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();
    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);

    if (isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');
        calc.checkNumbers(number1, number2)
        const operationFunc = operations[action];
        const result = operationFunc(Number(number1), Number(number2));
        const addHistory = calc.addHistory(number1, number2, action, result);
    }
} while (calc.isCorrectAction(action));