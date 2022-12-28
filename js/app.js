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
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

    let result = (num1 + num2);
    result = `${num1} + ${num2} = ${result}`;
    this.history.push(result);

    return result;
}

Calculator.prototype.substract = function (num1, num2) {

    let result = (num1 - num2);
    result = `${num1} - ${num2} = ${result}`;
    this.history.push(result);

    return result;
}

Calculator.prototype.multiply = function (num1, num2) {

    let result = (num1 * num2);
    result = `${num1} * ${num2} = ${result}`;
    this.history.push(result);

    return result;
}

Calculator.prototype.divide = function (num1, num2) {

    let result = (num1 / num2);
    result = `${num1} / ${num2} = ${result}`;
    this.history.push(result);

    return result;
}

Calculator.prototype.power = function (a, n) {
    let result = 1;
    let output = '';

    if (a === 0 || a === 1) {
        output = `${a} podniesione do każdej potęgi daje ${a}`;
    } else if (n === 0) {
        output = 'Każda liczba podniesiona do potęgi 0 daje 1';
    } else if (n < 0) {
        n = Math.abs(n);
        let j = 0;
        while (j < n) {
            result = result / a;
            j++;
        }
        output = `${a} podniesione do -${n} daje odwrotność tej liczby, czyli ${result}`;

    } else {
        let i = 0;
        while (i < n) {
            result = result * a;

            if (i > 0) {
                output += ' * ';
            }

            output += a;
            i++;
        }
        output += ' = ' + result;
    }

    this.history.push(output);

    return output;
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
        number1 = Number(prompt('Podaj liczbę nr 1'));
        number2 = Number(prompt('Podaj liczbę nr 2'));
        // number1 = Number(2);
        // number2 = Number(3);

        if (isNaN(number1) || isNaN(number2)) {
            alert('To nie wygląda jak liczba...');
        } else {
            if (action === '+') {
                calc.add(number1, number2);
            } else if (action === '-') {
                calc.substract(number1, number2);
            } else if (action === '*') {
                calc.multiply(number1, number2);
            } else if (action === '/') {
                calc.divide(number1, number2);
            } else if (action === '^') {
                calc.power(number1, number2);
            }
        };
    }
} while (calc.isCorrectAction(action));