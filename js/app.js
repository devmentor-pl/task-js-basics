function Calculator() {
    this.actions = {
        '+': add,
        '-': subtraction,
        '*': multiply,
        '/': divide,
        '^': exponentiation
    }
    this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.hasOwnProperty(action);
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
Calculator.prototype.getResult = function (num1, num2, action) {
    const result = `${num1} ${action} ${num2} = ${this.actions[action](num1, num2)}`
    this.history.push(result)
}

function add(num1, num2) {
    return num1 + num2
}

function subtraction(num1, num2) {
    return num1 - num2

}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
}
function exponentiation(num1, num2) {
    let pow = 1;
    for (let i = 0; i < num2; i++) {
        pow = pow * num1
    }
    return pow
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
        
        calc.isCorrectType(number1, number2) ? calc.getResult(number1, number2, action) : alert('false')
    }

} while (calc.isCorrectAction(action));
