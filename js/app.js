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

Calculator.prototype.validateNumbers = function(num1, num2) {
    const number1 = Number(num1);
    const number2 = Number(num2);
    if (!isNaN(number1) && !isNaN(number2)) {
        return [number1, number2];
    }
    
};

Calculator.prototype.performOperation = function(num1, num2, action) {
    const numbers = this.validateNumbers(num1, num2);
    if (!numbers) return;
    const [number1, number2] = numbers;

    let result;
    switch (action) {
        case '+':
            result = number1 + number2;
            console.log(result);
            break;
        case '-':
            result = number1 - number2;
            console.log(result);
            break;
        case '*':
            result = number1 * number2;
            console.log(result);
            break;
        case '/':
            if (number2 === 0) {
                alert('Nie można dzielić przez zero!');
                return;
            }
            result = number1 / number2;
            console.log(result);
            break;
        case '^':
            result = Math.pow(number1, number2);
            console.log(result);
            break;
        default:
            alert('Nieznana operacja!');
            return;
           
    }
    this.history.push(number1 + " " + action + " " + number2 + " = " + result);
    alert("Wynik: " + result); 
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    if (action === null) {
        break;
    }
   
    if(calc.isCorrectAction(action)) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');
        calc.performOperation(number1, number2, action);
    }
} while(true);