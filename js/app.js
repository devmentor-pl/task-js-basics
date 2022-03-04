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
    this.history.push(num1 + ' ' + action + ' ' + num2 + ' = ' + result);
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2, result;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = parseInt(prompt('Podaj liczbę nr 1'));
        number2 = parseInt(prompt('Podaj liczbę nr 2'));
        if(typeof number1 === 'number' && typeof number2 === 'number') {
            if(action === '+') {
                result = number1 + number2;
                calc.add(number1, number2);
            }
            if(action === '-') {
                result = number1 - number2;
                calc.add(number1, number2);
            }
            if(action === '*') {
                result = number1 * number2;
                calc.add(number1, number2);
            }
            if(action === '/') {
                result = number1 / number2;
                calc.add(number1, number2);
            }
            if(action === '^') {
                result = 1;
                for(let i=1; i<=number2; i++){
                    result = result * number1;
                }
                calc.add(number1, number2);
            }
        }
    }
    
} while(calc.isCorrectAction(action));