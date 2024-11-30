function Calculator() {
    this.actions = {
        '+': this.add,
        '-': this.subtract,
        '*': this.multiply,
        '/': this.divide,
        '^': this.exponential
    };
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.hasOwnProperty(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.add = function(a, b) {
    return a + b
}

Calculator.prototype.subtract = function(a, b) {
    return a - b    
}

Calculator.prototype.multiply = function(a, b) {
    return a * b
}

Calculator.prototype.divide = function(a, b) {
    if(b !== 0) {
        return a / b;
    } else {
        return 'Nie można dzielić przez zero'
    }
}

Calculator.prototype.exponential = function(a, b) {
    if(b === 0) {
        return 1;            
    } else {
        i = 1;
        result = 1;
        while(i<=Math.abs(b)) {
            result *= a;
            i++;
        }                    
        if(b < 0) {
            result = 1/result; 
        }  
        
        return result
    }     
}

Calculator.prototype.getResult = function(num1, num2, action) {
    // 1. zamień wartości przekazane przez parametr na typ number
    num1 = Number(num1);
    num2 = Number(num2);
    operation = this.actions[action]
    // 2. sprawdź czy są one poprawne
    if(!isNaN(num1) && !isNaN(num2)) {
        // 3. jeśli tak to wykonaj działanie i zapisz jego rezultat
        const result = operation(num1, num2)
        // 4. dodaj do historii operacji to działanie w formie: 1 + 1 = 2    
        this.history.push(`${num1} ${action} ${num2} = ${result}`)
    } else {
    alert('Podałeś błędne dane. Próbuj jeszcze raz!');
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

        calc.getResult(number1, number2, action);        
    } else {
        alert('Podałeś błędne dane. Odśwież stronę i próbuj ponownie!');
    }
    
} while(calc.isCorrectAction(action));