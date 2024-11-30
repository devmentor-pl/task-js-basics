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

    const number1 = Number(num1);
    const number2 = Number(num2);

    errorAlert(number1, number2);


    let result = number1 + number2;

    let info = '';

    if (isNaN(result)) {
        info = 'Złe dane!';
    }
    else {

        info = number1 + ' + ' + number2 + ' = ' + result;
    }

    this.history.push(info);

    return result;


    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}


Calculator.prototype.subtraction = function (num1, num2) {

    const number1 = Number(num1);
    const number2 = Number(num2);

    errorAlert(number1, number2);

    let result = number1 - number2;

    let info = '';

    if (isNaN(result)) {
        info = 'Złe dane!';
    }
    else {

        info = number1 + ' - ' + number2 + ' = ' + result;

    }

    this.history.push(info);

    return result;
}


Calculator.prototype.multiplication = function (num1, num2) {

    const number1 = Number(num1);
    const number2 = Number(num2);

    errorAlert(number1, number2);

    let result = number1 * number2;

    let info = '';

    if (isNaN(result)) {
        info = 'Złe dane!';
    }
    else {

        info = number1 + ' * ' + number2 + ' = ' + result;
    }

    this.history.push(info);
    return result;

}


Calculator.prototype.division = function (num1, num2) {

    const number1 = Number(num1);
    const number2 = Number(num2);

    errorAlert(number1, number2);

    let result = number1 / number2;

    let info = '';

    if (isNaN(result)) {
        info = 'Złe dane!';
    }
    else {

        info = number1 + ' / ' + number2 + ' = ' + result;
    }

    this.history.push(info);
    return result;
}

Calculator.prototype.exponentiation = function (num1, num2) {

    const number1 = Number(num1);
    const number2 = Number(num2);

    errorAlert(number1, number2);

    let result = number1;

    let info = '';

    if (isNaN(result)) {
        info = 'Złe dane!';
    }
    else {

        for (let i = 1; i < number2; i++) {
            result = result * number1;
        }

        info = number1 + ' ^ ' + number2 + ' = ' + result;

    }

    this.history.push(info);
    return result;

}



function errorAlert(number1, number2) {
    if (isNaN(number1)) {
        alert('Wpisano złe dane!')

    }
    else if (isNaN(number2)) {
        alert('Wpisano złe dane!')
    }

}


function calcSwitch(action) {
    switch (action) {
        case '+':
            calc.add(number1, number2);
            break;
        case '-':
            calc.subtraction(number1, number2);
            break;
        case '*':
            calc.multiplication(number1, number2);
            break;
        case '/':
            calc.division(number1, number2);
            break;
        case '^':
            calc.exponentiation(number1, number2);
            break;

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


        calcSwitch(action);


    }

} while (calc.isCorrectAction(action));