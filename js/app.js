function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
}

Calculator.prototype._calculate = function(num1, num2, operator, operation) {
    const a = Number(num1);
    const b = Number(num2);

    if (isNaN(a) || isNaN(b)) { // spawdza czy wartości to liczby 
        console.error("Wpisz liczby!");
        return null;
    }

    if (operator === '/' && b === 0) { // b nie moze byc === 0
        console.error("Pamiętaj cholero nie dziel przez ZERO!");
        return null;
    }

    const result = operation(a, b);
    const expression = `${a} ${operator} ${b} = ${result}`;
    this.history.push(expression);

    return result;
};



Calculator.prototype.add = function(num1, num2){
    return this._calculate(num1, num2, '+', (a, b) => a + b); // cztery argumenty funkcji 2x liczba, symbol kalkulatora, funkcja arrow function
};

Calculator.prototype.subtraction = function(num1, num2){
    return this._calculate(num1, num2, '-', (a, b) => a - b);
};

Calculator.prototype.multiplication = function(num1, num2){
    return this._calculate(num1, num2, '*', (a, b) => a * b);
};

Calculator.prototype.division = function(num1, num2){
   if (Number(num2) === 0) {
        console.error("Pamiętaj cholero nie dziel przez ZERO!");
        return null;
    }
    return this._calculate(num1, num2, '/', (a, b) => a / b);
};

Calculator.prototype.power = function(num1, num2){
    return this._calculate(num1, num2, '^', (a, b) => a ** b); 
    
};

/*

// Dodawanie 


Calculator.prototype.add = function (num1, num2) {

    // 1. zamień wartości przekazane przez parametr na typ number

    const a = Number(num1);
    const b = Number(num2);

    // 2. sprawdź czy są one poprawne

    if (isNaN(a) || isNaN(b)) {
        console.error("Wartości muszą być liczbami!");
        return null;
    }

    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat

    const result = a + b;

    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

    const operation = `${a} + ${b} = ${result}`;
    this.history.push(operation);
    return result;
};


// Odejmowanie - subtraction

Calculator.prototype.subtraction = function (num1, num2) {

    // 1. zamień wartości przekazane przez parametr na typ number

    const a = Number(num1);
    const b = Number(num2);

    // 2. sprawdź czy są one poprawne

    if (isNaN(a) || isNaN(b)) {
        console.error("Wartości muszą być liczbami!");
        return null;
    }

    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat

    const result = a - b;

    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

    const operation = `${a} - ${b} = ${result}`;
    this.history.push(operation);
    return result;
};

// Mnożenie - multiplication

Calculator.prototype.multiplication = function (num1, num2) {

    // 1. zamień wartości przekazane przez parametr na typ number

    const a = Number(num1);
    const b = Number(num2);

    // 2. sprawdź czy są one poprawne

    if (isNaN(a) || isNaN(b)) {
        console.error("Wartości muszą być liczbami!");
        return null;
    }

    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat

    const result = a * b;

    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

    const operation = `${a} * ${b} = ${result}`;
    this.history.push(operation);
    return result;
};

// Dzielenie - division

Calculator.prototype.division = function (num1, num2) {

    // 1. zamień wartości przekazane przez parametr na typ number

    const a = Number(num1);
    const b = Number(num2);

    // 2. sprawdź czy są one poprawne

    if (isNaN(a) || isNaN(b)) {
        console.error("Wartości muszą być liczbami!");
        return null;
    }

    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat

    const result = a / b;

    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

    const operation = `${a} / ${b} = ${result}`;
    this.history.push(operation);
    return result;
};


// Potęga - power

Calculator.prototype.power = function (num1, num2) {

    // 1. zamień wartości przekazane przez parametr na typ number

    const a = Number(num1);
    const b = Number(num2);

    // 2. sprawdź czy są one poprawne

    if (isNaN(a) || isNaN(b)) {
        console.error("Wartości muszą być liczbami!");
        return null;
    }

    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat

    const result = a ** b;

    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

    const operation = `${a} ^ ${b} = ${result}`;
    this.history.push(operation);
    return result;
};


Calculator.prototype._calculate = function(num1, num2, operator, operation) {
    
    const a = Number(num1);
    const b = Number(num2);

    if (isNaN(a) || isNaN(b)) {
        console.error("Błędne dane: oba argumenty muszą być liczbami.");
        return null;
    }

    const result = operation(a, b);
    const expression = `${a} ${operator} ${b} = ${result}`;
    this.history.push(expression);

    return result;
};

*/

const calc = new Calculator();

let action, promptContent, isCorrectAction, number1, number2;
do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
     if (action === null) break; 
    isCorrectAction = calc.isCorrectAction(action);
    if (isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if (action === '+') {
        result = calc.add(number1, number2);
        } else if (action === '-') {
            result = calc.subtraction(number1, number2);
        } else if (action === '*') {
            result = calc.multiplication(number1, number2);
        } else if (action === '/') {
            result = calc.division(number1, number2);
        } else if (action === '^') {
            result = calc.power(number1, number2);
        } else {
            console.error("Nieznana operacja:", action);
        }
    }

} while (calc.isCorrectAction(action));