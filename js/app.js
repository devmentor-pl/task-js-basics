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
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2


//dodawanie (+)
Calculator.prototype.add = function(num1, num2) {
    const userNum1 = parseInt(num1);
    const userNum2 = parseInt(num2);
    const sum = userNum1 + userNum2;
    this.history.push(userNum1 + ' + ' + userNum2 + ' = ' + sum);
} 

//odejmownaie (-)
Calculator.prototype.sub = function(num1, num2) {
    const userNum1 = parseInt(num1);
    const userNum2 = parseInt(num2);
    const diff = userNum1 - userNum2;
    this.history.push(userNum1 + ' - ' + userNum2 + ' = ' + diff);
} 

//mnożenie (*)
Calculator.prototype.mult = function(num1, num2) {
    const userNum1 = parseInt(num1);
    const userNum2 = parseInt(num2);
    const multi = userNum1 * userNum2;
    this.history.push(userNum1 + ' * ' + userNum2 + ' = ' + multi);
} 

//dzielenie (/)
Calculator.prototype.div = function(num1, num2) {
    const userNum1 = parseInt(num1);
    const userNum2 = parseInt(num2);
    if(userNum2 === 0) {
        alert('Nie można dzielić przez 0 :)');
     } 
        const quot = userNum1 / userNum2;
        this.history.push(userNum1 + ' / ' + userNum2 + ' = ' + quot);
}

//potęgowanie (^)
Calculator.prototype.pow = function(num1, num2) {
    const userNum1 = parseInt(num1);
    const userNum2 = parseInt(num2);
    const power = userNum1 ** userNum2;     
    this.history.push(userNum1 + '^' + userNum2 + ' = ' + power);
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

        if(isNaN(number1) || isNaN(number2)) {
            alert('Nie wpisano liczby');
        }
            switch (action) {
                case '+':
                    calc.add(number1, number2);
                    break
                case '-':
                    calc.sub(number1, number2);
                    break    
                case '*':
                    calc.mult(number1, number2);
                    break
                case '/':
                    calc.div(number1, number2);
                    break
                case '^':
                    calc.pow(number1, number2);
                    break
            }
    }
    
} while(calc.isCorrectAction(action));

console.log(calc.history)