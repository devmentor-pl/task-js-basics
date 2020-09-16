function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.checkNaN = function (n) {
    return Number.isNaN(n)
}

Calculator.prototype.add = function(num1, num2) {
    const result = parseFloat((num1 + num2).toFixed(10));
    this.history.push(`${(num1)} + ${num2} = ${result}`)
}
Calculator.prototype.subtract = function (num1, num2) {
    const result = parseFloat((num1 - num2).toFixed(10));
    this.history.push(`${num1} - ${num2} = ${result}`)
}
Calculator.prototype.multiply = function (num1, num2) {
    const result = parseFloat((num1 * num2).toFixed(10));
    this.history.push(`${num1} * ${num2} = ${result}`)
}
Calculator.prototype.divide = function (num1, num2) {
    if (num2 === 0) {
        alert('You can\'t divide by 0.')
    } else {
        const result = parseFloat((num1 / num2).toFixed(10));
        this.history.push(`${num1} / ${num2} = ${result}`)
    }
}
Calculator.prototype.power = function (num1, num2) {
    let pow = Math.round(num2)
    if (num2 < 1 || !Number.isInteger(num2)) {
        alert(`The power of ${num2} is not an integer or/and is too small for this Calculator. It will be rounded to ${pow}.`)
    }
    let i = 0;
    let base = 1;
    while (i < num2) {
        base *= num1
        i++
    }
    const result = parseFloat((base).toFixed(10));
    this.history.push(`${num1} ^ ${pow} = ${result}`)
}

const calc = new Calculator();
let history, action, promptContent, isCorrectAction, number1, number2;
do { 
    history = calc.getHistoryAsString()
    history === '' ? history = 'no previous operations' : history;
    promptContent = 'Choose an operand (+, -, *, /, ^) and confirm. \n';
    promptContent += 'If you want to quit press \"Anuluj\". \n';
    promptContent += 'Previous operations: \n' + history;

    action = prompt(promptContent);
    while (!calc.isCorrectAction(action)) {
        alert('You are supposed to choose one of these: +, -, *, /, ^.');
        action = prompt(promptContent)
    }
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        // function checkNaN(n1, n2) {
        //     return (Number.isNaN(n1) || Number.isNaN(n2))
        // }
        number1 = parseFloat(prompt('Podaj liczbę nr 1'));
        while (calc.checkNaN(number1)) {
            alert('You can\'t use characters that are not numbers or live an empty slot.')
            number1 = parseFloat(prompt('Podaj liczbę nr 1'));
        }
        number2 = parseFloat(prompt('Podaj liczbę nr 2'));
        while (calc.checkNaN(number2)) {
            alert('You can\'t use characters that are not numbers or live an empty slot.')
            number2 = parseFloat(prompt('Podaj liczbę nr 2'));
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
                calc.divide(number1, number2)
                break;
            case '^':
                calc.power(number1, number2)
        }
    }
} while(calc.isCorrectAction(action));