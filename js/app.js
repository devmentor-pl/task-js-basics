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
    const num1Par = parseInt(num1); //parseFloat() jest używane do konwersji na liczby zmiennoprzecinkowe. 
    const num2Par = parseInt(num2); //parseInt() jest używane do konwersji na liczby całkowite. 

    let result;

    result = num1Par + num2Par;
    this.history.push(num1Par + " + " + num2Par + " = " + result);
    return result;

    

};

Calculator.prototype.substract = function(num1, num2) {

    let result;

    result = num1 - num2;
    this.history.push(num1 + " - " + num2 + " = " + result);
    return result;

};

Calculator.prototype.multiply = function(num1, num2) {

}

Calculator.prototype.divide = function(num1, num2) {

}

Calculator.prototype.power = function(base, exponent) {
    base = parseFloat(base);
    exponent = parseInt(exponent);

    if(!isNaN(base) && !isNaN(exponent)) {
        let result = 1;

        for (let i = 0; i < exponent; i++) {
            result *= base;
        }
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
    }
    
} while(calc.isCorrectAction(action));

    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
