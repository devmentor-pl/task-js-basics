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

function isUserDataNaN(num1, num2) {
    return isNaN(num1) || isNaN(num2) ? true : false
}

Calculator.prototype.add = function(num1, num2) {
    this.history.push(`${num1} + ${num2} = ${num1 + num2}`)
}

Calculator.prototype.odd = function(num1, num2) {
    this.history.push(`${num1} - ${num2} = ${num1 - num2}`)
}

Calculator.prototype.multiply = function(num1, num2) {
    this.history.push(`${num1} * ${num2} = ${num1 * num2}`)
}

Calculator.prototype.divide = function(num1, num2) {
    this.history.push(`${num1} / ${num2} = ${num1 / num2}`)
}

Calculator.prototype.pow = function(num1, num2) {
    let resultant = num2 !== 0 ? num1 : 0;
    for(let i = 1; i < num2; i++) {
        resultant = resultant * num1
    }

    this.history.push(`${num1} ^ ${num2} = ${resultant}`)
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, userNumber1, userNumber2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        userNumber1 = prompt('Podaj liczbę nr 1');
        userNumber2 = prompt('Podaj liczbę nr 2');

        if (userNumber1 !== null && userNumber2 !== null) {
            const number1 = parseFloat(userNumber1);
            const number2 = parseFloat(userNumber2);

            switch (action !== "" || !isUserDataNaN(number1, number2)) {
                case action === "+": 
                    calc.add(number1, number2);
                    break;
                case action === "-": 
                    calc.odd(number1, number2);
                    break;
                case action === "*": 
                    calc.multiply(number1, number2);
                    break;
                case action === "/": 
                    calc.divide(number1, number2);
                    break;
                case action === "^": 
                    calc.pow(number1, number2);
                    break;
                default:
                    break;
            }
        }
    }
    
} while(calc.isCorrectAction(action));