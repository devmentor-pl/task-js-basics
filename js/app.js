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
    const parseNum1 = parseInt(num1);
    const parseNum2 = parseInt(num2);
    // 2. sprawdź czy są one poprawne
    if(typeof parseNum1 === 'number' && typeof parseNum2 === 'number') {
        let sum = 0;
        // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
        sum = parseNum1 + parseNum2;
        // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
        this.history.push(`${parseNum1} + ${parseNum2} = ${sum}`);
    }
}

Calculator.prototype.subtract = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    const parseNum1 = parseInt(num1);
    const parseNum2 = parseInt(num2);
    // 2. sprawdź czy są one poprawne
    if(typeof parseNum1 === 'number' && typeof parseNum2 === 'number') {
        let subtract = 0;
        // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
        subtract = parseNum1 - parseNum2;
        // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
        this.history.push(`${parseNum1} - ${parseNum2} = ${subtract}`);
    }
}

Calculator.prototype.multiply = function(num1, num2) {
    const parseNum1 = parseInt(num1);
    const parseNum2 = parseInt(num2);

    if(parseNum1 !== 0 && parseNum2 !== 0) {
        let multiply = 1;
        multiply = num1 * num2;
        console.log(multiply);
        this.history.push(`${parseNum1} * ${parseNum2} = ${multiply}`);
    }
}

Calculator.prototype.divide = function(num1, num2) {
    const parseNum1 = parseInt(num1);
    const parseNum2 = parseInt(num2);

    if(parseNum1 !== 0 && parseNum2 !== 0) {
        let divide = 0;
        divide = num1 / num2;
        this.history.push(`${parseNum1} / ${parseNum2} = ${divide}`);
    }
}

Calculator.prototype.power = function(num1, num2) {
    const parseNum1 = parseInt(num1);
    const parseNum2 = parseInt(num2);

    if(parseNum1 !== 0 && parseNum2 !== 0) {
        let power = 1;
        for(i = 1; i <= parseNum2; i++) {
            power *= parseNum1;
        }
        this.history.push(`${parseNum1} ^ ${parseNum2} = ${power}`);
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

        if(action === '+') {
            calc.add(number1, number2);
        }

        if(action === '-') {
            calc.subtract(number1, number2);
        }

        if(action === '*') {
            calc.multiply(number1, number2);
        }

        if(action === '/') {
            calc.divide(number1, number2);
        }

        if(action === '^') {
            calc.power(number1, number2);
        }
    }
    
} while(calc.isCorrectAction(action));