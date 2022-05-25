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

Calculator.prototype.addToHistory = function (result) {
    return this.history.push(result)
}

Calculator.prototype.displayResult = function (res) {
    return result = number1 + " " + action + " " + number2 + ' = ' + res
}

Calculator.prototype.add = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego rezultat
    // 4. dodaj do historii operacji to działanie w formie: 1 + 1 = 2
    const sum = num1 + num2
    calc.displayResult(sum)
    calc.addToHistory(result)
}

Calculator.prototype.subtract = function(num1, num2) {
    const sub = num1 - num2
    calc.displayResult(sub)
    calc.addToHistory(result)
}

Calculator.prototype.multiply = function(num1, num2) {
    const multi = num1 * num2
    calc.displayResult(multi)
    calc.addToHistory(result)
}

Calculator.prototype.divide = function(num1, num2) {
    if (num2 === 0) {
        alert('Nie dzieli się przez 0.')
    } else {
        const div = num1 / num2
        calc.displayResult(div)
        calc.addToHistory(result)
    }
}

Calculator.prototype.pow = function(num1, num2) {
    let pow = 1
    if (num2 === 0) {
        pow = 1;
    } else {
        for(let i=1; i<=num2; i++) {
        pow *= num1
        }
    }
    calc.displayResult(pow)
    calc.addToHistory(result)
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
        number1 = Number(prompt('Podaj liczbę nr 1'))
        number2 = Number(prompt('Podaj liczbę nr 2'))

        if (isNaN(number1) || isNaN(number2)) {
            alert('Podałeś błędne dane. Spróbuj ponownie.')
        } else
        if(action === '+') {
            calc.add(number1, number2)
        } else 
        if(action === '-') {
            calc.subtract(number1, number2)
        } else 
        if(action === '*') {
            calc.multiply(number1, number2)
        } else 
        if(action === '/') {
            calc.divide(number1, number2)
        } else 
        if(action === '^') {
            calc.pow(number1, number2)
        }
    } else 
    if (action === null) {  
    } else {
        alert('Nieprawidłowy operator działania.')
    } 
    
} while(calc.isCorrectAction(action));