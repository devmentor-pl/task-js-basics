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
    }

    calc.addToHistory(number1, number2, sign, result)

    return result
}

Calculator.prototype.power = function (num1, num2) {
    const number1 = Number(num1)
    const number2 = Number(num2)

    if (isNaN(number1) || isNaN(number2)) {
        alert("Niepoprawna liczba")
        return 
    }

    let result = 1;
    let counter = 0;

    while (counter < number2) {
        result *= number1;
        counter++
    }

    calc.addToHistory(number1, number2, '^', result)

    return result
}

Calculator.prototype.addToHistory = function (num1, num2, sign, result) {
    this.history.push(`${number1} ${sign} ${number2} = ${result}`)

    alert('Wynik działania to: ' + result)
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
            calc.count(number1, number2, "+");
        } else if (action === "-") {
            calc.count(number1, number2, "-")
        } else if (action === "*") {
            calc.count(number1, number2, "*")
        } else if (action === "/") {
            calc.count(number1, number2, "/")
        } else if (action === "^") {
            calc.power(number1, number2)
        }
    }

} while (calc.isCorrectAction(action));