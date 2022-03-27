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

Calculator.prototype.operation = function(num1, num2, action) {
    num1 = Number(num1)
    num2 = Number(num2)
    if (!isNaN(num1) && !isNaN(num2)) {
        let result
        switch (action) {
            case '+': 
                result = num1 + num2
                break
            case '-': 
                result = num1 - num2
                break
            case '*': 
                result = num1 * num2
                break
            case '/': 
                result = num1 / num2
                break
            case '^': 
                result = 1
                let index = 1
                let stringResult = ''
                while (index <= num2) {
                    result *= num1
                    stringResult += num1 + ' '
                    if (index < num2) stringResult += '* '
                    if (index === num2) stringResult += '= ' + result
                    index++
                }
                this.history.push(stringResult)
            break
        }
        if (action !== '^') this.history.push(`${num1} ${action} ${num2} = ${result}`)
    }
    else alert('Wprowadzono błędne dane!')
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
        calc.operation(number1, number2, action)
    }
    
} while(calc.isCorrectAction(action));