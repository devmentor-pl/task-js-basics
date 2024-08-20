function Calculator() {
    this.actions = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => {
            if (b === 0) {
                alert('Nie można dzielić przez 0. Spróbuj ponownie.');
                return null;
            }
            return a / b;
        },
        '^': (a, b) => Math.pow(a, b)
    };
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return action in this.actions;
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.performOperation = function(action, num1, num2) {
    // Zamień wartości przekazane przez parametr na typ number i sprawdź czy są poprawne
    num1 = Number(num1);
    num2 = Number(num2);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert('Podane wartości są niepoprawne');
        return;
    }

    // Wykonaj operację
    const result = this.actions[action](num1, num2);

    // Sprawdź, czy operacja była poprawna (np. dzielenie przez 0)
    if (result !== null && result !== undefined) {
        // Dodaj do historii operacji
        this.history.push(`${num1} ${action} ${num2} = ${result}`);
    }
}

const calc = new Calculator();
let action, promptContent, number1, number2;

do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; 
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);

    if (calc.isCorrectAction(action)) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');
        
        calc.performOperation(action, number1, number2);
    }

} while(calc.isCorrectAction(action));