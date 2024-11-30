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
    let result = 0;
    result = num1 + num2;
    this.history.push (`${num1} + ${num2} = ${result}`);
};



Calculator.prototype.sub = function(num1 ,num2) {
    let result = 0;
    result = num1 - num2;
    this.history.push (`${num1} - ${num2} = ${result}`);
};


Calculator.prototype.multi = function(num1 ,num2) {
    let result = 0;
    result = num1 * num2;
    this.history.push (`${num1} * ${num2} = ${result}`);
};


Calculator.prototype.div = function(num1 ,num2) {
    let result = 0;
    result = num1 / num2;
    this.history.push (`${num1} / ${num2} = ${result}`);
};


Calculator.prototype.expo = function(num1 ,num2) {
    let result = 0;
    result = num1 ^ num2;
    this.history.push (`${num1} * ${num2} = ${result}`);
};



const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = parseInt(prompt('Podaj liczbę nr 1'));
        number2 = parseInt(prompt('Podaj liczbę nr 2'));
        /*const intNum1 = parseInt (num1);
        const intNum2 = parseInt (num2);*/
    
        
    if (!Number.isNaN(number1) && !Number.isNaN(number2)){

        if(action === '+') {
                calc.add(number1, number2);
        }

        if(action ==='-' ) {
                calc.sub(number1 , number2);
        }

        if(action ==='*' ) {
                calc.multi(number1 , number2);
        }

        if(action ==='/' ) {
                calc.div(number1 , number2);
        }

        if(action ==='^' ) {
                calc.expo(number1 , number2);
        }
    }
}

} while(calc.isCorrectAction(action));