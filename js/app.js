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

Calculator.prototype.getNumbers = function (num1, num2) {
    return [parseFloat(num1), parseFloat(num2)]
}

Calculator.prototype.isCorrect = function (arr) {
    if ((arr.some(item => isNaN(item)))) {
        prompt('Prosze podac tylko i wylacznie cyfry !')
    } else {
        return !(arr.some(item => isNaN(item)))
    }
}

Calculator.prototype.expon = function (num1, num2) {
    let result = 1;
    for (i = parseFloat(num2); i > 0; i--) {
        result *= parseFloat(num1);
    }

    return result;


}

Calculator.prototype.getResult = function (num1, num2) {
    switch (action) {
        case '+':
            return parseFloat(num1) + parseFloat(num2);
        case '-':
            return parseFloat(num1) - parseFloat(num2);
        case '*':
            return parseFloat(num1) * parseFloat(num2);
        case '/':
            return parseFloat(num1) / parseFloat(num2);
        case '^':
            return this.expon(num1, num2);


    }
}
// 1. zamień wartości przekazane przez parametr na typ number
// 2. sprawdź czy są one poprawne
// 3. jeśli tak to wykonaj działanie i zapisz jego resultat
// 4.dodaj do historii operacju to dzialanie w formie: 1 + 1 = 2

Calculator.prototype.calculate = function (num1, num2) {
    const array = this.getNumbers(num1, num2)
    const isCorrect = this.isCorrect(array)
    if (isCorrect) {
        const result = this.getResult(num1, num2)
        this.history.push(`${num1} ${action} ${num2} = ${result}`)
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

        calc.calculate(number1, number2)
    }

} while (calc.isCorrectAction(action));