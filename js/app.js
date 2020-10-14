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
        return false;
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

        // 4. dodaj do historii operacji to działanie w fomie: 1 - 1 = 0
        this.history.push(resultString)
        return result;

    } else {
        return false
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

        // 4. dodaj do historii operacji to działanie w fomie: 1 * 3 = 3
        this.history.push(resultString)
        return result;

    } else {
        return false;
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

        // 4. dodaj do historii operacji to działanie w fomie: 12 / 2 = 6
        this.history.push(resultString)
        return result;

    } else {
        return false;
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

        // 4. dodaj do historii operacji to działanie w fomie: 3 * 3 * 3 = 27
        resultString = resultArray.join(' * ') + ' = ' + result;
        this.history.push(resultString)
        return result;

    } else {
        return false;
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
            if (addResult) {
                alert('Wynik: ' + addResult);
            } else {
                alertUser('Wprowadzone dane nie są poprawnymi liczbami');
            }
        }
        if (action === '-') {
            const subResult = calc.subtract(number1, number2);
            if (subResult) {
                alert('Wynik: ' + subResult);
            } else {
                alertUser('Wprowadzone dane nie są poprawnymi liczbami');
            }

        }
        if (action === '*') {
            const multiResult = calc.multiply(number1, number2);
            if (multiResult) {
                alert('Wynik: ' + multiResult);
            } else {
                alertUser('Wprowadzone dane nie są poprawnymi liczbami');
            }

        }
        if (action === '/') {
            const divResult = calc.divide(number1, number2);
            if (divResult) {
                alert('Wynik: ' + divResult);
            } else {
                alertUser('Wprowadzone dane nie są poprawnymi liczbami');
            }

        }

        if (action === '^') {
            const powResult = calc.power(number1, number2);
            if (powResult) {
                alert('Wynik: ' + powResult);
            } else {
                alertUser('Wprowadzone dane nie są poprawnymi liczbami');
            }

        }
    }

} while (calc.isCorrectAction(action));

function alertUser(text) {
    alert(text);
}