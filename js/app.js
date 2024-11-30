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

Calculator.prototype.changeToNumberAndCalc = function(num1, num2, operator) {
    const number1 = Number(num1);
    const number2 = Number(num2);
    console.log(number1, number2)
    let result
    
    switch(operator) {
        case '+': 
        return result = number1 + number2;
        case '-': 
        return result = number1 - number2;
        case '*': 
        return result = number1 * number2;
        case '/': 
        return result = number1 / number2;
        case '^': 
            result = 1;
            for(let i = 0; i < number2; i++) {
                console.log(i, result)
                result = result * number1
            }
        return result;
        
    }
}

Calculator.prototype.calculate = function(num1, num2, operator) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

    
    const result = this.changeToNumberAndCalc(num1, num2, operator);

    if (result || result === 0) {
        const resultAsString = `${num1} ${operator} ${num2} = ${result}`;
        this.history.push(resultAsString);
    } else {
        alert('podaj poprawne wartości liczb')
    }
}

// Calculator.prototype.subtr = function(num1, num2) {

//     const subtr = this.changeToNumberAndCalc(num1, num2, '-');

//     if (subtr || subtr === 0) {
//         const resultAsString = `${num1} - ${num2} = ${subtr}`;
//         this.history.push(resultAsString);
//     } else {
//         alert('podaj poprawne wartości liczb')
//     }
// }

// Calculator.prototype.mult = function(num1, num2) {

//     const mult = this.changeToNumberAndCalc(num1, num2, '*');

//     if (mult || mult === 0) {
//         const resultAsString = `${num1} x ${num2} = ${mult}`;
//         this.history.push(resultAsString);
//     } else {
//         alert('podaj poprawne wartości liczb')
//     }
// }

// Calculator.prototype.divide = function(num1, num2) {

//     const divide = this.changeToNumberAndCalc(num1, num2, '/');

//     if (divide || divide === 0) {
//         const resultAsString = `${num1} / ${num2} = ${divide}`;
//         this.history.push(resultAsString);
//     } else {
//         alert('podaj poprawne wartości liczb')
//     }
// }

// Calculator.prototype.expon = function(num1, num2) {

//     const expon = this.changeToNumberAndCalc(num1, num2, '^');

//     if (expon || expon === 0) {
//         const resultAsString = `${num1}^${num2} = ${expon}`;
//         this.history.push(resultAsString);
//     } else {
//         alert('podaj poprawne wartości liczb')
//     }
// }

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
        console.log(calc.actions, action);

        if(calc.actions.includes(action)) {
            calc.calculate(number1, number2, action);
        } 
        
    }
    
} while(calc.isCorrectAction(action));