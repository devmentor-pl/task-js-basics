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

    const result = Number(num1) + Number(num2)
        if(isNaN(result) === true){
            this.history.push ('Wprowadzono błędnie dane')
        }else{
            this.history.push ( (num1) + " + " + (num2) + ' = ' + (result))
        return result
        }
}
Calculator.prototype.substract = function(num1, num2) {

    const result = Number(num1) - Number(num2)
        if(isNaN(result) === true){
            this.history.push ('Wprowadzono błędnie dane')
        }else{
            this.history.push ( (num1) + " - " + (num2) + ' = ' + (result))
        return result
        }
}
Calculator.prototype.multiply = function(num1, num2) {

    const result = Number(num1) * Number(num2)
        if(isNaN(result) === true){
            this.history.push ('Wprowadzono błędnie dane')
        }else{
            this.history.push ( (num1) + " * " + (num2) + ' = ' + (result))
        return result
        }
}
Calculator.prototype.divide = function(num1, num2) {
    if(num2 === 0){
        console.log("you can't divide by 0")
    }else{
    const result = Number(num1) / Number(num2)
        if(isNaN(result) === true){
            this.history.push ('Wprowadzono błędnie dane')
        }else if(isFinite(result) === false){
            this.history.push ('Nie dzielimy przez zero!')
        }else{
            this.history.push ( (num1) + " / " + (num2) + ' = ' + (result))
        return result
        }
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
        }else if(action === '-') {
            calc.substract(number1, number2); 
        }else if(action === '*') {
            calc.multiply(number1, number2); 
        }else if(action === '/') {
            calc.divide(number1, number2); 
        }else if(action === '^') {
            calc.power(number1, number2);
        }

    }
    
} while(calc.isCorrectAction(action));