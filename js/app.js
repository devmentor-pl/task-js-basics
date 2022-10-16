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
    this.result1 = parseInt(num1);
    this.result2 = parseInt(num2);
    const a = 2;
    if (typeof this.result1 === typeof a && typeof this.result2 === typeof a) {
        this.result = this.result1 + this.result2;
        const resultFinal = `${this.result1} + ${this.result2} = ${this.result}`;
        this.history.push(resultFinal);
    }

    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}


Calculator.prototype.sub = function (num1, num2) {
    this.result1 = parseInt(num1);
    this.result2 = parseInt(num2);
    const a = 2;
    if (typeof this.result1 === typeof a && typeof this.result2 === typeof a) {
        this.result = this.result1 - this.result2;
        const resultFinal = `${this.result1} - ${this.result2} = ${this.result}`;
        this.history.push(resultFinal);
    }
}
Calculator.prototype.multi = function (num1, num2) {
    this.result1 = parseInt(num1);
    this.result2 = parseInt(num2);
    const a = 2;
    if (typeof this.result1 === typeof a && typeof this.result2 === typeof a) {
        this.result = this.result1 * this.result2;
        const resultFinal = `${this.result1} * ${this.result2} = ${this.result}`;
        this.history.push(resultFinal);
    }
}
Calculator.prototype.div = function (num1, num2) {
    this.result1 = parseInt(num1);
    this.result2 = parseInt(num2);
    const a = 2;
    if (typeof this.result1 === typeof a && typeof this.result2 === typeof a) {
        this.result = this.result1 / this.result2;
        const resultFinal = `${this.result1} / ${this.result2} = ${this.result}`;
        this.history.push(resultFinal);
    }
}
Calculator.prototype.exponentation = function (num1, num2) {
    this.result1 = parseInt(num1);
    this.result2 = parseInt(num2);
    const a = 2;
    if (typeof this.result1 === typeof a && typeof this.result2 === typeof a) {
        let exp = 1;
        for (let i = 1; i <= this.result2; i++) {
            exp *= this.result1;
        }
        const resultFinal = `${this.result1} ^ ${this.result2} = ${exp}`;
        this.history.push(resultFinal);
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
        } else if (action === "-") {
            calc.sub(number1, number2);
        } else if (action === "*") {
            calc.multi(number1, number2);
        } else if (action === "/") {
            calc.div(number1, number2)
        } else if (action === "^") {
            calc.exponentation(number1, number2);
        }
    }

} while (calc.isCorrectAction(action));