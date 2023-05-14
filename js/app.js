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
    this.history.push(`${num1} ${sign} ${num2} = ${result}`)

    alert('Wynik działania to: ' + result)
}

Calculator.prototype.count = function (num1, num2, sign) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

    const number1 = Number(num1)
    const number2 = Number(num2)

    if (isNaN(number1) || isNaN(number2)) {
        alert("Niepoprawna liczba")
        return
    }

    let result

    switch (sign) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        case '^':
            result = this.countPower(number1, number2)
            break
    }

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

            if (action === '+') {
                this.count(number1, number2, "+");
            } else if (action === "-") {
                this.count(number1, number2, "-")
            } else if (action === "*") {
                this.count(number1, number2, "*")
            } else if (action === "/") {
                this.count(number1, number2, "/")
            } else if (action === "^") {
                this.count(number1, number2, "^")
            }
        }

    } while (this.isCorrectAction(action));
}


const calc = new Calculator();

calc.init()


