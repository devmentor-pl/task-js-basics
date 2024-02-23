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

    const num1Converted = Number(num1);
    const num2Converted = Number(num2);

    if(isNaN(num1) || isNaN(num2)) {
        prompt('Podana została błędna dana');
    }

    const result = num1Converted + num2Converted;

    this.history.push(num1Converted + action + num2Converted + ' = ' + result);
    console.log(this.history);
}

Calculator.prototype.sub = function(num1, num2) {

    const num1Converted = Number(num1);
    const num2Converted = Number(num2);

    if(isNaN(num1) || isNaN(num2)) {
        prompt('Podana została błędna dana');
    }

    const result = num1Converted - num2Converted;

    this.history.push(num1Converted + action + num2Converted + ' = ' + result);
    console.log(this.history);
}

Calculator.prototype.mul = function(num1, num2) {

    const num1Converted = Number(num1);
    const num2Converted = Number(num2);

    if(isNaN(num1) || isNaN(num2)) {
        prompt('Podana została błędna dana');
    }

    const result = num1Converted * num2Converted;

    this.history.push(num1Converted + action + num2Converted + ' = ' + result);
    console.log(this.history);
}

Calculator.prototype.div = function(num1, num2) {

    const num1Converted = Number(num1);
    const num2Converted = Number(num2);

    if(isNaN(num1) || isNaN(num2)) {
        prompt('Podana została błędna dana');
    }

    const result = num1Converted / num2Converted;

    this.history.push(num1Converted + action + num2Converted + ' = ' + result);
    console.log(this.history);
}

Calculator.prototype.pow = function(num1, num2) {
    const num1Converted = Number(num1);
    const num2Converted = Number(num2);

    if(isNaN(num1) || isNaN(num2)) {
        prompt('Podana została błędna dana');
    }
    
    let result = 1;
    for(let i = 0; i < num2Converted; i ++) {
        result *= num1Converted;
    }

    this.history.push(num1Converted + action + num2Converted + ' = ' + result);
    console.log(this.history);
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

        if(action === '+') {
            calc.add(number1, number2);
        } else if(action === '-') {
            calc.sub(number1, number2);
        } else if(action === '*') {
            calc.mul(number1, number2);
        } else if(action === '/') {
            calc.div(number1, number2);
        } else if(action === '^') {
            calc.pow(number1, number2);
        } else {
            prompt('Podana została błędna dana');
        }
    }
    
} while(calc.isCorrectAction(action));