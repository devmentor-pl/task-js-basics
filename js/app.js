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
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    let result = 0; 
    result = num1 + num2;
    this.history.push (Number(num1) + Number(num2));
};

Calculator.prototype.sub = function(num1, num2) {
    let result = 0; 
    result = num1 - num2;
    this.history.push (Number(num1) - Number(num2))
};

Calculator.prototype.multiple = function(num1, num2) {
    let result = 0; 
    result = num1 * num2;
    this.history.push (Number(num1) * Number(num2));
};

Calculator.prototype.division = function(num1, num2) {
    let result = 0; 
    result = num1 / num2;
    this.history.push (Number(num1) / Number(num2))
};

Calculator.prototype.avg = function(num1, num2) {
    let result = 0; 
    result = num1 ** num2;
    this.history.push (Number(num1) ** Number(num2))
};

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
            calc.sub(number1, number2);
        }
        if(action === '*') {
            calc.multiple(number1, number2);
        }
        if(action === '/') {
            calc.division(number1, number2);
        }
        if(action === '^') {
            calc.avg(number1, number2);
        }
    }
    
} while(calc.isCorrectAction(action));