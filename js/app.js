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

Calculator.prototype.areCorrectNumbers = function (checkNum1, checkNum2) {
    if (isNaN(checkNum1) || isNaN(checkNum2)) {
        alert('Co najmniej jedna z podanych danych nie jest liczbą !!!');

        return false;
    }

    return true;
}

Calculator.prototype.arrPushResult = function (num1, num2, result, actions) {
    return this.history.push(num1 + ' ' + actions + ' ' + num2 + ' = ' + result);
}



Calculator.prototype.add = function (num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    const numberAdd1 = parseFloat(num1);
    const numberAdd2 = parseFloat(num2);

    if (calc.areCorrectNumbers(numberAdd1, numberAdd2) === true) {
        const resultAdd = numberAdd1 + numberAdd2;
        calc.arrPushResult(numberAdd1, numberAdd2, resultAdd, action);
    }
}

Calculator.prototype.sub = function (num1, num2) {

    const numberSub1 = parseFloat(num1);
    const numberSub2 = parseFloat(num2);

    if (calc.areCorrectNumbers(numberSub1, numberSub2) === true) {
        const resultSub = numberSub1 - numberSub2;
        calc.arrPushResult(numberSub1, numberSub2, resultSub, action);
    }
}

Calculator.prototype.mul = function (num1, num2) {

    const numberMul1 = parseFloat(num1);
    const numberMul2 = parseFloat(num2);

    if (calc.areCorrectNumbers(numberMul1, numberMul2) === true) {
        const resultMul = numberMul1 * numberMul2;
        calc.arrPushResult(numberMul1, numberMul2, resultMul, action);
    }
}

Calculator.prototype.div = function (num1, num2) {

    const numberDiv1 = parseFloat(num1);
    const numberDiv2 = parseFloat(num2);

    if (calc.areCorrectNumbers(numberDiv1, numberDiv2) === true) {
        const resultDiv = numberDiv1 / numberDiv2;
        calc.arrPushResult(numberDiv1, numberDiv2, resultDiv, action);
    }
}

Calculator.prototype.pow = function (num1, num2) {

    const numberPow1 = parseFloat(num1);
    const numberPow2 = parseFloat(num2);

    if (calc.areCorrectNumbers(numberPow1, numberPow2) === true) {
        if (numberPow2 > 0) {
            let resultPow = 1;
            for (let i = 0; i < numberPow2; i++) {
                resultPow *= numberPow1;
            }
            calc.arrPushResult(numberPow1, numberPow2, resultPow, action);

        } else if (numberPow2 === 0) {
            let resultPow = 1;
            calc.arrPushResult(numberPow1, numberPow2, resultPow, action);
        } else {
            let resultPow = 0;
            let resultPowNegative = 1;
            let positiveNumberPow2 = numberPow2 * (-1);

            for (let i = 0; i < positiveNumberPow2; i++) {
                resultPowNegative *= numberPow1;
                resultPow = 1 / resultPowNegative;
            }
            calc.arrPushResult(numberPow1, numberPow2, resultPow, action);
        }
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
            calc.add(number1, number2);
        } else if (action === '-') {
            calc.sub(number1, number2);
        } else if (action === '*') {
            calc.mul(number1, number2);
        } else if (action === '/') {
            calc.div(number1, number2);
        } else if (action === '^') {
            calc.pow(number1, number2);
        }
    }

} while (calc.isCorrectAction(action));