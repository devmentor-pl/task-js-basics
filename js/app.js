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
    // 1. zamień wartości przekazane przez parametr na typ number
    const number1 = Number(num1);
    const number2 = Number(num2);
    // 2. sprawdź czy są one poprawne
    if(typeof number1 === 'number' && typeof number2 === 'number') {
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
        const result = number1 + number2;
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
        this.history.push(`${number1} + ${number2} = ${result}`);
    } else {
        console.log('Cos poszlo nie tak...');
    }
}

Calculator.prototype.subtract = function(num1, num2) {
    const number1 = Number(num1);
    const number2 = Number(num2);
    if(typeof number1 === 'number' && typeof number2 === 'number') {
        const result = number1 - number2;
        this.history.push(`${number1} - ${number2} = ${result}`);
    } else {
        console.log('Cos poszlo nie tak...');
    }
}

Calculator.prototype.multiply = function(num1, num2) {
    const number1 = Number(num1);
    const number2 = Number(num2);
    if(typeof number1 === 'number' && typeof number2 === 'number') {
        const result = number1 * number2;
        this.history.push(`${number1} * ${number2} = ${result}`);
    } else {
        console.log('Cos poszlo nie tak...');
    }
}

Calculator.prototype.divide = function(num1, num2) {
    const number1 = Number(num1);
    const number2 = Number(num2);
    if(typeof number1 === 'number' && typeof number2 === 'number' && number2 !== 0) {
        const result = number1 / number2;
        this.history.push(`${number1} / ${number2} = ${result}`);
    } else if (number2 === 0) {
        this.history.push(`${number1} / ${number2} = Nie dzielimy przez zero.`)
    } else {
        console.log('Cos poszlo nie tak...');
    }
}

Calculator.prototype.power = function(num1, num2) {
    const number1 = Number(num1);
    const number2 = Number(num2);
    if(typeof number1 === 'number' && typeof number2 === 'number' && number2 !== 0 && number2 !== 1) {
        let result = 1;
        for (let i = 0; i < number2; i++) {
            result *= num1;
        }
        this.history.push(`${number1} ^ ${number2} = ${result}`);
    } else if (number2 === 0) {
        this.history.push(`${number1} ^ ${number2} = 1`)
    } else if (number2 === 1) {
        this.history.push(`${number1} ^ ${number2} = ${number1}`)
    } else {
        console.log('Cos poszlo nie tak...');
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
    if(isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if(action === '+') {
            calc.add(number1, number2);
        }
        if(action === '-') {
            calc.subtract(number1, number2);
        }
        if(action === '*') {
            calc.multiply(number1, number2);
        }
        if(action === '/') {
            calc.divide(number1, number2);
        }
        if(action === '^') {
            calc.power(number1, number2);
        }
    }
    
} while(calc.isCorrectAction(action));