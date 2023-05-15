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

Calculator.prototype.countPower = function (num1, num2) {
    let result = 1;
    let counter = 0;

    while (counter < num2) {
        result *= num1;
        counter++
    }

    return result
}

Calculator.prototype.addToHistory = function (num1, num2, sign, result) {
    if (result === false) {
        alert("'Pamiętaj cholero, nigdy nie dziel przez 0!' :)")
        return
    }

    this.history.push(`${num1} ${sign} ${num2} = ${result}`)

    alert('Wynik działania to: ' + result)
}

Calculator.prototype.count = function (num1, num2, sign) {
    const number1 = Number(num1)
    const number2 = Number(num2)

    if (isNaN(number1) || isNaN(number2)) {
        alert("Niepoprawna liczba")
        return
    }

    let result

    const actions = {
        '+': number1 + number2,
        '-': number1 - number2,
        '*': number1 * number2,
        '/': number2 !== 0 ? number1 / number2 : false,
        '^': this.countPower(number1, number2),
    }

    result = actions[sign]

    this.addToHistory(number1, number2, sign, result)

    return result
}

Calculator.prototype.init = function () {
    let action, promptContent, isCorrectAction, number1, number2;
    do {
        promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
        promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
        promptContent += 'Lista poprzednich operacji: \n' + this.getHistoryAsString();

        action = prompt(promptContent);
        isCorrectAction = this.isCorrectAction(action);

        if (isCorrectAction) {

            number1 = prompt('Podaj liczbę nr 1');
            number2 = prompt('Podaj liczbę nr 2');

            this.count(number1, number2, action)

        }

    } while (this.isCorrectAction(action));
}


const calc = new Calculator();

calc.init()


