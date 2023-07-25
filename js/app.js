function Calculator() {
    this.actions = ['+', '-', '*', '/', '^']
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.calculate = function(number1, number2){
    switch(action) {
        case '+':
        this.history.push(number1 + ' + ' + number2 + ' = ' + (number1 + number2))
        break
        case '-':
        this.history.push(number1 + ' - ' + number2 + ' = ' + (number1 - number2))
        break
        case '*':
        this.history.push(number1 + ' x ' + number2 + ' = ' + (number1 * number2))
        break
        case '/':
        this.history.push(number1 + ' / ' + number2 + ' = ' + (number1 / number2))
        break
        case '^':
        calc.power(number1,number2)
    }
}

Calculator.prototype.power = function() {
        let result = 1;
        for (let i = 0; i < number2; i++) {
            result *= number1;            
        }
    this.history.push(number1 + ' ^ ' + number2 + ' = ' + result)
};

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;

function mainLoop() { 
    do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) { 
        number1 = Number(prompt('Podaj liczbę nr 1'));
        number2 = Number(prompt('Podaj liczbę nr 2'));
        if(Number.isNaN(number1) || Number.isNaN(number2)){
            alert('Podano niepoprawną liczbę.')
            mainLoop(calc);
        }else{
        calc.calculate(number1, number2);}}
    else if(!isCorrectAction){
        alert('Wprowadź poprawny operator: +, -, *, / lub ^.');
        mainLoop(calc);
    }
 } while(calc.isCorrectAction(action));
};

mainLoop(calc);