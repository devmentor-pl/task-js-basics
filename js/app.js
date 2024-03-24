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
    // 1. zamień wartości przekazane przez parametr na typ number
    //num1 = parseFloat(num1);
    //num2 = parseFloat(num2);
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    if (Number.isNaN(num1) === true || Number.isNaN(num2) === true) {
        prompt('Podano wartości niebędące liczbami');
    }
    else {
        const result = num1 + num2;
        this.history.push(num1+' + '+num2+' = '+result);
    }
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}

Calculator.prototype.subtract = function(num1, num2) {
    if (Number.isNaN(num1) === true || Number.isNaN(num2) === true) {
        prompt('Podano wartości niebędące liczbami');
    }
    else {
        const result = num1 - num2;
        this.history.push(num1+' - '+num2+' = '+result);
    }
}

Calculator.prototype.multiply = function(num1, num2) {
    if (Number.isNaN(num1) === true || Number.isNaN(num2) === true) {
        prompt('Podano wartości niebędące liczbami');
    }
    else {
        const result = num1 * num2;
        this.history.push(num1+' * '+num2+' = '+result);
    }
}

Calculator.prototype.divide = function(num1, num2) {
    if (Number.isNaN(num1) === true || Number.isNaN(num2) === true) {
        prompt('Podano wartości niebędące liczbami');
    }
    else {
        const result = num1 / num2;
        this.history.push(num1+' / '+num2+' = '+result);
    }
}

Calculator.prototype.power = function(num1, num2) {
    if (Number.isNaN(num1) === true || Number.isNaN(num2) === true) {
        prompt('Podano wartości niebędące liczbami');
    }
    else {
        let result = 1;
        for (i=0;i<num2;i++) {
            result *= num1;
        }
        this.history.push(num1+' ^ '+num2+' = '+result);
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
        number1 = parseFloat(prompt('Podaj liczbę nr 1'));
        number2 = parseFloat(prompt('Podaj liczbę nr 2'));

        if(action === '+') {
            calc.add(number1, number2);
        }

        if(action === '-') {
            calc.subtract(number1, number2);
        }

        if(action === '*') {
            calc.multiply(number1, number2);
        }

        if(action === '/') {
            calc.divide(number1, number2);
        }

        if(action === '^') {
            calc.power(number1, number2);
        }
    }
    
} while(calc.isCorrectAction(action));