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

Calculator.prototype.add = function(num1, num2) {

    let a = num1;
    let b = num2;
    let result = 0;

    while(this.isNumber(num1) && this.isNumber(num2)) {

        result = a + b;
        this.history.push(a  + " + " + b + " = " + result);
        
        return result;
    
    }
}

Calculator.prototype.subtraction = function(num1, num2) {

    let a = num1;
    let b = num2;
    let result = 0;

    while(this.isNumber(num1) && this.isNumber(num2)) {

        result = a - b;
        this.history.push(a  + " - " + b + " = " + result);
        
        return result;
    
    }
}

Calculator.prototype.multiplication = function(num1, num2) {

    let a = num1;
    let b = num2;
    let result = 0;

    while(this.isNumber(num1) && this.isNumber(num2)) {

        result = a * b;
        this.history.push(a  + " * " + b + " = " + result);
        
        return result;
    
    }
}

Calculator.prototype.divide = function(num1, num2) {

    let a = num1;
    let b = num2;
    let result = 0;

    while(this.isNumber(num1) && this.isNumber(num2) && num2 !== 0) {

        result = a / b;
        this.history.push(a  + " / " + b + " = " + result);
        
        return result;
    
    }
}

Calculator.prototype.exponentiation = function(num1, num2) {

    let a = num1;
    let b = num2;
    let result = 1;

    while(this.isNumber(num1) && this.isNumber(num2) && Math.round(num2) === num2) {

        if(b <= 0) {
            result = 1;
        } else {
            for(let i = 1; i <= b; i++) {
                result *= a;
            }
        }
        
        this.history.push(a  + " ^ " + b + " = " + result);
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

