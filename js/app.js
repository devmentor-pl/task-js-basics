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
Calculator.prototype.getNumbers = function(num1str, num2str) {
    const num1num = parseInt(num1str, 10)
    const num2num = parseInt(num2str, 10)
    const result = [num1num, num2num]
    return result
}
Calculator.prototype.checkCorrect = function(array) {
    if(isNaN(array[0]))
      return false
    if(isNaN(array[1]))
      return false
    return true
}
// //
// Calculator.prototype.getResult = function(array) {
//     return array[0] + array[1]
// }
// Calculator.prototype.getResultSubtract = function(array) {
//     return array[0] - array[1]
// }


// Calculator.prototype.add = function(num1, num2) {
//     const action = '+'
//     // 1. zamień wartości przekazane przez parametr na typ number
//     const array = this.getNumbers(num1, num2)
//     // 2. sprawdź czy są one poprawne
//     const ifCorrect = this.checkCorrect(array)
//     // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
//     if(ifCorrect) {
//         const result = this.getResult(array)
//         // 4. dodaj do historii operacji to działanie w formie: 1 + 1 = 2
//         this.history.push(num1 + " " + action + " " + num2 + " = " + result)
//     }
//     else{
//         const errorMessages = 'Wartości są nie poprawne'
//         this.history.push(errorMessages)
//     }

// }
// Calculator.prototype.subtract = function(num1, num2) {
//     const action = '-'
//     // 1. zamień wartości przekazane przez parametr na typ number
//     const array = this.getNumbers(num1, num2)
//     // 2. sprawdź czy są one poprawne
//     const ifCorrect = this.checkCorrect(array)
//     // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
//     if(ifCorrect) {
//         const result = this.getResultSubtract(array)
//         // 4. dodaj do historii operacji to działanie w formie: 1 + 1 = 2
//         this.history.push(num1 + " " + action + " " + num2 + " = " + result)
//     }
//     else{
//         const errorMessages = 'Wartości są nie poprawne'
//         this.history.push(errorMessages)
//     }

// }

Calculator.prototype.getActionResult = function(num1, num2, action) {
    if (action === '+')
    return num1 + num2
    if (action === '-')
    return num1 - num2
    if (action === '*') 
    return num1 * num2
    if (action === '/') 
    return num1 / num2
    if (action === '^') {

    let iter = 0
let result = 1
let info = ''
while(iter < num2) {

    result = result * num1
    if(iter > 0) {
        info = info + '*' 
    }

    info = info + num1
    iter++
}

info = info + '=' +result
return result
}
}


Calculator.prototype.execute = function(num1, num2, action) {
    // 1. zamień wartości przekazane przez parametr na typ number
    const array = this.getNumbers(num1, num2)
    // 2. sprawdź czy są one poprawne
    const ifCorrect = this.checkCorrect(array)
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    if(ifCorrect) {
        const result = this.getActionResult(array[0], array[1], action)
        // 4. dodaj do historii operacji to działanie w formie: 1 + 1 = 2
        this.history.push(num1 + " " + action + " " + num2 + " = " + result)
    }
    else{
        const errorMessages = 'Wartości są nie poprawne'
        this.history.push(errorMessages)
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
        calc.execute(number1, number2, action)

        // if(action === '+') {
        //     calc.add(number1, number2);
        // }
        // if(action === '-') {
        //     calc.subtract(number1,number2)
        // }
    }
    
} while(calc.isCorrectAction(action));


