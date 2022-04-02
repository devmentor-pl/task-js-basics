function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
};

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
};

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
};

Calculator.prototype.convertToNumber = function (num1,num2) {
    return [num1, num2].map((Number));
};

Calculator.prototype.isNumber = function (arr) {
    return arr.every(function (el) { return !isNaN(el) });
};

Calculator.prototype.pushHistory = function (arr,sign, fn) {
    const [num1, num2] = arr;
    this.history.push(`${num1}${sign}${num2}=${fn}`);
};

Calculator.prototype.pow = function (num1,num2) {
    let result = 1;
    for (let i = 1; i <= num2; i++) {
        result *= num1;
    };
    return result;
};

Calculator.prototype.showAlert = function () {
    return alert('One of those values are not a number!');
};

Calculator.prototype.add = function (num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    const userValueArr = this.convertToNumber(num1, num2);
    const result = userValueArr.reduce(function (a, b) { return a + b });
    this.isNumber(userValueArr) ? this.pushHistory(userValueArr,'+',result) : this.showAlert();
};

Calculator.prototype.subtraction = function (num1, num2) {
    const userValueArr = this.convertToNumber(num1, num2);
    const result = userValueArr.reduce(function (a, b) { return a - b });
    this.isNumber(userValueArr) ? this.pushHistory(userValueArr,'-', result) : this.showAlert();
};

Calculator.prototype.multiplication = function (num1, num2) {
    const userValueArr = this.convertToNumber(num1, num2);
    const result = userValueArr.reduce(function (a, b) { return a * b });
    this.isNumber(userValueArr) ? this.pushHistory(userValueArr, '*', result) : this.showAlert();
};

Calculator.prototype.division = function (num1, num2) {
    const userValueArr = this.convertToNumber(num1, num2);
    const result = userValueArr.reduce(function (a, b) { return a / b });
    this.isNumber(userValueArr) ? this.pushHistory(userValueArr, '/', result) : this.showAlert();
};

Calculator.prototype.exponentiation = function (num1, num2) {
    const userValueArr = this.convertToNumber(num1, num2);
    this.isNumber(userValueArr) ? this.pushHistory(userValueArr, '**', this.pow(userValueArr[0], userValueArr[1])) : this.showAlert();
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if(action === '+') {
            calc.add(number1, number2);
        }
        if(action === '-') {
            calc.subtraction(number1, number2);
        }
        if(action === '*') {
            calc.multiplication(number1, number2);
        }
        if(action === '/') {
            calc.division(number1, number2);
        }
        if(action === '^') {
            calc.exponentiation(number1, number2);
        }
    }

} while (calc.isCorrectAction(action));

calc.add('1','4')
calc.add('1', '6')
calc.division(4,'2')
calc.subtraction(4,'2')
calc.multiplication(4,'2')
calc.exponentiation(3,5)