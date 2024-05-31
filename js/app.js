function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.addToHistory = function(number1, number2, action, result) {
    this.history.push(`${number1} ${action} ${number2} = ${result}`);
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.add = function(num1, num2) {
    const result = num1 + num2;
    
    this.addToHistory(num1, num2, '+' , result);
    
    alert(`${number1} + ${number2} = ${result}`)
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}

Calculator.prototype.sub = function(num1, num2) {
    const result = num1 - num2;
    
    this.addToHistory(num1, num2, '-' , result);
    
    alert(`${number1} - ${number2} = ${result}`)
}

Calculator.prototype.multi = function(num1, num2) {
    const result = num1 * num2;
    
    this.addToHistory(num1, num2, '*' , result);
    
    alert(`${number1} * ${number2} = ${result}`)
}

Calculator.prototype.div = function(num1, num2) {
    const result = num1 / num2;
    
    this.addToHistory(num1, num2, '/' , result);
    
    alert(`${number1} / ${number2} = ${result}`)
}

Calculator.prototype.exp = function(num1, num2) {
    const result = num1 ** num2;
    
    /* solution with loop
    let result = 1
    
    if (num2 !== 0) {
        for (let i = 1; i <= num2; i++) {
            result = result * num1;
        }
    }
    */
    
    this.addToHistory(num1, num2, '^' , result);
    
    alert(`${number1}^${number2} = ${result}`)
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
        try {
            number1 = prompt('Podaj liczbę nr 1');
            number2 = prompt('Podaj liczbę nr 2');
            
            if(isNaN(Number(number1)) || isNaN(Number(number2))) {
                throw new Error('Musisz podać liczby!')
            }
            
            number1 = Number(number1);
            number2 = Number(number2);
            
        } catch (error) {
            alert(error.message)
        }

        if(action === '+') {
            calc.add(number1, number2);
        }
        
        if(action === '-') {
            calc.sub(number1, number2)
        }
        
        if(action === '*') {
            calc.multi(number1, number2)
        }
        
        if(action === '/') {
            calc.div(number1, number2)
        }
        
        if(action === '^') {
            calc.exp(number1, number2)
        }
    }
    
} while(calc.isCorrectAction(action));