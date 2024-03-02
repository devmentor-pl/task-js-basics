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
Calculator.prototype.stopAction = function(event) {
    event.preventDefault();
}

Calculator.prototype.checkIsNan = function(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        prompt('Podana została błędna dana');
        calc.stopAction(true);
    } 
}

Calculator.prototype.transform = function(operationType, num1, num2) {
    calc.checkIsNan(Number(num1), Number(num2));
    const result = operations[operationType](Number(num1), Number(num2));
    this.history.push(Number(num1) + action + Number(num2) + ' = ' + result);
}

Calculator.prototype.add = function(num1, num2) {
    return num1 + num2; 
}

Calculator.prototype.sub = function(num1, num2) {
    return num1 + num2; 
    }

Calculator.prototype.mul = function(num1, num2) {
    return num1 + num2; 
}

Calculator.prototype.div = function(num1, num2) {
    return num1 + num2; 
}

Calculator.prototype.pow = function(num1, num2) {
    let result = 1;
    for(let i = 0; i < num2; i ++) {
        result *= num1;
    }
    return result;
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;

const operations = {
'+': calc.add,
'-': calc.sub,
'*': calc.mul,
'/': calc.div,
'^': calc.pow,
}

do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);

    if(isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

    calc.transform(action, number1, number2);
    }
    
} while(calc.isCorrectAction(action));