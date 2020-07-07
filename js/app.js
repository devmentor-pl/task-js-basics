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

Calculator.prototype.add = function(num1, num2) {
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        const result = number1 + number2;
        console.log(`Wynik działania ${number1} + ${number2} to ${result}`);
        this.history.push(`${number1} + ${number2} = ${result}`)
    }
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}

Calculator.prototype.substract = function(num1, num2) {
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        const result = number1 - number2;
        console.log(`Wynik działania ${number1} - ${number2} to ${result}`);
        this.history.push(`${number1} - ${number2} = ${result}`)
    }
}

Calculator.prototype.multiply = function(num1, num2) {
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        const result = number1 * number2;
        console.log(`Wynik działania ${number1} * ${number2} to ${result}`);
        this.history.push(`${number1} * ${number2} = ${result}`)
    }
}

Calculator.prototype.divide = function(num1, num2) {
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        const result = number1 / number2;
        console.log(`Wynik działania ${number1} / ${number2} to ${result}`);
        this.history.push(`${number1} / ${number2} = ${result}`)
    }
}

Calculator.prototype.power = function(num1, num2) {
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        let i = 0;
        let result = 1;

        while (i < number2) {
            result = result * number1;
            i++;
            console.log(result);
        }
        this.history.push(`${number1} ^ ${number2} = ${result}`)
    }
}

const calc = new Calculator();
const prototype = Object.getPrototypeOf(calc);
console.log(prototype);
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
        } else if (action === '-') {
            calc.substract(number1, number2);
        } else if (action === '*') {
            calc.multiply(number1, number2);
        } else if (action === '/') {
            calc.divide(number1, number2);
        } else if (action === '^') {
            calc.power(number1, number2);
        }

    }

} while (calc.isCorrectAction(action));