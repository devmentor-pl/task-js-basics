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
    const x = parseFloat(num1);
    const y = parseFloat(num2);

    if (typeof (x) === "number" && typeof (y) === "number") {
        const result = x + y;
        console.log(x + ' + ' + y + ' = ' + result);
        this.history.push(x + ' + ' + y + ' = ' + result);
    }
    // 1. zamień wartości przekazane przez parametr na typ number   GOTOWE
    // 2. sprawdź czy są one poprawne   GOTOWE
    // 3. jeśli tak to wykonaj działanie i zapisz jego rezultat GOTOWE
    // 4. dodaj do historii operacji to działanie w formie: 1 + 1 = 2   GOTOWE
}

Calculator.prototype.sub = function (num1, num2) {
    const x = parseFloat(num1);
    const y = parseFloat(num2);

    if (typeof (x) === "number" && typeof (y) === "number") {
        const result = x - y;
        console.log(x + ' - ' + y + ' = ' + result);
        this.history.push(x + ' - ' + y + ' = ' + result);
    }
}

Calculator.prototype.mul = function (num1, num2) {
    const x = parseFloat(num1);
    const y = parseFloat(num2);

    if (typeof (x) === "number" && typeof (y) === "number") {
        const result = x * y;
        console.log(x + ' * ' + y + ' = ' + result);
        this.history.push(x + ' * ' + y + ' = ' + result);
    }
}

Calculator.prototype.div = function (num1, num2) {
    const x = parseFloat(num1);
    const y = parseFloat(num2);

    if (typeof (x) === "number" && typeof (y) === "number") {
        const result = x / y;
        console.log(x + ' / ' + y + ' = ' + result);
        this.history.push(x + ' / ' + y + ' = ' + result);
    }
}

Calculator.prototype.pow = function (num1, num2) {
    const x = parseFloat(num1);
    const y = parseFloat(num2);

    if (typeof (x) === "number" && typeof (y) === "number") {
        let result = 1;
        for (let i = 1; i <= y; i++) {
            result = result * x;
        }
        console.log(x + ' ^ ' + y + ' = ' + result);
        this.history.push(x + ' ^ ' + y + ' = ' + result);

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
        } else
            if (action === '-') {
                calc.sub(number1, number2);
            } else
                if (action === '*') {
                    calc.mul(number1, number2);
                } else
                    if (action === '/') {
                        calc.div(number1, number2);
                    } else
                        if (action === '^') {
                            calc.pow(number1, number2);
                        }
    }

} while (calc.isCorrectAction(action));