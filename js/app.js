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

Calculator.prototype.add = function (num1, num2, action) {

    let result = num1 + num2;
    calc.addToHistory(`${num1} ${action} ${num2} = ${result}`);

    return result;
}

Calculator.prototype.deduct = function (num1, num2, action) {


    let result = num1 - num2;
    calc.addToHistory(`${num1} ${action} ${num2} = ${result}`);

    return result;
}

Calculator.prototype.multiply = function (num1, num2, action) {

    let result = num1 * num2;
    calc.addToHistory(`${num1} ${action} ${num2} = ${result}`);

    return result;
}

Calculator.prototype.divide = function (num1, num2, action) {

    if (num2) {

        let result = num1 / num2;
        calc.addToHistory(`${num1} ${action} ${num2} = ${result}`);

        return result;
    }
    else {
        alert("Nie można dzielić przez zero")
        calc.addToHistory(`${num1} ${action} ${num2} = błąd`);
    }
}

Calculator.prototype.power = function (num1, num2, action) {
    let result;

    if (num2 === 0) {
        result = 1

    } else if (num2 > 0 && Number.isInteger(num2)) {
        result = num1;
        for (let i = 1; i < num2; i++) {
            result *= num1;
        }

    } else if (num2 < 0 & Number.isInteger(num2)) {
        num1New = (1 / num1);
        num2New = num2 * -1;
        result = num1New;
        for (let i = 1; i < num2New; i++) {
            result *= num1New;
        }
    } else if (!Number.isInteger(num2)) {
        return alert("Na litość boską, po co Ci to?!")
    }

    calc.addToHistory(`${num1} ${action} ${num2} = ${result.toFixed(4)}`);
    return result;
}


const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n';
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if (isCorrectAction) {
        number1 = Number(prompt('Podaj liczbę nr 1'));
        number2 = Number(prompt('Podaj liczbę nr 2'));

        if (isNaN(number1) || isNaN(number2)) {

            alert(`Podaj prawidłowe dane!`)

        }
        else {
            if (action === '+') {
                calc.add(number1, number2, action)
            } else if (action === '-') {
                calc.deduct(number1, number2, action)
            } else if (action === '*') {
                calc.multiply(number1, number2, action)
            } else if (action === '/') {
                calc.divide(number1, number2, action)
            } else if (action === '^') {
                calc.power(number1, number2, action)
            }
        }
    }
    else {
        alert(`Nieprawidłowy operator!`);
    }


} while (calc.isCorrectAction(action));
