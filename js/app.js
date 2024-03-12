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
    num1 = Number(num1);
    num2 = Number(num2);
    let sum = num1 + num2;
    let sumResult = sum;
    sumResult = [];
    sumResult.push(num1, '+', num2, '=', sum);
    let sumArray = sumResult.join(" ");
    this.history.push(sumArray);
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}
Calculator.prototype.subtract = function (num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let subtract = num1 - num2;
    let subtractResult = subtract;
    subtractResult = [];
    subtractResult.push(num1, '-', num2, '=', subtract);
    let subtractArray = subtractResult.join(" ");
    this.history.push(subtractArray);
}

Calculator.prototype.multiply = function (num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let multiply = num1 * num2;
    let multiplyResult = multiply;
    multiplyResult = [];
    multiplyResult.push(num1, '*', num2, '=', multiply);
    let multiplyArray = multiplyResult.join(" ");
    this.history.push(multiplyArray);

}

Calculator.prototype.divide = function (num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let divide = num1 / num2;
    let divideResult = divide;
    divideResult = [];
    divideResult.push(num1, '/', num2, '=', divide);
    let divideArray = divideResult.join(" ");
    this.history.push(divideArray);
}

Calculator.prototype.pow = function (num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let i = 0;
    let pow = 1;
    while (i < num2) {
        pow *= num1;
        i++
    }

    let powResult = pow;
    powResult = [];
    powResult.push(num1, '^', num2, '=', pow);
    let powArray = powResult.join(" ");
    this.history.push(powArray);
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
        do { number1 = prompt('Podaj liczbę nr 1'); }
        while (isNaN(number1) || number1 === " ");
        do { number2 = prompt('Podaj liczbę nr 2'); }
        while (isNaN(number2) || number2 === " ");

        if (action === '+') {
            calc.add(number1, number2);
        }
        else if (action === '-') {
            calc.subtract(number1, number2);
        }

        else if (action === '*') {
            calc.multiply(number1, number2);
        }

        else if (action === '/') {
            calc.divide(number1, number2);
        }
        else if (action === '^') {
            calc.pow(number1, number2);
        }
    }
} while (calc.isCorrectAction(action));