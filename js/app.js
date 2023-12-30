function Calculator() {
    this.actions = {
        '+': this.add.bind(this),
        '-': this.sub.bind(this),
        '*': this.multi.bind(this),
        '/': this.div.bind(this),
        '^': this.power.bind(this),
    };
    this.history = [];
    this.result = 0;
}

Calculator.prototype.handleInvalidNumberInput = function() {
    promptContent += '\nPodane wartości nie są liczbami. \nWciśnij Ok aby kontynuować';
    prompt(promptContent);
}
Calculator.prototype.handleInvalidOperationInput = function() {
    promptContent += '\nNieprawidłowa operacja. \nWciśnij Ok aby kontynuować';
    prompt(promptContent);
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.validateNumberInput = function(num1, num2) {
    const isNum1Valid = !isNaN(Number(num1));
    const isNum2Valid = !isNaN(Number(num2));

    return isNum1Valid && isNum2Valid;

}

Calculator.prototype.add = function(num1, num2) {
    const result = num1 + num2;
    this.result = result;
    const operation = `${num1} + ${num2} = ${result}`;
    this.history.push(operation);
    return result;
}

Calculator.prototype.sub = function(num1, num2) {
    const result = num1 - num2;
    this.result = result;
    const operation = `${num1} - ${num2} = ${result}`;
    this.history.push(operation);
    return result;
}

Calculator.prototype.multi = function(num1, num2) {
    const result = num1 * num2;
    this.result = result;
    const operation = `${num1} * ${num2} = ${result}`;
    this.history.push(operation);
    return result;
}

Calculator.prototype.div = function(num1, num2) {
    if (num2 === 0) {
        promptContent += '\nNie można dzielić przez zero. Wprowadź inną liczbę dla dzielnika.';
        prompt(promptContent);
        return NaN;
    }
    const result = num1 / num2;
    this.result = result;
    const operation = `${num1} / ${num2} = ${result}`;
    this.history.push(operation);
    return result;
}

Calculator.prototype.power = function (num1, num2) {
    let result = 1;
    for (let i = 0; i < num2; i++) {
        result *= num1;
    }
    this.result = result;
    const operation = `${num1} ^ ${num2} = ${result}`;
    this.history.push(operation);
    return result;
}



const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wpisz Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);

    if (action.toLowerCase() === 'anuluj') {
        break;
    }

    const operationFunction = calc.actions[action];

    if (operationFunction) {
        number1 = Number(prompt('Podaj liczbę nr 1'));
        number2 = Number(prompt('Podaj liczbę nr 2'));

        if (calc.validateNumberInput(number1, number2)) {
            calc.actions[action](number1, number2);
        } else {
            calc.handleInvalidNumberInput();
            
        }
    } else {
        calc.handleInvalidOperationInput();
    }
    
} while (true);
