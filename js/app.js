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

Calculator.prototype.add = function(num1, num2) {
        const result = num1 + num2;
        this.history.push(num1 + '+' + num2 + '=' + result);
}

Calculator.prototype.subtract = function(num1, num2) {
        const result = num1 - num2;
        this.history.push(num1 + '-' + num2 + '=' + result);
}

Calculator.prototype.multiply = function(num1, num2) {
        const result = num1 * num2;
        this.history.push(num1 + '*' + num2 + '=' + result);
}

Calculator.prototype.divide = function(num1, num2) {
        const result = num1 / num2;
        this.history.push(num1 + '/' + num2 + '=' + result);
}

Calculator.prototype.power = function(num1, num2) {
        let result = num1;
        if(num2 !== 0) {
            for(let i=2; i<=num2; i++) {
                result *= num1;}
            this.history.push(num1 + '^' + num2 + '=' + result);
        } else {
            this.history.push(num1 + '^' + num2 + '=' + 1);
        }
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;

do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \nJeśli chcesz zrezygnować wciśnij Anuluj.\nLista poprzednich operacji: \n' + calc.getHistoryAsString();
    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = parseInt(prompt('Podaj liczbę nr 1'));
        number2 = parseInt(prompt('Podaj liczbę nr 2'));
        if(!isNaN(number1) && !isNaN(number2)) {
            switch(action) {
                case '+':
                    calc.add(number1, number2);
                    break;
                case '-':
                    calc.subtract(number1, number2);
                    break;
                case '*':
                    calc.multiply(number1, number2);;
                    break;
                case '/':
                    calc.divide(number1, number2);;
                    break;
                case '^':
                    calc.power(number1, number2);
                    break;
                default:
                    alert('Dzialanie nie istnieje!');
                    break;
            }
        }
    }

} while(calc.isCorrectAction(action));