function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
}

Calculator.prototype.addToHistory = function(number1, number2, action, result) {
    this.history.push(`${number1} ${action} ${number2} = ${result}`);
    localStorage.setItem('history', JSON.stringify(this.history));
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    let history = this.history;
    
    if (this.history.length > 20) {
        history = history.slice(-19);
        history.unshift('(...)')
    }
    return history.join('\n');
}

Calculator.prototype.add = function(num1, num2) {
    const result = num1 + num2;
    
    this.addToHistory(num1, num2, '+' , result);
    
    alert(`${number1} + ${number2} = ${result}`);
}

Calculator.prototype.sub = function(num1, num2) {
    const result = num1 - num2;
    
    this.addToHistory(num1, num2, '-' , result);
    
    alert(`${number1} - ${number2} = ${result}`);
}

Calculator.prototype.multi = function(num1, num2) {
    const result = num1 * num2;
    
    this.addToHistory(num1, num2, '*' , result);
    
    alert(`${number1} * ${number2} = ${result}`);
}

Calculator.prototype.div = function(num1, num2) {
    const result = num1 / num2;
    
    this.addToHistory(num1, num2, '/' , result);
    
    alert(`${number1} / ${number2} = ${result}`);
}

Calculator.prototype.exp = function(num1, num2) {
    if (num1 < 0 && num2 !== parseInt(num2)) {
        alert('Nie można wyciągnąć pierwiastka z liczby ujemnej');
        return;
    }
    
    const result = num1 ** num2;
    
    /* solution with loop
    let result = 1;
    
    function exponentPositive(number, exp) {
        let result = 1
        for (let i = 1; i <= exp; i++) {
            result = result * number;
        }
        
        return result;
    }
    
    function exponentNegative(number, exp) {
        let result = 1
        for (let i = -1; i >= num2; i--) {
            result = result / num1;
        }
        
        return result;
    }

    if (num2 !== parseInt(num2)) {
        result = num1 ** num2;
    } else if (num2 > 0) {
        exponentPositive(num1, num2);
    } else if (num2 < 0) {
        exponentNegative(num1, num2);
    }
    */
    
    this.addToHistory(num1, num2, '^' , result);
    
    alert(`${number1}^${number2} = ${result}`);
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
    promptContent = `Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź.
Jeśli chcesz zrezygnować wciśnij Anuluj.
Lista poprzednich operacji:
${calc.getHistoryAsString()}`

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        try {
            number1 = prompt('Podaj liczbę nr 1');
            number2 = prompt('Podaj liczbę nr 2');
            
            if(isNaN(Number(number1)) || isNaN(Number(number2))) {
                throw new Error('Musisz podać liczby! Pamiętaj, że w przypadku ułamków część dziesiętna powinna być oddzielona kropką (.)')
            }
            
            number1 = Number(number1);
            number2 = Number(number2);
            
        } catch (error) {
            alert(error.message)
        }
        
        switch (action) {
            case '+':
                calc.add(number1, number2);
                break;
            case '-':
                calc.sub(number1, number2);
                break;
            case '*':
                calc.multi(number1, number2);
                break;
            case '/':
                calc.div(number1, number2);
                break;
            case '^':
                calc.exp(number1, number2);
                break;
        }
    }
    
} while(calc.isCorrectAction(action));