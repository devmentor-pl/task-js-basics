function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

function convertNumber(num) {
    let number = Number(num);
    return number;
}
Calculator.prototype.add = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    const number1 = convertNumber(num1);
    const number2 = convertNumber(num2);
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    let sum = 0;
    if (typeof number1 && typeof number2 == 'number') {
        sum = number1 + number2;
    }
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    this.history.push(number1 + '+' + number2 + '=' + sum);
    prompt(sum);
    return sum;

}

Calculator.prototype.substract = function(num1, num2) {

    const number1 = convertNumber(num1);
    const number2 = convertNumber(num2);
    let substract = 0;
    if (typeof number1 && typeof number2 == 'number') {
        substract = number1 - number2;
    }
    this.history.push(number1 + '-' + number2 + '=' + substract);
    prompt(substract);
    return substract;

}

Calculator.prototype.substract = function(num1, num2) {

    const number1 = convertNumber(num1);
    const number2 = convertNumber(num2);
    let substract = 0;
    if (typeof number1 && typeof number2 == 'number') {
        substract = number1 - number2;
    }
    this.history.push(number1 + '-' + number2 + '=' + substract);
    prompt(substract);
    return substract;

}

Calculator.prototype.multiply = function(num1, num2) {

    const number1 = convertNumber(num1);
    const number2 = convertNumber(num2);
    let multiply = 0;
    if (typeof number1 && typeof number2 == 'number') {
        multiply = number1 * number2;
    }
    this.history.push(number1 + '*' + number2 + '=' + multiply);
    prompt(multiply);
    return multiply;

}

Calculator.prototype.devide = function(num1, num2) {

    const number1 = convertNumber(num1);
    const number2 = convertNumber(num2);
    let devide = 0;
    if (typeof number1 && typeof number2 == 'number') {
        devide = number1 / number2;
    }
    this.history.push(number1 + '/' + number2 + '=' + devide);
    prompt(devide);
    return devide;

}

Calculator.prototype.exponentiation = function(num1, num2) {

    const number1 = convertNumber(num1);
    const number2 = convertNumber(num2);
    let exponentiation = 1;
    if (typeof number1 && typeof number2 == 'number') {
        for (let i = 1; i <= number2; i++) {
            exponentiation *= number1;
        }
    }
    this.history.push(number1 + '^' + number2 + '=' + exponentiation);
    prompt(exponentiation);
    return exponentiation;

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
            calc.substract(number1, number2);
        }
        if (action === '*') {
            calc.multiply(number1, number2);
        }
        if (action === '/') {
            calc.devide(number1, number2);
        }
        if (action === '^') {
            calc.exponentiation(number1, number2);
        }



    }



} while (calc.isCorrectAction(action));