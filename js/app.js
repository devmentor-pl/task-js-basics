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
    console.log(parseInt(num1) + parseInt(num2));
    this.history.push(`${num1} + ${num2}`);
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}

Calculator.prototype.substract = function(num1, num2) {
    console.log(parseInt(num1) - parseInt(num2));
    this.history.push(`${num1} - ${num2}`);
}

Calculator.prototype.multiply = function(num1, num2) {
    console.log(parseInt(num1) * parseInt(num2));
    this.history.push(`${num1} * ${num2}`);
}

Calculator.prototype.divide = function(num1, num2) {
    console.log(parseInt(num1) / parseInt(num2));
    this.history.push(`${num1} / ${num2}`);
}

Calculator.prototype.getPow = function(num1, num2) {
    console.log(getPower(parseInt(num1), parseInt(num2)));
    this.history.push(`${num1} ^ ${num2}`);
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
            createExpression(number1, action, number2);
            calc.add(number1, number2);
        }

        if(action === '-') {
            createExpression(number1, action, number2);
            calc.substract(number1, number2);
        }

        if(action === '*') {
            createExpression(number1, action, number2);
            calc.multiply(number1, number2);
        }

        if(action === '/') {
            createExpression(number1, action, number2);
            calc.divide(number1, number2);
        }

        if(action === '^') {
            createExpression(number1, action, number2);
            calc.getPow(number1, number2);
        }
    }
    
} while(calc.isCorrectAction(action));

function createExpression(num1, action, num2) {
    var expression = num1.concat(action).concat(num2);
    console.log(expression);
}

function getPower(num1, num2) {
    var result = num1;
    for(var i = 1; i < num2; i++) {
        result = result * num1;
    }
    return result;
}