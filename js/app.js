function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    console.log(this.history.join('\n'))
    return this.history.join('\n');
}

Calculator.prototype.add = function(num1, num2) {
    const firstNumber = Number(num1)
    const secondNumber = Number(num2)

    let sum
    
    if(!isNaN(firstNumber) && !isNaN(secondNumber)){
        sum = firstNumber + secondNumber;
        this.history.push(num1 + '+' + num2 + '=' + sum);
        return sum
    } else {
        alert('Wpisz prawidłowe dane!')
    }

}

Calculator.prototype.sub = function(num1, num2) {
    const firstNumber = Number(num1)
    const secondNumber = Number(num2)

    let subResult
    
    if(!isNaN(firstNumber) && !isNaN(secondNumber)){
        subResult = firstNumber - secondNumber;
        this.history.push(num1 + '-' + num2 + '=' + subResult);
        return subResult
    } else {
        alert('Wpisz prawidłowe dane!')
    }

}
Calculator.prototype.multiply = function(num1, num2) {
    const firstNumber = Number(num1)
    const secondNumber = Number(num2)

    let multiResult
    
    if(!isNaN(firstNumber) && !isNaN(secondNumber)){
        multiResult = firstNumber * secondNumber;
        this.history.push(num1 + '*' + num2 + '=' + multiResult);
        return multiResult
    } else {
        alert('Wpisz prawidłowe dane!')
    }

}
Calculator.prototype.divide = function(num1, num2) {
    const firstNumber = Number(num1)
    const secondNumber = Number(num2)

    let divResult
    
    if(!isNaN(firstNumber) && !isNaN(secondNumber) && secondNumber !==0){
        divResult = firstNumber / secondNumber;
        this.history.push(num1 + '/' + num2 + '=' + divResult);
        return divResult
    } else {
        alert('Nie można dzielić przez 0!')
    }

}
Calculator.prototype.exponentiation = function(num1, num2) {
    const firstNumber = Number(num1)
    const secondNumber = Number(num2)

    let expoResult = firstNumber
    if(!isNaN(firstNumber) && !isNaN(secondNumber)){
        if(secondNumber === 0 || (firstNumber === 0 && secondNumber ===0)){
            expoResult = 1
        } else if(firstNumber === 0){
            expoResult = 0
        } else {
            for(let i = 1; i < secondNumber; i++){
                expoResult = expoResult * firstNumber
        } 
}          
    this.history.push(num1 + '^' + num2 + '=' + expoResult);
}   else {
    alert('Wpisz prawidłowe dane!')
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
        } else if (action === '-'){
            calc.sub(number1, number2)
        } else if (action === '*'){
            calc.multiply(number1, number2)
        } else if (action === '/'){
            calc.divide(number1, number2)
        } else if (action === '^'){
            calc.exponentiation(number1, number2)
        }

    } 
    
} while(calc.isCorrectAction(action));

