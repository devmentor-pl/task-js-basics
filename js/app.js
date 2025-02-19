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
    const result = number1 + number2;
    this.history.push(number1 + ' + ' + number2 + ' = ' + result);
}
Calculator.prototype.subtract = function(num1, num2) {
    const result = number1 - number2;
    this.history.push(number1 + ' - ' + number2 + ' = ' + result);
}
Calculator.prototype.multiply = function(num1, num2) {
    const result = number1 * number2;
    this.history.push(number1 + ' * ' + number2 + ' = ' + result);
}
Calculator.prototype.divide = function(num1, num2) {
    if(number2 === 0) {
        return 'Nie można dzielić przez 0';
    }
    const result = number1 / number2;
    this.history.push(number1 + ' / ' + number2 + ' = ' + result);
}
Calculator.prototype.pow = function(num1, num2) {
    let result = 1;
    for(let i = 0; i < number2; i++) {
        result *= number1;
    }
    this.history.push(number1 + ' ^ ' + number2 + ' = ' + result);

    return result;
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

        const num1 = Number(number1);
        const num2 = Number(number2);

        if(isNaN(num1) || isNaN(num2)) {
            alert('Podane wartości nie są liczbami');
            continue;
        }

        if(action === '+') {
            calc.add(number1, number2);
        } else if(action === '-') {
            calc.subtract(number1, number2);
        } else if(action === '*') {
            calc.multiply(number1, number2);
        } else if(action === '/') {
            calc.divide(number1, number2);
        } else if(action === '^') {
            calc.pow(number1, number2);
        }  
            
    } else if(action !== null) {
        alert('Nieprawidłowy operator - dozwolone operatory to: +, -, *, /, ^');
        const isConfirmed = confirm('Czy chcesz spróbować jeszcze raz?');
        if(!isConfirmed) {
            break;
        }
    } 
} while(calc.isCorrectAction(action));