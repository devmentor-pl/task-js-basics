function Calculator() {
    this.actions = {
        '+': this.add,
        '-': this.subtract,
        '*': this.multiply,
        '/': this.divide,
        '^': this.power,
    };
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return Object.keys(this.actions).includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.add = function() {
        this.history.push(number1 + ' + ' + number2 + ' = ' + (number1 + number2))
    }

Calculator.prototype.substract = function() {
        this.history.push(number1 + ' - ' + number2 + ' = ' + (number1 - number2))
    }

Calculator.prototype.multiply = function() {
        this.history.push(number1 + ' x ' + number2 + ' = ' + (number1 * number2))
    }

Calculator.prototype.divide = function() {
        this.history.push(number1 + ' / ' + number2 + ' = ' + (number1 / number2))
    }

Calculator.prototype.power = function() {
        let result = 1;
        for (let i = 0; i < number2; i++) {
            result *= number1;            
        }
        this.history.push(number1 + ' ^ ' + number2 + ' = ' + result)
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
        number1 = Number(prompt('Podaj liczbę nr 1'));
        number2 = Number(prompt('Podaj liczbę nr 2'));

        if (isNaN(number1)) {
            alert('Liczba 1 niepoprawna.');}
        if (isNaN(number2)){
            alert('Liczba 2 niepoprawna.');}
        else if(action === '+') {
            calc.add(number1, number2);
        }else if(action === '-'){
            calc.substract(number1, number2);
        }else if(action === '*'){
            calc.multiply(number1, number2);
        }else if(action === '/'){
            calc.divide(number1,number2);
        }else if(action === '^'){
            calc.power(number1,number2)
        }
    }
    
} while(calc.isCorrectAction(action));

