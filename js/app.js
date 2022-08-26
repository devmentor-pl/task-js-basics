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
Calculator.prototype.helper = function(op, num1, num2){
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    const operations = {
        '+': function(n1, n2){
            const result = n1 + n2;
            return result;
        },
        '-': function(n1, n2){
            const result = n1 - n2;
            return result;
        },
        '*': function(n1, n2){
            const result = n1 * n2;
            return result;
        },
        '/': function(n1, n2){
            const result = n1 / n2;
            return result.toFixed(3);
        },
        '^': function(n1, n2){
                let result;
                let exponent;
                if(n2<0){
                    exponent = -n2; 
                }else{
                    exponent = n2;
                }
                if(exponent == 0 || exponent == -0){
                    result = 1;
                }else if(exponent == 1){
                    result = n1;
                }else if(exponent > 1){
                    result = n1;
                    for(let i = 2; i <= exponent ; i++){
                        result *= n1;
                    }
                }
                if(n2<0){
                    result = 1/result;
                }
                return result
        },
        
    }
    if(typeof n1 && typeof n2 === 'number'){
        calc.history.push(n1 + ' ' + op + ' ' + n2 + ' = ' + operations[op](n1, n2));
    }
}
Calculator.prototype.add = function(num1, num2) {
    Calculator.prototype.helper('+', num1, num2);
}
Calculator.prototype.sub = function(num1, num2){
    Calculator.prototype.helper('-', num1, num2);
}
Calculator.prototype.multi = function(num1, num2){
    Calculator.prototype.helper('*', num1, num2);
    }
Calculator.prototype.div = function(num1, num2){
    Calculator.prototype.helper('/', num1, num2);
        
    }
Calculator.prototype.pow = function(num1, num2){
    Calculator.prototype.helper('^', num1, num2);
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
        }else if(action === '-'){
            calc.sub(number1, number2);
        }else if(action === '*'){
            calc.multi(number1, number2);
        }else if(action === '/'){
            calc.div(number1, number2);
        }else{
            calc.pow(number1, number2);
        }

    }
    
} while(calc.isCorrectAction(action));