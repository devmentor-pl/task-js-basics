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
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    let result;

    result = num1 + num2;
    this.history.push(num1 + " + " + num2 + " = " + result);
}

Calculator.prototype.sub = function(num1, num2) {
    let result;

    result = num1 - num2;
    this.history.push(num1 + " - " + num2 + " = " + result);
}

Calculator.prototype.multi = function(num1, num2) {
    let result;

        result = num1 * num2;
        this.history.push(num1 + " * " + num2 + " = " + result);
}

Calculator.prototype.div = function(num1, num2) {
    let result;

    if(num2 !== 0) {
        result = num1 / num2;
        this.history.push(num1 + " / " + num2 + " = " + result);
    }
}

Calculator.prototype.pow = function(num1, num2) {
    let result = 1;

    if(num2 >= 0) {
        for (let i=1; i<=Math.trunc(num2); i++){
            result *= num1;
        }
        
        this.history.push(num1 + " ^ " + Math.trunc(num2) + " = " + result);
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
        number1 = Number(number1);
        number2 = Number(number2);

        if(!Number.isNaN(number1) && !Number.isNaN(number2)) {
            if(action === '+') {
                calc.add(number1, number2);
            }
            if(action === '-') {
                calc.sub(number1, number2);
            }
            if(action === '*') {
                calc.multi(number1, number2);
            }
            if(action === '/') {
                calc.div(number1, number2);
            }
            if(action === '^') {
                calc.pow(number1, number2);
            }
        }
    }
    
} while(calc.isCorrectAction(action));