function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

const operations = {
'+': Calculator.add,
'-': Calculator.sub,
'*': Calculator.mul,
'/': Calculator.div,
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}
Calculator.prototype.stopAction = function(event) {
    event.preventDefault();
}

Calculator.prototype.checkIsNan = function(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        prompt('Podana została błędna dana');
        calc.stopAction(true);
    } 
}

Calculator.prototype.transform = function(operationType, num1, num2) {
    const num1Converted = Number(num1);
    const num2Converted = Number(num2);

    calc.checkIsNan(num1, num1);

    const result = operations[operationType](num1, num1);

    this.history.push(num1Converted + action + num2Converted + ' = ' + result);
    console.log(this.history); 
}

Calculator.prototype.add = function(num1, num2) {
    const result = num1 + num2;
}

Calculator.prototype.sub = function(num1, num2) {
    const result = num1 - num2;
    }

Calculator.prototype.mul = function(num1, num2) {
    const result = num1 * num2;
}

Calculator.prototype.div = function(num1, num2) {
    const result = num1 / num2;
}

Calculator.prototype.pow = function(num1, num2) {
    let result = 1;
    for(let i = 0; i < num2; i ++) {
        result *= num1;
    }
}

// Calculator.prototype.add = function(num1, num2) {

//     const num1Converted = Number(num1);
//     const num2Converted = Number(num2);

//     calc.checkIsNan(num1, num1);

//     const result = num1Converted + num2Converted;

//     this.history.push(num1Converted + action + num2Converted + ' = ' + result);
//     console.log(this.history);
// }

// Calculator.prototype.sub = function(num1, num2) {
    
//     const num1Converted = Number(num1);
//     const num2Converted = Number(num2);
    
//     calc.checkIsNan(num1, num1);

//     const result = num1Converted - num2Converted;
    
//     this.history.push(num1Converted + action + num2Converted + ' = ' + result);
//     console.log(this.history);
//     }

// Calculator.prototype.mul = function(num1, num2) {

//     const num1Converted = Number(num1);
//     const num2Converted = Number(num2);

//     calc.checkIsNan(num1, num1);

//     const result = num1Converted * num2Converted;

//     this.history.push(num1Converted + action + num2Converted + ' = ' + result);
//     console.log(this.history);
// }

// Calculator.prototype.div = function(num1, num2) {

//     const num1Converted = Number(num1);
//     const num2Converted = Number(num2);

//     calc.checkIsNan(num1, num1);

//     const result = num1Converted / num2Converted;

//     this.history.push(num1Converted + action + num2Converted + ' = ' + result);
//     console.log(this.history);
// }

// Calculator.prototype.pow = function(num1, num2) {
//     const num1Converted = Number(num1);
//     const num2Converted = Number(num2);

//     calc.checkIsNan(num1, num1);
    
//     let result = 1;
//     for(let i = 0; i < num2Converted; i ++) {
//         result *= num1Converted;
//     }

//     this.history.push(num1Converted + action + num2Converted + ' = ' + result);
//     console.log(this.history);
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


    calc.transform(promptContent, number1, number2);
        // if(action === '+') {
        //     calc.add(number1, number2);
        // } else if(action === '-') {
        //     calc.sub(number1, number2);
        // } else if(action === '*') {
        //     calc.mul(number1, number2);
        // } else if(action === '/') {
        //     calc.div(number1, number2);
        // } else if(action === '^') {
        //     calc.pow(number1, number2);
        // } else {
        //     prompt('Podana została błędna dana');
        // }
    }
    
} while(calc.isCorrectAction(action));


// const calc = new Calculator();
// let action, promptContent, isCorrectAction, number1, number2;
// do { 
//     promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
//     promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
//     promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

//     action = prompt(promptContent);
//     isCorrectAction = calc.isCorrectAction(action);

//     if(isCorrectAction) {
//         number1 = prompt('Podaj liczbę nr 1');
//         number2 = prompt('Podaj liczbę nr 2');

//         if(action === '+') {
//             calc.add(number1, number2);
//         } else if(action === '-') {
//             calc.sub(number1, number2);
//         } else if(action === '*') {
//             calc.mul(number1, number2);
//         } else if(action === '/') {
//             calc.div(number1, number2);
//         } else if(action === '^') {
//             calc.pow(number1, number2);
//         } else {
//             prompt('Podana została błędna dana');
//         }
//     }
    
// } while(calc.isCorrectAction(action));