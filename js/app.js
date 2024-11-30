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

Calculator.prototype.mathOperation = function(num1, num2, action) {
    num1 = Number(num1)
    num2 = Number(num2)
        if (action === "+") {
            result = num1 + num2
        } else if (action === "-") {
            result = num1 - num2
        } else if (action === "*") {
            result = num1 * num2 
        } else if (action === "/") {
            result = num1 / num2
        } else if (action === "^") {
            let result = 1
            let multiplier = 1
            let multiplierString = ''
            while (multiplier <= num2) {
                result = result * num1
                multiplierString = num1 + ' '
                if (multiplier < num2) multiplierString = multiplierString + '*'
                if (multiplier === num2) multiplierString = multiplierString + '=' + result
                multiplier++
            }

            this.history.push(multiplierString)
        } this.history.push(result)
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');
        
        calc.mathOperation(number1, number2, action)
    }
    
} while(calc.isCorrectAction(action));