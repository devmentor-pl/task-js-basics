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

Calculator.prototype.operation = function(num1, num2, action) {
    // 1. zamień wartości przekazane przez parametr na typ number
    num1 = Number(num1);
    num2 = Number(num2);
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego rezultat
    // 4. dodaj do historii operacji to działanie w formie: 1 + 1 = 2    
    if(!isNaN(num1) && !isNaN(num2)) {
        let result;
        switch(action) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if(num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Nie można dzielić przez zero'
                }
                break;
            case '^':
                if(num2 === 0) {
                    result = 1;            
                } else {
                    i = 1;
                    result = 1;
                    while(i<=Math.abs(num2)) {
                        result *= num1;
                        i++;
                    }                    
                    if(num2 < 0) {
                        result = 1/result; 
                    }                    
                }     
                break;  
        } 
            this.history.push(`${num1} ${action} ${num2} = ${result}`);
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

        calc.operation(number1, number2, action);        
    } else {
        alert('Podałeś błędne dane. Odśwież stronę i próbuj ponownie!');
    }
    
} while(calc.isCorrectAction(action));