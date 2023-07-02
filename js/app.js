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
    const actionsArray = Object.keys(this.actions);
    return actionsArray.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}
Calculator.prototype.isNaN = function(num) {
    return isNaN(num);
}

Calculator.prototype.add = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne    
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
        const result = num1 + num2;
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
        this.history.push(`${num1} + ${num2} = ${result}`);
    
}

Calculator.prototype.subtract = function(num1, num2) {
        const result = number1 - number2;
        this.history.push(`${num1} - ${num2} = ${result}`);
}

Calculator.prototype.multiply = function(num1, num2) {
        const result = num1 * num2;
        this.history.push(`${num1} * ${num2} = ${result}`);
}

Calculator.prototype.divide = function(num1, num2) {
    if(num2 !== 0) {
        const result = num1 / num2;
        this.history.push(`${num1} / ${num2} = ${result}`);
    } else if (num2 === 0) {
        this.history.push(`${num1} / ${num2} = Nie dzielimy przez zero.`)
    }
}

Calculator.prototype.power = function(num1, num2) {
    if(num2 !== 0 && num2 !== 1) {
        let result = 1;
        for (let i = 0; i < num2; i++) {
            result *= num1;
        }
        this.history.push(`${num1} ^ ${num2} = ${result}`);
    } else if (num2 === 0) {
        this.history.push(`${num1} ^ ${num2} = 1`)
    } else if (num2 === 1) {
        this.history.push(`${num1} ^ ${num2} = ${num1}`)
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
        number1 = Number(prompt('Podaj liczbę nr 1'));
        number2 = Number(prompt('Podaj liczbę nr 2'));

        if(!calc.isNaN(number1) && !calc.isNaN(number2)) {
            const calculate = calc.actions[action].bind(calc);

            calculate(number1, number2);

        } else {
        alert('Jedna lub obie wartosci nie sa liczbami.');
    }
    }
    
} while(calc.isCorrectAction(action));