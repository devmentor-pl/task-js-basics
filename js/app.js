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

Calculator.prototype.add = function (num1, num2) {
    let result = 0;
    let resultString;
    // 1. zamień wartości przekazane przez parametr na typ number
    const floatNum1 = parseFloat(num1);
    const floatNum2 = parseFloat(num2);


    // 2. sprawdź czy są one poprawne
    if ((!isNaN(floatNum1) && !isNaN(floatNum2))) {
        // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
        result = floatNum1 + floatNum2;
        resultString = floatNum1 + " + " + floatNum2 + " = " + result;

        // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
        this.history.push(resultString)
        return result;

    } else {
        const error = 'Wprowadzone dane nie są liczbami';
        return error;
    }
}

Calculator.prototype.subtract = function (num1, num2) {
    let result = 0;
    let resultString;
    // 1. zamień wartości przekazane przez parametr na typ number
    const floatNum1 = parseFloat(num1);
    const floatNum2 = parseFloat(num2);


    // 2. sprawdź czy są one poprawne
    if ((!isNaN(floatNum1) && !isNaN(floatNum2))) {
        // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
        result = floatNum1 - floatNum2;
        resultString = floatNum1 + " - " + floatNum2 + " = " + result;

        // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
        this.history.push(resultString)
        return result;

    } else {
        const error = 'Wprowadzone dane nie są liczbami';
        return error;
    }
}

Calculator.prototype.multiply = function (num1, num2) {
    let result = 0;
    let resultString;
    // 1. zamień wartości przekazane przez parametr na typ number
    const floatNum1 = parseFloat(num1);
    const floatNum2 = parseFloat(num2);


    // 2. sprawdź czy są one poprawne
    if ((!isNaN(floatNum1) && !isNaN(floatNum2))) {
        // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
        result = floatNum1 * floatNum2;
        resultString = floatNum1 + " x " + floatNum2 + " = " + result;

        // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
        this.history.push(resultString)
        return result;

    } else {
        const error = 'Wprowadzone dane nie są liczbami';
        return error;
    }
}

Calculator.prototype.divide = function (num1, num2) {
    let result = 0;
    let resultString;
    // 1. zamień wartości przekazane przez parametr na typ number
    const floatNum1 = parseFloat(num1);
    const floatNum2 = parseFloat(num2);


    // 2. sprawdź czy są one poprawne
    if ((!isNaN(floatNum1) && !isNaN(floatNum2) && floatNum2 !== 0)) {
        // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
        result = floatNum1 / floatNum2;
        resultString = floatNum1 + " / " + floatNum2 + " = " + result;

        // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
        this.history.push(resultString)
        return result;

    } else {
        const error = 'Wprowadzone dane nie są poprawnymi liczbami';
        return error;
    }
}

Calculator.prototype.power = function (num1, num2) {
    let result = 1;
    let j = 1;
    let resultString;
    let resultArray = [];
    // 1. zamień wartości przekazane przez parametr na typ number
    const floatNum1 = parseFloat(num1);
    const floatNum2 = parseFloat(num2);


    // 2. sprawdź czy są one poprawne
    if ((!isNaN(floatNum1) && !isNaN(floatNum2)) && floatNum2 > 0) {
        // 3. jeśli tak to wykonaj działanie i zapisz jego resultat

        while (j <= floatNum2) {
            result *= floatNum1;
            resultArray.push(floatNum1);
            j++;
        }

        // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
        resultString = resultArray.join(' * ') + ' = ' + result;
        this.history.push(resultString)
        return result;

    } else {
        const error = 'Wprowadzone dane nie są poprawnymi liczbami';
        return error;
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
    if (isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if (action === '+') {
            const addResult = calc.add(number1, number2);
            alert('Wynik: ' + addResult);
        }
        if (action === '-') {
            const subResult = calc.subtract(number1, number2);
            alert('Wynik: ' + subResult);
        }
        if (action === '*') {
            const multiResult = calc.multiply(number1, number2);
            alert('Wynik: ' + multiResult);
        }
        if (action === '/') {
            const divResult = calc.divide(number1, number2);
            alert('Wynik: ' + divResult);
        }
        if (action === '^') {
            const powResult = calc.power(number1, number2);
            alert('Wynik: ' + powResult);
        }
    }

} while (calc.isCorrectAction(action));