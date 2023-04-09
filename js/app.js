function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
    this.calculationResult = 0;
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
    this.calculationResult = num1 + num2;
    // this.addToHistory(`${parsedNumbers[0]} + ${parsedNumbers[1]} = ${result}`);
    return `${num1} + ${num2} = ${this.calculationResult}`;
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
};

Calculator.prototype.subtraction = function(number1, number2) {
    this.calculationResult = number1 - number2;
    return `${number1} - ${number2} = ${this.calculationResult}`;
};

Calculator.prototype.multiplication = function(number1, number2) {
    this.calculationResult = number1 * number2;
    return `${number1} * ${number2} = ${this.calculationResult}`;
};

Calculator.prototype.division = function(number1, number2) {
    this.calculationResult = number1 / number2;
    return `${number1} / ${number2} = ${this.calculationResult}`;
};

Calculator.prototype.exponentiation = function(number1, power) {
    this.calculationResult = number1;
    for(let i = 1; i <= power; i++) {
        this.calculationResult *= number1;
    }
    return `${number1} ^ ${power} = ${this.calculationResult}`;
};

Calculator.prototype.addToHistory = function(calc) {
    this.history.push(calc);
}

function checkingVariableType(arr) {
    arr.forEach(function(num) {
        if(typeof num !== "number") {
            return 0;
        } else {
            return 1;
        }
    });
    
};

function parsingToInt(number) {
    if(isNaN(number)) {
        return 0;
    }
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
        number1 = parsingToInt(prompt('Podaj liczbę nr 1'));
        number2 = parsingToInt(prompt('Podaj liczbę nr 2'));
        console.log(typeof number1, typeof number2); 
        let calcResult = 0;
        console.log(checkingVariableType([number1, number2]));
        if(number1 && number2) {
            switch(action) {
                case "+":
                    calcResult = calc.add(number1, number2);
                    // console.log(calc.getHistoryAsString());
                    break;
                case "-":
                    calcResult = calc.subtraction(number1, number2);
                    break;
            }
            calc.addToHistory(calcResult);
            console.log(calc.getCalculationResult());
        }

        // if(action === '+') {
            // calc.add(number1, number2);
            // console.log(calc.getHistoryAsString());
        // } else if(action === "-") {

        // } else if(action === "*") {

        // } else if(action === "/") {

        // }
        
    }
    
} while(calc.isCorrectAction(action));