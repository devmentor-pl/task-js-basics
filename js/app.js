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

// dodawanie
Calculator.prototype.add = function(num1, num2) {
    
    let x = parseFloat(num1);
    let y = parseFloat(num2);
    let result = 0;
    let historyArray = this.history;
    console.log(x);
    console.log(y);

    function checkNumber () {
        if (!Number.isNaN(x) && !Number.isNaN(y)) {
            result = x + y;
        } else {
            result = "is NaN - please check your entry number"
        }
    }
    
    function showResult (checkNumber) {
        alert(result);
    }
    
    function pushToHistory (arr, operator) {
        arr.push(`${x} ${operator} ${y} = ${result}`)  
    } 

    checkNumber();
    showResult();
    pushToHistory(historyArray, action);                      
}

// Odejmowanie
Calculator.prototype.substr = function(num1, num2) {
    
    let x = parseFloat(num1);
    let y = parseFloat(num2);
    let result = 0;
    let historyArray = this.history;
    console.log(x);
    console.log(y);

    function checkNumber () {
        if (!Number.isNaN(x) && !Number.isNaN(y)) {
            result = x - y;
        } else {
            result = "is NaN - please check your entry number"
        }
    }
    
    function showResult (checkNumber) {
        alert(result);
    }
    
    function pushToHistory (arr, operator) {
        arr.push(`${x} ${operator} ${y} = ${result}`)  
    } 

    checkNumber();
    showResult();
    pushToHistory(historyArray, action);         
}

// Mnożenie
Calculator.prototype.multiplication = function(num1, num2) {
    
    let x = parseFloat(num1);
    let y = parseFloat(num2);
    let result = 0;
    let historyArray = this.history;
    console.log(x);
    console.log(y);

    function checkNumber () {
        if (!Number.isNaN(x) && !Number.isNaN(y)) {
            result = x * y;
        } else {
            result = "is NaN - please check your entry number"
        }
    }
    
    function showResult (checkNumber) {
        alert(result);
    }
    
    function pushToHistory (arr, operator) {
        arr.push(`${x} ${operator} ${y} = ${result}`)  
    } 

    checkNumber();
    showResult();
    pushToHistory(historyArray, action);          
}

// Dzielenie
Calculator.prototype.division = function(num1, num2) {
    
    let x = parseFloat(num1);
    let y = parseFloat(num2);
    let result = 0;
    let historyArray = this.history;
    console.log(x);
    console.log(y);

    function checkNumber () {
        if (!Number.isNaN(x) && !Number.isNaN(y)) {
            result = x / y;
        } else {
            result = "is NaN - please check your entry number"
        }
    }
    
    function showResult (checkNumber) {
        alert(result);
    }
    
    function pushToHistory (arr, operator) {
        arr.push(`${x} ${operator} ${y} = ${result}`)  
    } 

    checkNumber();
    showResult();
    pushToHistory(historyArray, action);                
}

// Potęgowanie
Calculator.prototype.power = function(num1, num2) {
    
    let x = parseFloat(num1);
    let y = parseFloat(num2);
    let result = 1;
    let historyArray = this.history;
    console.log(x);
    console.log(y);

    function checkNumber () {
        if (!Number.isNaN(x) && !Number.isNaN(y)) {    
            for(let i = 0; i < y; i++) {
           result = result * x;
        }} else {
            result = "is NaN - please check your entry number"
        }
    }
    
    function showResult (checkNumber) {
        alert(result);
    }
    
    function pushToHistory (arr, operator) {
        arr.push(`${x} ${operator} ${y} = ${result}`)  
    } 

    checkNumber();
    showResult();
    pushToHistory(historyArray, action);  

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