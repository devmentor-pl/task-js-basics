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

Calculator.prototype.displayResult = function (oper) {
    return result = number1 + action + number2 + ' = ' + oper;
}

Calculator.prototype.add = function (num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    const sum = Number(num1) + Number(num2);
    calc.displayResult(sum);
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    calc.addToHistory(result);
}

Calculator.prototype.subtract = function (num1, num2) {
    const sub = Number(num1) - Number(num2);
    calc.displayResult(sub);
    calc.addToHistory(result);
}

Calculator.prototype.multiply = function (num1, num2) {
    const multiplication = Number(num1) * Number(num2);
    calc.displayResult(multiplication);
    calc.addToHistory(result);
}

Calculator.prototype.divide = function (num1, num2) {
    if (Number(num2) === 0) {
        alert("Nie dzieli się przez 0.")
    } else {
        const division = Number(num1) / Number(num2);
        calc.displayResult(division);
        calc.addToHistory(result);
    }
}

Calculator.prototype.powering = function (num1, num2) {
    let pow = 1;
    if (Number(num2) === 0) {
        pow = 1;
    } else {
        for (let i = 0; i < Number(num2); i++) {
            pow *= Number(num1);
        }
    }
    calc.displayResult(pow);
    calc.addToHistory(result);
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

        if (isNaN(number1) || isNaN(number2)) {
            alert('Podano błędne dane!')
        } else {
            switch (action) {
                case '+':
                    calc.add(number1, number2);
                    break;
                case '-':
                    calc.subtract(number1, number2);
                    break;
                case '*':
                    calc.multiply(number1, number2);
                    break;
                case '/':
                    calc.divide(number1, number2);
                    break;
                case '^':
                    calc.powering(number1, number2);
                    break;
            }
        }
    }

} while (calc.isCorrectAction(action));