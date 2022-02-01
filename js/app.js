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

Calculator.prototype.isCorrectInput = function(number) {
    return number !== undefined 
        && number !== null 
        && number !== true 
        && number !== false 
        && +number !== NaN;
}

Calculator.prototype.add = function(num1, num2) {
    if(this.isCorrectInput(num1) && this.isCorrectInput(num1)) {
        const a = +num1;
        const b = +num2;
        const result = a + b;
        this.history.push(`${a} + ${b} = ${result}`);
    }
}

Calculator.prototype.subtract = function(num1, num2) {
    if(this.isCorrectInput(num1) && this.isCorrectInput(num2)) {
        const a = +num1;
        const b = +num2;
        const result = a - b;
        this.history.push(`${a} - ${b} = ${result}`);
    }
}

Calculator.prototype.multiply = function(num1, num2) {
    if(this.isCorrectInput(num1) && this.isCorrectInput(num2)) {
        const a = +num1;
        const b = +num2;
        const result = a * b;
        this.history.push(`${a} * ${b} = ${result}`);
    }
}

Calculator.prototype.divide = function(num1, num2) {
    if(this.isCorrectInput(num1) && this.isCorrectInput(num2) && num2 !== 0) {
        const a = +num1;
        const b = +num2;
        const result = a / b;
        this.history.push(`${a} / ${b} = ${result}`);
    }
}

//doesn't let floating numbers
Calculator.prototype.power = function(num1, num2) {
    if(this.isCorrectInput(num1) && this.isCorrectInput(num2) && Math.round(+num2) === +num2) {
        let a = +num1;
        let power = +num2;
        let result = 1;

        if(power < 0) {
            a = 1 / a;
            power = -power;
        }

        for(let i = power; i > 0; i--) {
            result *= a;
        }

        this.history.push(`${a} ^ ${power} = ${result}`);
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
        if(action === '+') {
            calc.add(number1, number2);
        }
        else if(action === '-') {
            calc.subtract(number1, number2);
        }
        else if(action === '*') {
            calc.multiply(number1, number2);
        }
        else if(action === '/') {
            calc.divide(number1, number2);
        }
        else if(action === '^') {
            calc.power(number1, number2);
        }
    }
    
} while(calc.isCorrectAction(action));