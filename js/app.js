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
    const sum = num1 + num2
    const result = num1 + ' + ' + num2 + ' = ' + sum
    this.history.push(result)
}

Calculator.prototype.subtract = function (num1, num2) {
    const subtract = num1 - num2
    const result = num1 + ' - ' + num2 + ' = ' + subtract
    this.history.push(result)
}

Calculator.prototype.multiply = function (num1, num2) {
    const multiply = num1 * num2
    const result = num1 + ' * ' + num2 + ' = ' + multiply
    this.history.push(result)
}

Calculator.prototype.divide = function (num1, num2) {
    const divide = num1 / num2
    const result = num1 + ' / ' + num2 + ' = ' + divide
    this.history.push(result)
}

Calculator.prototype.powers = function (num1, num2) {
    const powers = num1 ** num2
    const result = num1 + ' ^ ' + num2 + ' = ' + powers
    this.history.push(result)
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
        number1 = Number(prompt('Podaj liczbę nr 1'))
        if (isNaN(number1)) {
            alert('To nie liczba wynik będzie nie właściwy')
        }
        number2 = Number(prompt('Podaj liczbę nr 2'))
        if (isNaN(number2)) {
            alert('To nie liczba wynik będzie nie właściwy')
        }

        switch (action) {
            case '+':
                calc.add(number1, number2)
                break;
            case '-':
                calc.subtract(number1, number2)
                break;
            case '*':
                calc.multiply(number1, number2)
                break;
            case '/':
                if (number2 !== 0) {
                    calc.divide(number1, number2)
                } else {
                    alert('Nie dzielimy przez 0 ;)')
                }
                break;
            case '^':
                if (number1 !== 0 && number2 === 0) {
                    result = number1 + ' ^ ' + number2 + ' = ' + '1'
                    alert('Każda liczba niezerowa poniesiona do potęgi zerowej równa się jeden')
                } else if (number1 === 0 && number2 > 0) {
                    result = number1 + ' ^ ' + number2 + ' = ' + '0'
                    alert('Zero podniesione do każdej dodatniej potęgi równa się zero')
                }
                calc.powers(number1, number2)
                break;
            default:
                break;
        }
    } else {
        alert('Błędny operator arytmetyczny wybierz jeden z nich => (+, -, *, /, ^)')
    }

} while (calc.isCorrectAction(action));