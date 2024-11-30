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

Calculator.prototype.isNumber = function (number) {
    if(typeof number === "number" && !isNaN(number)) {
        return true;
    } else {
        return alert("Podano nieprawidłowe wartości");
    }
}

Calculator.prototype.addToHistory = function (num1, num2, sign, result) {
    this.history.push(num1 + sign + num2 + " = " + result);
}

Calculator.prototype.add = function(num1, num2) {

    if(this.isNumber(num1) && this.isNumber(num2)) {

        const result = num1 + num2;
        this.addToHistory(num1, num2, " + ", result);
        
        return result;
    
    }
}

Calculator.prototype.subtraction = function(num1, num2) {

    if(this.isNumber(num1) && this.isNumber(num2)) {

        const result = num1 - num2;
        this.addToHistory(num1, num2, " - ", result);
        
        return result;

    }
}

Calculator.prototype.multiplication = function(num1, num2) {

    if(this.isNumber(num1) && this.isNumber(num2)) {

        const result = num1 * num2;
        this.addToHistory(num1, num2, " * ", result);
        
        return result;
    
    }
}

Calculator.prototype.divide = function(num1, num2) {

    if(this.isNumber(num1) && this.isNumber(num2) && num2 !== 0) {

        const result = num1 / num2;
        this.addToHistory(num1, num2, " / ", result);
        
        return result;
    
    }
}

Calculator.prototype.exponentiation = function(num1, num2) {

    if(this.isNumber(num1) && this.isNumber(num2)) {
        
        const result = Math.pow(num1, num2)
        this.addToHistory(num1, num2, " ^ ", result);

        return result;
    
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
        number1 = parseFloat(prompt('Podaj liczbę nr 1'));
        number2 = parseFloat(prompt('Podaj liczbę nr 2'));

        if(action === '+') {
            calc.add(number1, number2);
        } else if(action === "-") {
            calc.subtraction(number1, number2)
        } else if(action === "*") {
            calc.multiplication(number1, number2)
        } else if(action === "/") {
            calc.divide(number1, number2);
        } else if(action === "^") {
            calc.exponentiation(number1, number2)
        }
    }
    
} while(calc.isCorrectAction(action));

