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
Calculator.prototype.isCorrectType = function (num1, num2) {
    number1 = parseFloat(num1)
    number2 = parseFloat(num2)

    if (isNaN(number1) || isNaN(number2)) {
        alert(`Przekazana wartość nie jest liczbą`)
    }
    return true
}
Calculator.prototype.calculate = function (num1, num2, action) {
    if (this.isCorrectType(num1, num2)) {
        switch (action) {
            case '+': return this.add(num1, num2)
            case '-': return this.subtraction(num1, num2)
            case '*': return this.multiply(num1, num2)
            case '/': return this.divide(num1, num2)
            case '^': return this.exponentiation(num1, num2)
        }
    }

}
Calculator.prototype.addResultToHistory = function (result) {
    this.history.push(result)
}

Calculator.prototype.add = function (num1, num2) {
    const result = num1 + num2
    this.addResultToHistory(`${num1}+${num2}=${result}`)
}

Calculator.prototype.subtraction = function (num1, num2) {
    const result = num1 - num2
    this.addResultToHistory(`${num1}-${num2}=${result}`)
}
Calculator.prototype.multiply = function (num1, num2) {
    const result = num1 * num2
    this.addResultToHistory(`${num1}*${num2}=${result}`)
}
Calculator.prototype.divide = function (num1, num2) {
    const result = num1 / num2
    this.addResultToHistory(`${num1}/${num2}=${result}`)
}
Calculator.prototype.exponentiation = function (num1, num2) {
    let pow = 1;
    for (let i = 0; i < num2; i++) {
        pow = pow * num1
    }
    const result = pow
    this.addResultToHistory(`${num1}^${num2}=${result}`)
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
        calc.isCorrectType(number1, number2)
        calc.calculate(number1, number2, action)
        promptContent += `${this.history}`
    }

} while (calc.isCorrectAction(action));
