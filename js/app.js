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

// Calculator.prototype.sum = function(num1, num2) {

//     const result = Number(num1) + Number(num2)
//         if(isNaN(result) === true){
//             this.history.push ('Wprowadzono błędnie dane')
//         }else{
//             this.history.push ( (num1) + " + " + (num2) + ' = ' + (result))
//         return result
//         }
// }
// Calculator.prototype.subtract = function(num1, num2) {

//     const result = Number(num1) - Number(num2)
//         if(isNaN(result) === true){
//             this.history.push ('Wprowadzono błędnie dane')
//         }else{
//             this.history.push ( (num1) + " - " + (num2) + ' = ' + (result))
//         return result
//         }
// }
// Calculator.prototype.multiply = function(num1, num2) {

//     const result = Number(num1) * Number(num2)
//         if(isNaN(result) === true){
//             this.history.push ('Wprowadzono błędnie dane')
//         }else{
//             this.history.push ( (num1) + " * " + (num2) + ' = ' + (result))
//         return result
//         }
// }

Calculator.prototype.divide = function(num1, num2) {
    if((num1) === NaN){
        this.history.push ('Wprowadzono błędnie dane')
    }else if(num2 === 0){
            this.history.push ('Nie dzielimy przez 0')
    }else{
            result = num1 / num2
            return result
        }
}
Calculator.prototype.exponentiation = function(num1, num2) {

        if ((num2) === 0) {
            // this.history.push('1')
          return 1;   
        }
        let result = 1;
        for (let i = 0; i < num2; i++) {
          result = result * num1;
        }
        return result;
}
Calculator.prototype.changeToNumbers = function(num1, num2){
    const numbers = [Number(num1), Number(num2)]
    console.log(numbers)
    return numbers
}
Calculator.prototype.numbersAreCorrect = function(numbers){
    const containsNaN = numbers.some(Number.isNaN) //true if we check and find NaN
    if(containsNaN){
        this.history.push ('Wprowadzono błędne dane') //push some error
    }else {
        console.log(containsNaN) //checks if the numbers in the array are not NaN: if true - are; if false - aren't 
        return containsNaN 
    }
}
Calculator.prototype.getResult = function(num1, num2){
    let result;
    switch (action) {
        case "+":
            result = num1 + num2
            // result = Number(num1) + Number(num2)
            break
        case "-":
            result = num1 - num2
            break
        case "*":
            result = num1 * num2
            break
        case "/":
            result = this.divide(num1, num2)
            break
        case "^":
            result = this.exponentiation(num1, num2)
            break
            // default:
            //     this.history.push ('Wprowadzono błędne dane')
        }
        return result
    }  
 

Calculator.prototype.calculate = function (num1, num2){

    //1. Zamiana wprowadzonych danych na liczby
    console.log(num1, num2)
    const numbers = this.changeToNumbers(num1, num2)
    //2. Sprawdzenie czy wprowadzone dane są poprawne
    const isCorrect = this.numbersAreCorrect(numbers)
    //3. Wykonanie obliczeń pod warunkiem poprawności danych+
    let value

    if(!isCorrect){

        value = this.getResult(numbers[0], numbers[1])
        console.log(num1, num2)}

        if(value !==undefined && !isNaN(value)){
            this.history.push ( (num1) + (action) + (num2) + ' = ' + (value))
            console.log(( (num1) + (action) + (num2) + ' = ' + (value)))
            return value
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

    calc.calculate(number1, number2)

}


} while(calc.isCorrectAction(action))

//     return  console.log(Calculator.prototype.getOperatorFromUser(action))
    
// }
// else if (action === false)
// {
//     if(action === true){
//     alert("Wprowadzono błędy operator")}
//     else if(result ==! true){
//     console.log("hay")    
//     }
// }
//     if(calc.isCorrectAction(action) === false){
//         alert("Wprowadzono błędy operator")

//         // return start()
//     // } else if(calc.isCorrectAction(action) === null){
    
//     // }
//  }