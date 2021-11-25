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

Calculator.prototype.addToHistory = function (message) {
    return this.history.push(message);
}

Calculator.prototype.isNumber = function (number) {
    if (typeof number === "number" && !Number.isNaN(number)) {
        return true;
    } else {
        return false;
    }
}

Calculator.prototype.add = function (number1, number2) {
    let result = 0;

    if (this.isNumber(number1) && this.isNumber(number2)) {
        let add = number1 + number2;
        this.addToHistory(${number1} + ${number2} = ${add});
    } return result;

}

Calculator.prototype.subtraction = function (number1, number2) {

    let result = 0;

    if (this.isNumber(number1) && this.isNumber(number2)) {
        let subtraction = number1 - number2;
        this.addToHistory(`${number1} - ${number2} = ${subtraction}`);
    } return result;
}

Calculator.prototype.multiplication = function (number1, number2) {

    let result = 0;

    if (this.isNumber(number1) && this.isNumber(number2)) {
        let multiplication = number1 * number2;
        this.addToHistory(`${number1} * ${number2} = ${multiplication}`);
    } return result;

}

Calculator.prototype.divide = function (number1, number2) {
    let result = 0;
    if (this.isNumber(number1) && this.isNumber(number2)) {
        let divide = number1 / number2;
        this.addToHistory(`${number1} / ${number2} = ${divide}`);
    } return result;
}

Calculator.prototype.exponentiation = function (number1, number2) {
    let exponentiation = 1;
    let counter = 0;
    while (counter < number2) {
        exponentiation = exponentiation * number1;
        counter = counter + 1;
        this.addToHistory(`${number1} ^ ${number2} = ${exponentiation}`);
    }
    return exponentiation;
}

// 1. zamień wartości przekazane przez parametr na typ number
// 2. sprawdź czy są one poprawne
// 3. jeśli tak to wykonaj działanie i zapisz jego resultat
// 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2


const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if (isCorrectAction) {
        number1 = Number(prompt('Podaj liczbę nr 1'));
        number2 = Number(prompt('Podaj liczbę nr 2'));

        if (action === '+') {
            console.log('add');
            calc.add(number1, number2);
        } else if (action === "-") {
            console.log('subtraction');
            calc.subtraction(number1, number2)
        } else if (action === "*") {
            console.log('multiplication');
            calc.multiplication(number1, number2)
        } else if (action === "/") {
            console.log('divide');
            calc.divide(number1, number2);
        } else if (action === "^") {
            console.log('exponentiation');
            calc.exponentiation(number1, number2)
        }
    }
}
while (calc.isCorrectAction(action));

