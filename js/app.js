function Calculator() {
    this.actions = {
        '+': this.add,
        '-': this.subtract,
        '*': this.multiply,
        '/': this.divide,
        '^': this.exponentiate
    },
    this.history = [];
}

const num1 = Number(number1);
const num2 = Number(number2);

Calculator.prototype.isCorrectAction = function(action) {
    return typeof this.actions[action] !== 'undefined';
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

// Calculator.prototype.add = function(num1, num2) {
//     // 1. zamień wartości przekazane przez parametr na typ number
//     let result = 0;
//     let int1 = parseInt(num1);
//     let int2 = parseInt(num2);
//     // 2. sprawdź czy są one poprawne
//     if(typeof int1 === 'number' && typeof int2 === 'number') {
//  // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
//         result = int1 + int2;
//         console.log(result);
//     } else {
//         alert('Error!');
//     }
//     // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
//     this.history.pushState(int1 + ' + ' + int2 + ' = ' + result);
// };

//ADDITION

Calculator.prototype.add = function(num1, num2) {
    let sum = num1 + num2;
    let sumStr = `${num1} + ${num2} = ${sum}`;
    this.history.push(sumStr);
};

//SUBTRACTION

Calculator.prototype.subtract = function(num1, num2) {
    let difference = num1 - num2;
    let differenceStr = `${num1} - ${num2} = ${difference}`;
    this.history.push(differenceStr);
};

//MULTIPLICATION

Calculator.prototype.multiply = function(num1, num2) {
    let product = num1 * num2;
    let productStr = `${num1} * ${num2} = ${product}`;
    this.history.push(productStr);
};

//DIVISION

Calculator.prototype.divide = function(num1, num2) {
    let quotient = num1 / num2;
    let quotientStr = `${num1} / ${num2} = ${quotient}`;
    this.history.push(quotientStr);
};

//EXPONENTIATION

Calculator.prototype.exponentiate = function(num1, num2) {
    let power = num1 ^ num2;
    let powerStr = `${num1} ^ ${num2} = ${power}`;
    this.history.push(powerStr);
}

Calculator.prototype.operation = function(action, num1, num2) {

        this.fn = this.actions[action];
        this.fn(num1, num2);
}

//CHECKER

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);

    if(isCorrectAction) {
        number1 = Number(prompt('Podaj liczbę nr 1'));
        number2 = Number(prompt('Podaj liczbę nr 2'));


        if(Number.isNaN(number1) || Number.isNaN(number2)) {
            alert('To nie jest liczba!');
        // } else if(action === '+') {
        //     calc.add(number1, number2);
        // } else if(action === '-') {
        //     calc.subtract(number1, number2);
        // } else if(action === '*') {
        //     calc.multiply(number1, number2);
        // } else if(action === '/') {
        //     calc.divide(number1, number2);
        // } else if(action === '^') {
        //     calc.exponentiate(number1, number2);
        // }
        } else {
            // dane prawidłowe
            calc.operation(action, number1, number2)
        }
    }
    
} while(calc.isCorrectAction(action));