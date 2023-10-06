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
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (!isNaN(num1) && !isNaN(num2)) {
        const additionResult = num1 + num2;
        this.history.push(`${num1} + ${num2} = ${additionResult}`)
        const message = `${additionResult}`;
        prompt("Wynik dodawania:", message);
        return additionResult;
    } else {
        prompt("Błąd: Podane wartości nie są liczbami.");
        return null;
    }
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





    }
    
} while(calc.isCorrectAction(action));