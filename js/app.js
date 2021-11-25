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

Calculator.prototype.checkNumber = function(num) {
    let x = Number(num);
    if (!Number.isNaN(x)) {
      return x;
    }
}

Calculator.prototype.pushToHistory= function(result, num1, num2, operator) {
    this.history.push(`${num1} ${operator} ${num2} = ${result}`)
}

// dodawanie
Calculator.prototype.add = function(num1, num2) {
    let result = 0;
    result = this.checkNumber(num1) + this.checkNumber(num2);
    alert(result)
    this.pushToHistory(result, num1, num2, action);   
}

// Odejmowanie
Calculator.prototype.substr = function(num1, num2) {
    let result = 0;
    result = this.checkNumber(num1) - this.checkNumber(num2);
    alert(result)
    this.pushToHistory(result, num1, num2, action);   
}

// Mnożenie
Calculator.prototype.multiplication = function(num1, num2) {
    let result = 0;
    result = this.checkNumber(num1) * this.checkNumber(num2);
    alert(result)
    this.pushToHistory(result, num1, num2, action);   
}

// Dzielenie
Calculator.prototype.division = function(num1, num2) {
    let result = 0;
    result = this.checkNumber(num1) / this.checkNumber(num2);
    alert(result)
    this.pushToHistory(result, num1, num2, action);   
}

// Potęgowanie
Calculator.prototype.power = function(num1, num2) {
    let result = 1;
    let x = this.checkNumber(num2);
    if (isNaN(x)) {
        return alert("wykładnik jest NaN")
    } else {
        for(let i = 0; i < x; i++) {
            result = result * this.checkNumber(num1);
        } 
    }  
    alert(result)
    this.pushToHistory(result, num1, num2, action);   
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
        } else if (action === '-') {
            calc.substr(number1, number2)
        } else if (action === '*') {
            calc.multiplication(number1, number2)
        } else if (action === '/') {
            calc.division(number1, number2)
        } else if (action === '^') {
            calc.power(number1, number2);
        }    
    }
    
} while(calc.isCorrectAction(action));