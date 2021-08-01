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

Calculator.prototype.parseInput = function (num) {
    return parseFloat(num);
}

Calculator.prototype.validateInputs = function (num1, num2) {
    return (!Number.isNaN(num1) && !Number.isNaN(num2)) ? true : false;
}

Calculator.prototype.addToHistory = function (num1, num2, action, result) {
    this.history.push(`${num1} ${action} ${num2} = ${result}`);
}

Calculator.prototype.add = function (num1, num2) {
    let result = num1 + num2;
    this.addToHistory(num1, num2, action, result);
}

Calculator.prototype.sub = function (num1, num2) {
    let result = num1 - num2;
    this.addToHistory(num1, num2, action, result);
}

Calculator.prototype.multi = function (num1, num2) {
    let result = num1 * num2;
    this.addToHistory(num1, num2, action, result);
}

Calculator.prototype.div = function (num1, num2) {
    if (num2 !== 0) {
        let result = num1 / num2;
        this.addToHistory(num1, num2, action, result);
    } else {
        alert(message);
    }
}

Calculator.prototype.exp = function (num1, num2) {
    if (Number.isInteger(num2) && num2 >= 0) {
        let result = 1;
        let counter = 0;
        while (counter < num2) {
            result *= num1;
            counter++;
        }
        this.addToHistory(num1, num2, action, result);
    } else {
        alert(message);
    }
}

const calc = new Calculator();
let message = 'Podano błędne wartości!';
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

        let parsedNum1 = calc.parseInput(number1);
        let parsedNum2 = calc.parseInput(number2);

        if (calc.validateInputs(parsedNum1, parsedNum2)) {
            if (action === '+') {
                calc.add(parsedNum1, parsedNum2);
            } else if (action === '-') {
                calc.sub(parsedNum1, parsedNum2);
            } else if (action === '*') {
                calc.multi(parsedNum1, parsedNum2);
            } else if (action === '/') {
                calc.div(parsedNum1, parsedNum2);
            } else if (action === '^') {
                calc.exp(parsedNum1, parsedNum2);
            }
        } else {
            alert(message);
        }
    }
} while (calc.isCorrectAction(action));