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

Calculator.prototype.mathOperation = function(action, num1, num2) {
    const num1AsNumber = Number(num1);
    const num2AsNumber = Number(num2);
    let result = 1;

    if(!Number.isNaN(num1AsNumber) && !Number.isNaN(num2AsNumber)) {
        switch(action) {
            case '+':
                result = num1AsNumber + num2AsNumber;
                this.history.push(num1 + " + " + num2 + " = " + result);
                break;       
            case '-':
                result = num1AsNumber - num2AsNumber;
                this.history.push(num1 + " - " + num2 + " = " + result);
                break;    
            case '*':
                result = num1AsNumber * num2AsNumber;
                this.history.push(num1 + " * " + num2 + " = " + result);
            break;     
            case '/':
                if(num2AsNumber !==0) {
                    result = num1AsNumber / num2AsNumber;
                    this.history.push(num1 + " / " + num2 + " = " + result);
                }
            break;  
            case '^':
                if(num2AsNumber >= 0) {
                    for (let i=1; i<=Math.trunc(num2AsNumber); i++){
                        result *= num1AsNumber;
                    }
                    this.history.push(num1 + " ^ " + Math.trunc(num2AsNumber) + " = " + result);
                }
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

        calc.mathOperation (action, number1, number2);
}
    
} while(calc.isCorrectAction(action));