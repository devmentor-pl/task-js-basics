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

// Calculator.prototype.add = function(num1, num2) {
//     // 1. zamień wartości przekazane przez parametr na typ number
//     // 2. sprawdź czy są one poprawne
//     // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
//     // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
// }


Calculator.prototype.add = function(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Podane liczby są nieprawidłowe!');
        return;
    }

    let result = num1 + num2;
    this.history.push(`${num1} + ${num2} = ${result}`);
    alert(`${num1} + ${num2} = ${result}`);
}

Calculator.prototype.subtract = function(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Podane liczby są nieprawidłowe!');
        return;
    }

    let result = num1 - num2;
    this.history.push(`${num1} - ${num2} = ${result}`);
    alert(`${num1} - ${num2} = ${result}`);
}

Calculator.prototype.multiply = function(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Podane liczby są nieprawidłowe!');
        return;
    }

    let result = num1 * num2;
    this.history.push(`${num1} * ${num2} = ${result}`);
    alert(`${num1} * ${num2} = ${result}`);
}

Calculator.prototype.divide = function(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Podane liczby są nieprawidłowe!');
        return;
    }

    if (num2 === 0) {
        alert('Nie można dzielić przez zero!');
        return;
    }

    let result = num1 / num2;
    this.history.push(`${num1} / ${num2} = ${result}`);
    alert(`${num1} / ${num2} = ${result}`);
}

Calculator.prototype.power = function(base, exponent) {
    base = parseFloat(base);
    exponent = parseInt(exponent);

    if (isNaN(base) || isNaN(exponent)) {
        alert('Podane liczby są nieprawidłowe!');
        return;
    }

    let result = 1;
    for (let i = 0; i < Math.abs(exponent); i++) {
        result *= base;
    }

    if (exponent < 0) {
        result = 1 / result;
    }

    this.history.push(`${base} ^ ${exponent} = ${result}`);
    alert(`${base} ^ ${exponent} = ${result}`);
}






const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;

do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; 
    promptContent += 'Jeśli chcesz zrezygnować, wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    
    if (isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        switch(action) {
            case '+':
                calc.add(number1, number2);
                break;
            case '-':
                calc.subtract(number1, number2);
                break;
            case '*':
                calc.multiply(number1, number2);
                break;
            case '/':
                calc.divide(number1, number2);
                break;
            case '^':
                calc.power(number1, number2);
                break;
            default:
                alert('Nieprawidłowa operacja');
                break;
        }
    }

} while (isCorrectAction);