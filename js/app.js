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
    const a = parseFloat(num1)
    const b = parseFloat(num2)
    const result = a + '+' + b + '=' + (a + b)

    if (isNaN(a) && isNaN(b)) {
        this.history.push(result + ' Podane wartości nie są liczbami')
    }
    if (isNaN(a) && !isNaN(b)) {
        this.history.push(result + ' Pierwsza wartość nie jest liczbą')
    }
    if (!isNaN(a) && isNaN(b)) {
        this.history.push(result + ' Druga wartość nie jest liczbą')
    }
    else if (!isNaN(a) && !isNaN(b)) {
        this.history.push(result)
    }

    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego rezultat
    // 4. dodaj do historii operacji to działanie w formie: 1 + 1 = 2
}

Calculator.prototype.subtract = function (num1, num2) {
    const a = parseFloat(num1)
    const b = parseFloat(num2)
    const result = a + '-' + b + '=' + (a - b)

    if (isNaN(a) && isNaN(b)) {
        this.history.push(result - ' Podane wartości nie są liczbami')
    }
    if (isNaN(a) && !isNaN(b)) {
        this.history.push(result + ' Pierwsza wartość nie jest liczbą')
    }
    if (!isNaN(a) && isNaN(b)) {
        this.history.push(result + ' Druga wartość nie jest liczbą')
    }
    else if (!isNaN(a) && !isNaN(b)) {
        this.history.push(result)
    }
}

Calculator.prototype.multiply = function (num1, num2) {
    const a = parseFloat(num1)
    const b = parseFloat(num2)
    const result = a + '*' + b + '=' + (a * b)

    if (isNaN(a) && isNaN(b)) {
        this.history.push(result + ' Podane wartości nie są liczbami')
    }
    if (isNaN(a) && !isNaN(b)) {
        this.history.push(result + ' Pierwsza wartość nie jest liczbą')
    }
    if (!isNaN(a) && isNaN(b)) {
        this.history.push(result + ' Druga wartość nie jest liczbą')
    }
    else if (!isNaN(a) && !isNaN(b)) {
        this.history.push(result)
    }

}

Calculator.prototype.divide = function (num1, num2) {
    const a = parseFloat(num1)
    const b = parseFloat(num2)
    const result = a + '/' + b + '=' + (a / b)

    if (isNaN(a) && isNaN(b)) {
        this.history.push(result + ' Podane wartości nie są liczbami')
    }
    if (isNaN(a) && !isNaN(b)) {
        this.history.push(result + ' Pierwsza wartość nie jest liczbą')
    }
    if (!isNaN(a) && isNaN(b)) {
        this.history.push(result + ' Druga wartość nie jest liczbą')
    }

    if (b === 0) {
        this.history.push(a + '/' + b + ' = błąd! Nie można dzielić przez 0!')
    }

    else if (!isNaN(a) && !isNaN(b)) {
        this.history.push(result)
    }
}

Calculator.prototype.power = function (num1, num2) {
    const a = parseFloat(num1)
    const b = parseFloat(num2)
    const result = num1 + '^' + num2 + ' = '


    if (isNaN(a) && isNaN(b)) {
        this.history.push(result + ' Podane wartości nie są liczbami')
    }
    if (isNaN(a) && !isNaN(b)) {
        this.history.push(result + ' Pierwsza wartość nie jest liczbą')
    }
    if (!isNaN(a) && isNaN(b)) {
        this.history.push(result + ' Druga wartość nie jest liczbą')
    }

    if (b === 0) {
        this.history.push(result + 1)
    }

    else if (!isNaN(a) && !isNaN(b)) {
        var result1 = 1

        for (let i = 0; i < b; i++) {
            result1 *= a
        }
        this.history.push(result + result1)
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
        }

        if (action === '-') {
            calc.subtract(number1, number2);
        }

        if (action === '*') {
            calc.multiply(number1, number2);
        }

        if (action === '/') {
            calc.divide(number1, number2);
        }

        if (action === '^') {
            calc.power(number1, number2);
        }
    }

} while (calc.isCorrectAction(action));