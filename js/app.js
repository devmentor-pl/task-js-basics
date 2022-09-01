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
Calculator.prototype.isCorrectNumber = function(n1, n2){
    if(typeof n1 === 'number' && typeof n2 === 'number' 
    && typeof n1 !== Number.isNaN(n1) && typeof n2 !== Number.isNaN(n2)){
        return true;
    }
}
Calculator.prototype.add = function(num1, num2) {
   return num1 + num2;
}
Calculator.prototype.sub = function(num1, num2){
    return num1 - num2;
}
Calculator.prototype.multi = function(num1, num2){
    return num1 * num2;
}
Calculator.prototype.div = function(num1, num2){
    const result = num1 / num2;
    if(Number.isSafeInteger(result)){
        return result;
    }else{
        return result.toFixed(3);
    }
}
Calculator.prototype.pow = function(num1, num2){
    let result;
    let exponent;
    if(num2 < 0){
        exponent = -num2; 
    }else{
        exponent = num2;
    }
    if(exponent == 0 || exponent == -0){
        result = 1;
    }else if(exponent == 1){
        result = num1;
    }else if(exponent > 1){
        result = num1;
        for(let i = 2; i <= exponent ; i++){
            result *= num1;
        }
    }
    if(num2<0){
        result = 1/result;
    }
    return result;
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, isCorrectNumber, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');
        const n1 = parseInt(number1);
        const n2 = parseInt(number2);
        isCorrectNumber = calc.isCorrectNumber(n1, n2);
        
        if(isCorrectNumber){
            const operations = {
                '+': calc.add,
                '-': calc.sub,
                '*': calc.multi,
                '/': calc.div,
                '^': calc.pow, 
            };
            const result = operations[action](n1, n2);
            
            calc.history.push(n1 + ' ' + action + ' ' + n2 + ' ' + '=' + ' ' + result);
        }
    }
    
} while(calc.isCorrectAction(action));