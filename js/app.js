function Calculator() {
    this.actions = ['+', '-', '*', '/'];
    this.powerAction = ['^']
    this.history = [];
    
}

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action);
}

Calculator.prototype.isCorrectPoweraction = function(action) {
    return this.powerAction.includes(action)
}

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

    let sumResult 

    sumResult = parseFloat(num1) + ' + ' +  parseFloat(num2) + ' = ' + sum

    this.history.push(sumResult)
    
    return sumResult
   
}

Calculator.prototype.substract = function(num1, num2) {

    num1 = number1
    num2 = number2

    this.num1 = num1
    this.num2 = num2

    let substract
    substract = this.num1 - this.num2

    let substractResult 

    substractResult = parseFloat(num1) + ' - ' +  parseFloat(num2) + ' = ' + substract

    this.history.push(substractResult)
    
    return substractResult
  
}

Calculator.prototype.multiply = function(num1, num2) {

    num1 = number1
    num2 = number2

    this.num1 = num1
    this.num2 = num2

    let multiply
    multiply = (this.num1 * this.num2)

    let multiplyResult

    multiplyResult = parseFloat(num1) + ' * ' +  parseFloat(num2) + ' = ' + multiply
    
    this.history.push(multiplyResult)
    
    return multiplyResult
}

Calculator.prototype.divide = function(num1, num2) {

    num1 = number1
    num2 = number2

    this.num1 = num1
    this.num2 = num2

    let divide
    divide = (this.num1 / this.num2)
    
    let divideResult

    divideResult = parseFloat(num1) + ' / ' +  parseFloat(num2) + ' = ' + divide
    this.history.push(divideResult)

    return divideResult

}

Calculator.prototype.power = function(num1, powerNumber) {

    num1 = number1
   
    this.num1 = num1
    this.powerNumber = powerNumber

    let powerResult

    if (powerNumber == 0){
                return 1;
            }

            let temp = num1;
           
            for (i = 0; i < powerNumber - 1; i++){
                num1 = num1 * temp;
            }
            powerResult = parseFloat(this.num1) + ' ** ' +  parseFloat(powerNumber) + ' = ' + num1
    
        this.history.push(powerResult)     
        
        return powerResult
}

const calc = new Calculator();

let action, promptContent, isCorrectAction,isCorrectPoweraction, number1, number2;
do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+,-,*, /,^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    isCorrectPoweraction = calc.isCorrectPoweraction(action);
    if (isCorrectAction) {

        number1 = Number(prompt('Podaj liczbę nr 1'));
        
        number2 = Number(prompt('Podaj liczbę nr 2'));

        if (Number.isNaN(number1)) {
            number1 = Number(prompt('Podaj liczbę nr 1'))
        } 

        if (Number.isNaN(number2)) {
            number2 = Number(prompt('Podaj liczbę nr 2'))
        } 

        if (Number.isNaN(powerNumber)) {
            powerNumber = Number(prompt('Podaj potęgę'))
        } 

        if (action === '+') {
            calc.add(number1, number2);
        }

        if (action === '-') {
            calc.substract(number1, number2);
        }

        if (action === '*') {
            calc.multiply(number1, number2);
        }

        if (action === '/') {
            
            calc.divide(number1, number2);
        }
        if (action === '^') {
            
            calc.power(number1, powerNumber);
        }
        
    } else if (isCorrectPoweraction) {
        number1 = Number(prompt('Podaj liczbę nr 1'));
        
        powerNumber = Number(prompt('Podaj potęgę'));

        if (Number.isNaN(number1)) {
            number1 = Number(prompt('Podaj liczbę nr 1'))
        } 

        if (Number.isNaN(powerNumber)) {
            powerNumber = Number(prompt('Podaj potęgę'))
        } 

        if (action === '^') {
            
            calc.power(number1, powerNumber);
        }
    }

} while (calc.isCorrectAction(action) || calc.isCorrectPoweraction(action));