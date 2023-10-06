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

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (!isNaN(num1) && !isNaN(num2)) {

        const additionResult = num1 + num2;
        this.history.push(`${num1} + ${num2} = ${additionResult}`);

        const message = `${additionResult}`;
        prompt("Wynik dodawania:", message);

        return additionResult;

    } else {

        prompt("Błąd: Podane wartości nie są liczbami.");
        return null;
    
    }
};

Calculator.prototype.sub = function(num1, num2) {

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (!isNaN(num1) && !isNaN(num2)) {

        const subtractionResult = num1 - num2;
        this.history.push(`${num1} - ${num2} = ${subtractionResult}`);

        const message = `${subtractionResult}`;
        prompt("Wynik odejmowania:", message);

        return subtractionResult;

    } else {

        prompt("Błąd: Podane wartości nie są liczbami.");
        return null;
    }
};


Calculator.prototype.mul = function(num1, num2) {

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (!isNaN(num1) && !isNaN(num2)) {

        const multiplicationResult = num1 * num2;
        this.history.push(`${num1} * ${num2} = ${multiplicationResult}`);

        const message = `${multiplicationResult}`;
        prompt("Wynik mnożenia:", message);

        return multiplicationResult;

    } else {

        prompt("Błąd: Podane wartości nie są liczbami.");
        return null;
    }
};

Calculator.prototype.div = function(num1, num2) {

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (!isNaN(num1) && !isNaN(num2)) {

        const divisionResult = num1 / num2;
        this.history.push(`${num1} / ${num2} = ${divisionResult}`);

        const message = `${divisionResult}`;
        prompt("Wynik dzielenia:", message);

        return divisionResult;

    } else {

        prompt("Błąd: Podane wartości nie są liczbami.");
        return null;
    }
};

Calculator.prototype.exp = function(num1, num2) {

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (!isNaN(num1) && !isNaN(num2)) {

        let result = 1;
        for (let i = 1; i <= num2; i++) {
            result *= num1;
        }
        const exponationResult = result;
        this.history.push(`${num1} ** ${num2} = ${exponationResult}`);

        const message = `${exponationResult}`;
        prompt("Wynik potęgowania:", message);

        return exponationResult;

    } else {

        prompt("Błąd: Podane wartości nie są liczbami.");
        return null;
    }
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
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if(action === '+') {
            calc.add(number1, number2);
        } else if (action === '-') {
            calc.sub(number1, number2);
        } else if (action === '*') {
            calc.mul(number1, number2);
        } else if (action === '/') {
            calc.div(number1, number2);
        } else if (action === '^') {
            calc.exp(number1, number2);
        }





    }
    
} while(calc.isCorrectAction(action));