function Calculator() {
    this.action = {
        '+': this.add.bind(this),
        '-': this.subtraction.bind(this),
        '*': this.multiplication.bind(this),
        '/': this.division.bind(this),
        '^': this.exponentiation.bind(this)
    }
    this.history = [];
};

Calculator.prototype.isCorrectAction = function (action) {
    const actionArr = Object.keys(this.action);
    return actionArr.includes(action);
};

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
};

Calculator.prototype.convertToNumber = function (num1, num2) {
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
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n';
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');
        calc.action[action](number1,number2)
    };

} while (calc.isCorrectAction(action));