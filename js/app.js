function Calculator() {
    // this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
    this.operations = {
        '+': this.add,
        '-': this.substract,
        '*': this.multiply,
        '/': this.divide,
        '^': this.pow,
    };
};

// Calculator.prototype.isCorrectAction = function(action) {
//     return this.actions.includes(action);
// }

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.isCorrectNumber = function(a, b) {
        if((typeof parseInt(a) == 'number') && (typeof parseInt(b) == 'number')) {
            return true;
        }
    else return false;
}

Calculator.prototype.add = function(a, b) {
    let solution = Number(a) + Number(b);  
    let solutionStr = `${a} + ${b} = ${solution}`;
    calc.history.push(solutionStr);
}

Calculator.prototype.substract = function(a, b) {
    let solution = Number(a) - Number(b);     
    let solutionStr = `${a} - ${b} = ${solution}`;
    calc.history.push(solutionStr);
}

Calculator.prototype.multiply = function(a, b) {
    let solution = Number(a) * Number(b);     
    let solutionStr = `${a} * ${b} = ${solution}`;
    calc.history.push(solutionStr);
}

Calculator.prototype.divide = function(a, b) {
    let solution = Number(a) / Number(b);        
    let solutionStr = `${a} / ${b} = ${solution}`;
    calc.history.push(solutionStr);
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
        calc.history.push(solutionStr);
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, letCorrectNumber, a, b, actionFunc;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    actionFunc = calc.operations[action];
    if(typeof actionFunc === 'function')
    {
        a = prompt('Podaj liczbę nr 1');
        b = prompt('Podaj liczbę nr 2');
        isCorrectNumber = calc.isCorrectNumber(a, b);
        if(isCorrectNumber) {
                actionFunc(a, b);
        }
        else {
            alert("Niepoprawna liczba!");
        }
    } 
    else alert("Niepoprawna operacja!")
   
}while(actionFunc);

