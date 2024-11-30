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

Calculator.prototype.areNumbers = function(num1,num2) {
    return [parseFloat(num1), parseFloat(num2)];
}

Calculator.prototype.isCorrect = function(arr) {
    return !(arr.some(item => isNaN(item)));
}

Calculator.prototype.notCorrect = function(arr) {
    return (arr.some(item => isNaN(item)));
}

Calculator.prototype.exponentiation = function(num1, num2) {
    let i = 0;
    let result = 1;
    let number1 = parseFloat(num1)
    let number2 = parseFloat(num2)
    while( i < number2){
        result*= number1
        i++
    }
    return result;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function modulo(num1, num2) {
    return num1 % num2;
}

Calculator.prototype.getResult = function(num1, num2, action) {
    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2)
    const result = operations[action](number1, number2);
    return result;
}

Calculator.prototype.calculate = function(num1, num2, action) {
    // 1. zamień wartości przekazane przez parametr na typ number
    const arr = this.areNumbers(num1, num2);
    // 2. sprawdź czy są one poprawne
    const isCorrect = this.isCorrect(arr);
    // 3. jeśli tak to wykonaj działanie i zapisz jego rezultat+

    if(isCorrect) {
        const result = this.getResult(num1, num2);
        this.history.push(num1 + action + num2 +'='+ result);
    }
    else {
        console.error('Błędne dane: ' + num1 + ' lub ' + num2 + ' nie jest liczbą')
        this.history.push('Błędne dane');
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
        {
            calc.calculate(number1, number2, action);
        }
    }
    else 
        {
            console.error('To nie jest działanie matematyczne :)');
    }

} while(calc.isCorrectAction(action));