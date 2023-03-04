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
    number1 = Number(num1)
    number2 = Number(num2)
    // 2. sprawdź czy są one poprawne
    if(typeof number1 === 'number' && typeof number2 === 'number'){
        let result = number1 + number2
        this.history.push(number1 + ' + ' + number2 + ' = ' + result)
    }
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}

Calculator.prototype.substract = function(num1, num2) {
    number1 = Number(num1)
    number2 = Number(num2)
    if(typeof number1 === 'number' && typeof number2 === 'number'){
        let result = number1 - number2
        this.history.push(number1 + ' - ' + number2 + ' = ' + result)
    }
}

Calculator.prototype.multiply = function(num1, num2) {
    number1 = Number(num1)
    number2 = Number(num2)
    if(typeof number1 === 'number' && typeof number2 === 'number'){
        let result = number1 * number2
        this.history.push(number1 + ' x ' + number2 + ' = ' + result)
    }
}

Calculator.prototype.divide = function(num1, num2) {
    number1 = Number(num1)
    number2 = Number(num2)
    if(typeof number1 === 'number' && typeof number2 === 'number'){
        let result = number1 / number2
        this.history.push(number1 + ' / ' + number2 + ' = ' + result)
    }
}

Calculator.prototype.power = function(num1, num2) {
    number1 = Number(num1)
    number2 = Number(num2)
    if(typeof number1 === 'number' && typeof number2 === 'number'){
        let result = 1;
        for (let i = 0; i < num2; i++) {
            result *= num1;            
        }
        this.history.push(number1 + ' ^ ' + number2 + ' = ' + result)
    }}

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
        }else if(action === '-'){
            calc.substract(number1, number2);
        }else if(action === '*'){
            calc.multiply(number1, number2);
        }else if(action === '/'){
            calc.divide(number1,number2);
        }else if(action === '^'){
            calc.power(number1,number2)
        }
    }
    
} while(calc.isCorrectAction(action));

