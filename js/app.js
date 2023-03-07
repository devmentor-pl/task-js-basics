function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}


//Correctness checkers

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.areCorrectNumbers = function(num1, num2) {
    if (!(isNaN(number1)) && !(isNaN(number2))) {
         return true;
    } else {
        alert('Niepoprawny format danych!');
    }
}

//Getter

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}


//Math ops




//Before refactor

// Calculator.prototype.add = function(num1, num2) {
//     const sum = num1 + num2
//     this.history.push(`${num1} + ${num2} = ${sum}`);
//     return alert(`Twój wynik to ${sum}`);
// }

// Calculator.prototype.substract = function(num1, num2) {
//     const substraction = num1 - num2;
//     this.history.push(`${num1} - ${num2} = ${substraction}`);
//     return alert(`Twój wynik to ${substraction}`);
// }

// Calculator.prototype.multiply = function(num1, num2) {
//     const product = num1 * num2;
//     this.history.push(`${num1} * ${num2} = ${product}`);
//     return alert(`Twój wynik to ${product}`);
// }

// Calculator.prototype.divide = function(num1, num2) {
//     const quotient = Number(num1 / num2).toFixed(3);
//     this.history.push(`${num1} / ${num2} = ${quotient}`);
//     return alert(`Twój wynik to ${quotient}`);
// }

// Calculator.prototype.exponentiate = function(num1, num2) {
//     if(isNaN(Math.pow(num1,num2))) {
//         return alert('Niepoprawny format liczb dla potęgowania!');
//     }
//     this.history.push(`${num1} ^ ${num2} = ${Math.pow(num1,num2)}`);
//     return alert(`Twój wynik to ${Math.pow(num1,num2)}`);
// }



//After refactor

const ops = {
     '-': substract,
     '+': add,
     '*': multiply,
     '/': divide,
    '^': exponentiate,
 }


function add (num1, num2) {
    return num1 + num2
}

function substract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return Number(num1 / num2).toFixed(3);
}

function exponentiate (num1, num2) {
    if(isNaN(Math.pow(num1,num2))) {
        return alert('Niepoprawny format liczb dla potęgowania!');
    }
    return Math.pow(num1,num2);
}





//Action


const calc = new Calculator();
let action, promptContent, isCorrectAction, areCorrectNumbers, number1, number2, chosenAction, actionResult



do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \nW przypadku potęgowania pierwsza liczba to podstawa! \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    
    if(isCorrectAction) {

        number1 = parseFloat(prompt('Podaj liczbę nr 1'));
        number2 = parseFloat(prompt('Podaj liczbę nr 2'));
        areCorrectNumbers = calc.areCorrectNumbers(number1,number2);
        
        if(areCorrectNumbers) {

            //After refactor

            chosenAction = ops[action];
            actionResult = chosenAction(number1, number2)
            calc.history.push(`${number1} ${action} ${number2} = ${actionResult}`);
            alert(`Twój wynik to ${actionResult}`);

            //Before refactor

            // switch(action) {
            //     case '+':
            //     calc.add(number1, number2);
            //     break;
            // } 
            // switch(action) {
            //     case '-':
            //     calc.substract(number1, number2);
            //     break;
            // } 
            // switch(action) {
            //     case '*':
            //     calc.multiply(number1, number2);
            //     break;
            // } 
            // switch(action) {
            //     case '/':
            //     calc.divide(number1, number2);
            //     break;
            // } 
            // switch(action) {
            //     case '^':
            //     calc.exponentiate(number1, number2);
            //     break;
            // } 
        }   
      
    }
    
} while(calc.isCorrectAction(action));













