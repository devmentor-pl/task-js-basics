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


Calculator.prototype.isCorrectNumber = function(num1, num2) {
    const numbers = '.0123456789';
    if(numbers.includes(num1) && numbers.includes(num2)) {
        return true;
    }
    else return false;
}

Calculator.prototype.add = function(num1, num2) {
    let a = Number(num1);
    let b = Number(num2);
    let solution = a + b;
    let solutionStr = `${a} + ${b} = ${solution}`;
    console.log(solution)
    this.history.push(solutionStr);
}

Calculator.prototype.minus = function(num1, num2) {
    let a = Number(num1);
    let b = Number(num2);
    let solution = a - b;      
    let solutionStr = `${a} - ${b} = ${solution}`;
    console.log(solution)
    this.history.push(solutionStr);
}

Calculator.prototype.multiply = function(num1, num2) {
    let a = Number(num1);
    let b = Number(num2);
    let solution = a * b;        
    let solutionStr = `${a} * ${b} = ${solution}`;
    console.log(solution)
    this.history.push(solutionStr);
}

Calculator.prototype.divide = function(num1, num2) {
    let a = Number(num1);
    let b = Number(num2);
    let solution = a / b;        
    let solutionStr = `${a} / ${b} = ${solution}`;
    console.log(solution)
    this.history.push(solutionStr);
}

Calculator.prototype.pow = function(num1, num2) {
    let a = Number(num1);
    let b = Number(num2);
    let solution = a;
        for(let i = 1; i < b; i++)
        {
            solution *= a;
        }
        let solutionStr = `${a} ^ ${b} = ${solution}`;
        console.log(solution)
        this.history.push(solutionStr);
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, letCorrectNumber, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction)
    {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');
        isCorrectNumber = calc.isCorrectNumber(number1, number2);
        if(isCorrectNumber) {
            if(action === '+') {
                calc.add(number1, number2);
            }
            if(action === '-') {
                calc.minus(number1, number2);
            }
            if(action === '*') {
                calc.multiply(number1, number2);
            }
            if(action === '/') {
                calc.divide(number1, number2);
            }
            if(action === '^') {
                calc.pow(number1, number2);
            }
        }
        else {
            alert("Niepoprawna liczba!");
        }

    } 
    else alert("Niepoprawna operacja!")
    }while(calc.isCorrectAction(action));
