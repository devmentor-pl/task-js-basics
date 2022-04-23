function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.alert = function(){
    return console.log('Wprowadzono niewłaściwą wartość \n Spróbuj jeszcze raz')
}


Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.add = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    let value1 = Number(num1)
    let value2 = Number(num2)
    if(!Number.isNaN(value1) && !Number.isNaN(value2)) {
        let result = value1 + value2
        this.history.push(value1 + ' + ' + value2 + ' = ' + result)
        // this.getHistoryAsString(value1 + '+' + value2 + '=' + result)
        return result
    } else {
        this.alert()
    }

}

Calculator.prototype.subtract = function(num1, num2) {

    let value1 = Number(num1)
    let value2 = Number(num2)
    if(!Number.isNaN(value1) && !Number.isNaN(value2)) {
        let result = value1 - value2
        this.history.push(value1 + ' - ' + value2 + ' = ' + result)
        return result
    } else {
        this.alert()
    }

}

Calculator.prototype.multiply = function(num1, num2) {
    let value1 = Number(num1)
    let value2 = Number(num2)
    if(!Number.isNaN(value1) && !Number.isNaN(value2)) {
        let result = value1 * value2
        this.history.push(value1 + ' * ' + value2 + ' = ' + result)
        return result
    } else {
        this.alert()
    }

}

Calculator.prototype.divide = function(num1, num2) {
    let value1 = Number(num1)
    let value2 = Number(num2)
    if(!Number.isNaN(value1) && !Number.isNaN(value2) && value2 !== 0) {
        let result = value1 / value2
        this.history.push(value1 + ' / ' + value2 + ' = ' + result)
        return result
    } else {
        this.alert()
    }

}

Calculator.prototype.exponentiation = function(num1, num2) {
    let value1 = Number(num1)
    let value2 = Number(num2)
    if(!Number.isNaN(value1) && !Number.isNaN(value2) && value2 >=1) {
        let result = value1
        for(let i = 1; i < value2; i++) {
            result *= value1
        }
        this.history.push(value1 + ' ^ ' + value2 + ' = ' + result)
        return result
    } else {
        this.alert()
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
        }else if(action === '-') {
            calc.subtract(number1, number2)
        }else if(action === '*') {
            calc.multiply(number1, number2)
        }else if(action === '/') {
            calc.divide(number1, number2)
        }else if(action === '^') {
            calc.exponentiation(number1, number2)
        } 
    }
    
} while(calc.isCorrectAction(action));