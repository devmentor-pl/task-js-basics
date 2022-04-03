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

Calculator.prototype.addToHistory = function (result) {
    return this.history.push(result);
}


Calculator.prototype.add = function (num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

    let resultToString = `${num1} + ${num2} = ${num1 + num2}`;
    calc.addToHistory(resultToString);

    return num1 + num2;
}


Calculator.prototype.deduct = function (num1, num2) {
    let resultToString = `${num1} - ${num2} = ${num1 - num2}`;
    calc.addToHistory(resultToString);

    return num1 - num2;
}

Calculator.prototype.multiply = function (num1, num2) {
    let resultToString = `${num1} * ${num2} = ${num1 * num2}`;
    calc.addToHistory(resultToString);

    return num1 * num2;
}

Calculator.prototype.divide = function (num1, num2) {
    let resultToString = `${num1} / ${num2} = ${num1 / num2}`;
    calc.addToHistory(resultToString);

    return num1 / num2;
}

Calculator.prototype.power = function (num1, num2) {
    let result;
    console.log(`Pierwsza:${typeof num1}`)
    console.log(`Druga: ${typeof num2}`)
    if (num2 === 0) {
        result = 1
    } else if (num2 > 0) {
        result = num1;
        for (let i = 1; i < num2; i++) {
            result *= num1;
        }

    } else if (num2 < 0) {
        num1b = (1 / num1);
        num2b = num2 * -1;
        result = num1b;
        for (let i = 1; i < num2b; i++) {
            result *= num1b;
        }
    }

    console.log(`wynik potęgowania to ${result}`)
    let resultToString = `${num1} ^ ${num2} = ${result}`;
    calc.addToHistory(resultToString);

    return result;
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
        number1 = Number(prompt('Podaj liczbę nr 1'));
        number2 = Number(prompt('Podaj liczbę nr 2'));

        if (action === '+') {
            calc.add(number1, number2)
        } else if (action === '-') {
            calc.deduct(number1, number2)
        } else if (action === '*') {
            calc.multiply(number1, number2)
        } else if (action === '/') {
            calc.divide(number1, number2)
        } else if (action === '^') {
            calc.power(number1, number2)
        }
    }

} while (calc.isCorrectAction(action));
