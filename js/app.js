function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
}

Calculator.prototype.addToHistory = function(number1, number2, action, result) {
    this.history.push(operationMessage(number1, number2, action, result));
    localStorage.setItem('history', JSON.stringify(this.history));
}

Calculator.prototype.isCorrectAction = function(action) {
    if (!this.actions.includes(action) && action !== null) {
        console.error(
          'Podano niepoprawny symbol działania.'
        )
    }
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

Calculator.prototype.clearHistory = function() {
    localStorage.clear();
    this.history = [];
}

const operationMessage = (number1, number2, action, result) => {
    return `${number1} ${action} ${number2} = ${result}`
}

Calculator.prototype.operationAction = function (number1, number2, action, result) {
    this.addToHistory(number1, number2, action , result);
    alert(operationMessage(number1, number2, action , result));
}

Calculator.prototype.add = function(number1, number2) {
    const result = number1 + number2;
    this.operationAction(number1, number2, '+' , result);
}

Calculator.prototype.sub = function(number1, number2) {
    const result = number1 - number2;
    this.operationAction(number1, number2, '-' , result);
}

Calculator.prototype.multi = function(number1, number2) {
    const result = number1 * number2;
    this.operationAction(number1, number2, '*' , result);
}

Calculator.prototype.div = function(number1, number2) {
    const result = number1 / number2;
    this.operationAction(number1, number2, '/' , result);
}

Calculator.prototype.exp = function(number1, number2) {
    try {
        if (number1 < 0 && number2 !== parseInt(number2)) {
            throw new Error('Nie można wyciągnąć pierwiastka z liczby ujemnej')
        }
        const result = number1 ** number2;
        
        this.operationAction(number1, number2, '^', result);
        
    } catch (error) {
        alert(error.message);
    }
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;

if (confirm('Wyczyścić historię operacji?')) {
    calc.clearHistory()
}

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