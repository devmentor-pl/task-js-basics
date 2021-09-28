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

Calculator.prototype.add = function(result) {
    this.history.push(result);
}

Calculator.prototype.sub = function(result) {
    this.history.push(result);
}

Calculator.prototype.mult = function(result) {
    this.history.push(result);
}

Calculator.prototype.div = function(result) {
    this.history.push(result);
}

Calculator.prototype.expo = function(result) {
    this.history.push(result);
}

function operations(num1, num2) {

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(action === '+') {
        let result = num1+num2;
        result = num1 + ' + ' + num2 + ' = ' + result;

        return calc.add(result);
        }
    else if(action === '-') {
        let result = num1-num2;
        result = num1 + ' - ' + num2 + ' = ' + result;

        return calc.sub(result);
    }
    else if(action === '*') {
        let result = num1*num2;
        result = num1 + ' * ' + num2 + ' = ' + result;

        return calc.mult(result);
    }
    else if(action === '/') {
        let result = num1/num2;
        result = num1 + ' / ' + num2 + ' = ' + result;

        return calc.div(result);
    }
    else if(action === '^') {
        let result = 1;

        for (let i=1; i<=num2; i++) {
            result *= num1;
    }
        result = num1 + '^' + num2 + '=' + result

        return calc.expo(result);
    }

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

        operations(number1,number2);
    }
    else {
        alert('Niepoprawy wybór!');
    }
    
} while(calc.isCorrectAction(action));


