function Calculator() {
    this.actions = ['+', '-', '*', '/', '**'];
    this.history = [];
    
}

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action);
}

// Calculator.prototype.isInHistory = function(result) {
//     return this.history.push(result)
// }

// const action1 = new Calculator()
// //console.log(action1.isCorrectAction('+'))


Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
}

Calculator.prototype.add = function (num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne

    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

    num1 = number1
    num2 = number2

    this.num1 = num1
    this.num2 = num2

    let sum;
    sum = this.num1 + this.num2

    this.history.push(sum)
    
    return sum
   
}

// Calculator.prototype.substract = function(num1, num2) {

//     const result = parseFloat(num1) - parseFloat(num2)
//     result = parseFloat(num1) + ' - ' +  parseFloat(num2) + ' = ' + result
//     return console.log(result)
// }

// Calculator.prototype.multiply = function(num1, num2) {


//     const result = parseFloat(num1) * parseFloat(num2)
//     result = parseFloat(num1) + ' * ' +  parseFloat(num2) + ' = ' + result
//     return console.log(result)
// }

// Calculator.prototype.divide = function(num1, num2) {


//     const result = parseFloat(num1) / parseFloat(num2)
//     result = parseFloat(num1) + ' / ' +  parseFloat(num2) + ' = ' + result
//     return console.log(result)
// }

// Calculator.prototype.power = function(number, power) {

//         if (power == 0){
//             return 1;
//             }
//         let temp = number;
//         let result = number
//         for (i = 0; i < power - 1; i++){
//             result = result * temp;
//         }
//         result = parseFloat(number) + ' ** ' +  parseFloat(power) + ' = ' + result
//         return console.log(result) 
// }







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
        

        if (Number.isNaN(number1)) {
            number1 = Number(prompt('Podaj liczbę nr 1'))
        } 

        if (Number.isNaN(number2)) {
            number2 = Number(prompt('Podaj liczbę nr 2'))
        } 

        if (action === '+') {
            calc.add(number1, number2);
        }

       
    }

} while (calc.isCorrectAction(action));