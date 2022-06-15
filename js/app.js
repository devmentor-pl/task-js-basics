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

Calculator.prototype.addToHistory = function (num1, num2, action, result) {
    this.history.push(`${num1} ${action} ${num2} = ${result}`);
}

Calculator.prototype.add = function (num1, num2) {
    return num1 + num2;
}

Calculator.prototype.substract = function (num1, num2) {
    return num1 - num2;
}

Calculator.prototype.multiply = function (num1, num2) {
    return num1 * num2;
}

Calculator.prototype.divide = function (num1, num2) {
    return num1 / num2;
}

Calculator.prototype.expo = function (a, n) {
    if (n === 0) return 1;
    let result = a;
    for (let i = 1; i < n; i++) {
        result *= a;
    }
    return result;
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2, result, num1, num2;
do {
    promptContent = 'Type a sign of an operation you want to perform (+, -, *, /, ^) and confirm. \n'; // \n - znak nowej linii
    promptContent += 'Click Cancel to quit. \n';
    promptContent += 'List of previous operations: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if (isCorrectAction) {
        number1 = prompt('Please input no.1');
        number2 = prompt('Please input no.2');

        num1 = Number(number1);
        num2 = Number(number2);

        if ((!isNaN(num1)) && (!isNaN(num2))) {
            if (action === '+') {
                result = calc.add(num1, num2);
            }
            if (action === '-') {
                result = calc.substract(num1, num2);
            }
            if (action === '*') {
                result = calc.multiply(num1, num2);
            }
            if (action === '/') {
                result = calc.division(num1, num2);
            }
            if (action === '^') {
                result = calc.expo(num1, num2);
            }
            calc.addToHistory(num1, num2, action, result);
        }
    }

} while (action);

console.log(calc.history);