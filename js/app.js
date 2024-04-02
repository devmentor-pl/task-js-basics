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
    num1 = Number(num1);
    num2 = Number(num2);
    // 2. sprawdź czy są one poprawne
    if(!isNaN(num1) && !isNaN(num2)) {
        // 3. jeśli tak to wykonaj działanie i zapisz jego rezultat
        const result = num1 + num2;
        // 4. dodaj do historii operacji to działanie w formie: 1 + 1 = 2
        this.history.push(`${num1} + ${num2} = ${result}`)
    } else { 
        this.history.push('Niepoprawne dane!')
    } 
}

Calculator.prototype.subtract = function(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if(!isNaN(num1) && !isNaN(num2)) {
        const result = num1 - num2;
        this.history.push(`${num1} - ${num2} = ${result}`)
    } else { 
        this.history.push('Niepoprawne dane!')
    } 
}

Calculator.prototype.multiply = function(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if(!isNaN(num1) && !isNaN(num2)) {
        const result = num1 * num2;
        this.history.push(`${num1} * ${num2} = ${result}`)
    } else { 
        this.history.push('Niepoprawne dane!')
    } 
}

Calculator.prototype.divide = function(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if(!isNaN(num1) && !isNaN(num2) && num2 !== 0) { // nie można dzielić przez 0
        const result = num1 / num2;
        this.history.push(`${num1} / ${num2} = ${result}`)
    } else { 
        this.history.push('Niepoprawne dane! Upewnij się, że nie dzielisz przez 0!')
    } 
}

Calculator.prototype.power = function(num, exponent) {
    num = Number(num);
    exponent = Number(exponent);
    if(!isNaN(num) && !isNaN(exponent)) { 
        let result;
        if(exponent === 0) {
            result = 0; // każda liczba podniesiona do 0 wynosi 1
        } else {
            result = 1;
            for(i = 0; i < exponent; i++) { 
                result *= num
            }
        }
        this.history.push(`${num} ^ ${exponent} = ${result}`)
    } else { 
        this.history.push('Niepoprawne dane!')
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
        } else if(action === '-') {
            calc.subtract(number1, number2);
        } else if(action === '*') {
            calc.multiply(number1, number2);
        } else if(action === '/') {
            calc.divide(number1, number2);
        } else if(action === '^') {
            calc.power(number1, number2);
        } else {
            console.log('Niepoprawna operacja!');
        }
    }
    
} while(calc.isCorrectAction(action));