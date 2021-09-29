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
    let sum = num1 + num2;
    let result = num1 + ' + ' + num2 + ' = ' + sum;
    return this.history.push(result);
}

Calculator.prototype.sub = function(num1, num2) {
    let sub = num1 - num2;
    let result = num1 + ' - ' + num2 + ' = ' + sub;
    return this.history.push(result);
}

Calculator.prototype.mult = function(num1, num2) {
    let mult = num1 * num2;
    let result = num1 + ' * ' + num2 + ' = ' + mult;
    return this.history.push(result);
}

Calculator.prototype.div = function(num1, num2) {
    let div = num1 / num2;
    let result = num1 + ' / ' + num2 + ' = ' + div;
    return this.history.push(result);
}

Calculator.prototype.expo = function(num1, num2) {
    let result = 1;

    for (let i=1; i<=num2; i++) {
        result *= num1;
    }
    result = num1 + '^' + num2 + '=' + result;

    return this.history.push(result); 
}

function operations(num1, num2) {

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(action === '+') {

        return calc.add(num1, num2);
        }
    else if(action === '-') {

        return calc.sub(num1, num2);
    }
    else if(action === '*') {

        return calc.mult(num1, num2);
    }
    else if(action === '/') {

        return calc.div(num1, num2);
    }
    else if(action === '^') {

        return calc.expo(num1, num2);
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


