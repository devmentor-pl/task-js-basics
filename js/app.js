function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
    this.calculationResult = 0;
    
}

Calculator.prototype.getResult = function(action, num1, num2) {
    const operations = {
        "+": this.add,
        "-": this.subtraction,
        "*": this.multiplication,
        "/": this.division,
        "^": this.exponentiation
    };
    return operations[action](num1, num2);
}

Calculator.prototype.setCalculationResult = function(result) {
    this.calculationResult = result;
}


Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.getCalculationResult = function() {
    return this.calculationResult;
}

Calculator.prototype.add = function(num1, num2) {
    return num1 + num2;
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
};

Calculator.prototype.subtraction = function(number1, number2) {
    return number1 - number2;
};

Calculator.prototype.multiplication = function(number1, number2) {
    return number1 * number2;
};

Calculator.prototype.division = function(number1, number2) {
    return number1 / number2;
};

Calculator.prototype.exponentiation = function(number1, power) {
    let result = number1;
    for(let i = 1; i <= power; i++) {
        result *= number1;
    }
    return result;
};

Calculator.prototype.addToHistory = function(num1, action, num2, res) {
    this.history.push(`${num1} ${action} ${num2} = ${res}`);
}

function checkingVariableType(num) {
    if(isNaN(num)) {
        return 0;
    }
    
};

function parsingToInt(number, check) {
    check(number);
    return parseInt(number);
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
        number1 = parsingToInt(prompt('Podaj liczbę nr 1'), checkingVariableType);
        number2 = parsingToInt(prompt('Podaj liczbę nr 2'), checkingVariableType);
        let calcResult = 0;
        if(number1 && number2) {
            calcResult = calc.getResult(action, number1, number2);
            savedResult = calc.setCalculationResult(calcResult);
            calc.addToHistory(number1, action, number2, calcResult);
            console.log(calc.getCalculationResult());
        }
        
    }
    
} while(calc.isCorrectAction(action));