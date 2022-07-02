function Calculator() {
    this.actions = ['+', '-', '*', '/', '**'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

const action1 = new Calculator()
//console.log(action1.isCorrectAction('+'))


Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.add = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

    const result = parseFloat(num1) + parseFloat(num2)
    return console.log(result)
}

Calculator.prototype.substract = function(num1, num2) {
    

    const result = parseFloat(num1) - parseFloat(num2)
    return console.log(result)
}

Calculator.prototype.multiply = function(num1, num2) {
    

    const result = parseFloat(num1) * parseFloat(num2)
    return console.log(result)
}

Calculator.prototype.divide = function(num1, num2) {
    

    const result = parseFloat(num1) / parseFloat(num2)
    return console.log(result)
}

Calculator.prototype.power = function(number, power) {
    
        if (power == 0){
            return 1;
            }
        let temp = number;
        let result = number
        for (i = 0; i < power - 1; i++){
            result = result * temp;
        }
        return console.log(result)
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
        
       
       
       if(action === '+') {
            
            number1 = prompt('Podaj liczbę nr 1');
        
            if(Number.isNaN(number1)) {
                prompt('Podaj liczbę nr 1')
            } else {
                let num1;
                num1 = Number(number1)
                
            }

            number2 = prompt('Podaj liczbę nr 2') 

            if(Number.isNaN(number2)) {
                prompt('Podaj liczbę nr 2')
            } else {
                let num2;
                num2 = Number(number2)
            }

            calc.add(number1, number2);
        }

        if(action === '-') {

            number1 = prompt('Podaj liczbę nr 1');
        
            if(Number.isNaN(number1)) {
                prompt('Podaj liczbę nr 1')
            } else {
                let num1;
                num1 = Number(number1)
                
            }

            number2 = prompt('Podaj liczbę nr 2') 

            if(Number.isNaN(number2)) {
                prompt('Podaj liczbę nr 2')
            } else {
                let num2;
                num2 = Number(number2)
            }

            calc.substract(number1, number2);
        }

        if(action === '*') {

            number1 = prompt('Podaj liczbę nr 1');
        
            if(Number.isNaN(number1)) {
                prompt('Podaj liczbę nr 1')
            } else {
                let num1;
                num1 = Number(number1)
                
            }

            number2 = prompt('Podaj liczbę nr 2') 

            if(Number.isNaN(number2)) {
                prompt('Podaj liczbę nr 2')
            } else {
                let num2;
                num2 = Number(number2)
            }

            calc.multiply(number1, number2);
        }

        if(action === '/') {
            number1 = prompt('Podaj liczbę nr 1');
        
            if(Number.isNaN(number1)) {
                prompt('Podaj liczbę nr 1')
            } else {
                let num1;
                num1 = Number(number1)
                
            }

            number2 = prompt('Podaj liczbę nr 2') 

            if(Number.isNaN(number2)) {
                prompt('Podaj liczbę nr 2')
            } else {
                let num2;
                num2 = Number(number2)
            }

            calc.divide(number1, number2);
        }

        if(action === '**') {

            number = prompt('Podaj liczbę')
            if(Number.isNaN(number)) {
                prompt('Podaj liczbę nr 1')
            } else {
                let number1;
                number1 = Number(number)
                
            }
            power = prompt('Podaj potęgę')
            if(Number.isNaN(power)) {
                prompt('Podaj liczbę nr 1')
            } else {
                let power1;
                power1 = Number(power)
            }

            calc.power(number, power);
        }

    }
    
} while(calc.isCorrectAction(action))