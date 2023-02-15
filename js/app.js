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
    num1 = Number(number1);
    num2 = Number(number2);
    // 2. sprawdź czy są one poprawne
    if(typeof num1 === 'number' && typeof num2 === 'number') {
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
        let result = num1 + num2;
        // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
        this.history.push(`${num1} + ${num2} = ${result}`);
    }
}

Calculator.prototype.subtract = function(num1, num2) {
    num1 = Number(number1);
    num2 = Number(number2);
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        let result = num1 - num2;
        this.history.push(`${num1} - ${num2} = ${result}`);
    }
}

Calculator.prototype.multiply = function(num1, num2) {
    num1 = Number(number1);
    num2 = Number(number2);
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        let result = num1 * num2;
        this.history.push(`${num1} * ${num2} = ${result}`);
    }
}

Calculator.prototype.divide = function(num1, num2) {
    num1 = Number(number1);
    num2 = Number(number2);
    if(num2 === 0) {
        alert('Nie dzielimy przez 0.');
    }
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        let result = num1 / num2;
        this.history.push(`${num1} / ${num2} = ${result}`);
    }
}

Calculator.prototype.power = function(num1, num2) {
    num1 = Number(number1);
    num2 = Number(number2);
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        let result = 1;
        for (let i = 0; i < num2; i++) {
            result *= num1;            
        }
        this.history.push(`${num1} ** ${num2} = ${result}`);
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