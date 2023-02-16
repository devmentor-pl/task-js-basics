function Calculator() {
    this.actions = {
        '+': this.add,
        '-': this.subtract,
        '*': this.multiply,
        '/': this.divide,
        '^': this.power,
    };
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return Object.keys(this.actions).includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.addToHistory = function (result) {
    calc.history.push(result);
    return result;
}

Calculator.prototype.add = function(num1, num2) {
    return `${num1} + ${num2} = ${num1 + num2}`;
}

Calculator.prototype.subtract = function(num1, num2) {
    return `${num1} - ${num2} = ${num1 - num2}`;
}

Calculator.prototype.multiply = function(num1, num2) {
    return `${num1} * ${num2} = ${num1 * num2}`;
}

Calculator.prototype.divide = function(num1, num2) {
    if(num2 === 0) {
        alert("Nie da sie podzielic przez 0.");
        return `${num1} - ${num2} = nie dzielimy przez 0`;
    } else {
        return `${num1} / ${num2} = ${num1 / num2}`;
    }
}

Calculator.prototype.power = function(num1, num2) {
        let result = 1;
        if(num1 === 0 && num2 == 0) {
            return `${num1} ** ${num2} = 0`;
        }
        if(num2 == 0) {
            return `${num1} ** ${num2} = 1`;
        }
        for (let i = 0; i < num2; i++) {
            result *= num1;            
        }
        return `${num1} ** ${num2} = ${num1 ** num2}`;
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    const actionFunc = calc.actions[action];
    if(isCorrectAction) {
        number1 = Number(prompt('Podaj liczbę nr 1'));
        number2 = Number(prompt('Podaj liczbę nr 2'));

        if(isNaN(number1) || isNaN(number2)) {
            alert('Podana wartosc nie jest liczba.')
        }
        if (typeof actionFunc === 'function') {
            calc.addToHistory(actionFunc(number1, number2));
        };
    }
} while(calc.isCorrectAction(action));