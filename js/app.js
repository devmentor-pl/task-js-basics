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

//     const number1 = parseFloat(num1);
//     const number2 = parseFloat(num2);

//     if (isNaN(number1) || isNaN(number2)) {
//         alert('Podana wartość musi być liczbą! Wprowadź poprawne dane!');
//         location.reload();
//     }

//     const result = number1 + number2;
//     const operation = `${number1} + ${number2} = ${result}`;
//     this.history.push(operation);
// }

// Calculator.prototype.subtract = function(num1, num2) {

//     const number1 = parseFloat(num1);
//     const number2 = parseFloat(num2);

//     if (isNaN(number1) || isNaN(number2)) {
//         alert('Podana wartość musi być liczbą! Wprowadź poprawne dane!');
//         location.reload();
//     }

//     const result = number1 - number2;
//     const operation = `${number1} - ${number2} = ${result}`;
//     this.history.push(operation);
// }

// Calculator.prototype.multiply = function(num1, num2) {

//     const number1 = parseFloat(num1);
//     const number2 = parseFloat(num2);

//     if (isNaN(number1) || isNaN(number2)) {
//         alert('Podana wartość musi być liczbą! Wprowadź poprawne dane!');
//         location.reload();
//     }

//     const result = number1 * number2;
//     const operation = `${number1} * ${number2} = ${result}`;
//     this.history.push(operation);
// }

// Calculator.prototype.divide = function(num1, num2) {

//     const number1 = parseFloat(num1);
//     const number2 = parseFloat(num2);

//     if (isNaN(number1) || isNaN(number2)) {
//         alert('Podana wartość musi być liczbą! Wprowadź poprawne dane!');
//         location.reload();
//     }

//     const result = number1 / number2;
//     const operation = `${number1} / ${number2} = ${result}`;
//     this.history.push(operation);
// }

// Calculator.prototype.exponentiation = function(num1, num2) {

//     const number1 = parseFloat(num1);
//     const number2 = parseFloat(num2);
    

//     if (isNaN(number1) || isNaN(number2)) {
//         alert('Podana wartość musi być liczbą! Wprowadź poprawne dane!');
//         location.reload();
//     }

//     let result = 1;
//     for (let i = 0; i < number2; i++){
//         result *=number1;
//     }

//     const operation = `${number1} ^ ${number2} = ${result}`;
//     this.history.push(operation);
// }

Calculator.prototype.doOperation = function(operator, num1, num2){
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;
    

    if (isNaN(number1) || isNaN(number2)) {
        alert('Podana wartość musi być liczbą! Wprowadź poprawne dane!');
        location.reload();
    }

    switch(operator){
        case '+':
            result = number1 + number2;
            break;

        case '-':
            result = number1 - number2;
            break;
        
        case '*':
            result = number1 * number2;
            break;

        case '/':
            result = number1 / number2;
            break;

        case '^':
            result = 1;
            for (let i = 0; i < number2; i++){
                result *= number1;
            }

    }
    const operation = `${number1} ${operator} ${number2} = ${result}`;
    this.history.push(operation);
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

        // if(action === '+') {
        //     calc.add(number1, number2);
        // }
        // if(action === '-') {
        //     calc.subtract(number1, number2);
        // }
        // if(action === '*') {
        //     calc.multiply(number1, number2);
        // }
        // if(action === '/') {
        //     calc.divide(number1, number2);
        // }
        // if(action === '^') {
        //     calc.exponentiation(number1, number2);
        // }
        const result = calc.doOperation(action, number1, number2);
    }
    
} while(calc.isCorrectAction(action));