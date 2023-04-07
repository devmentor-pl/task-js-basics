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

Calculator.prototype.add = function(num1, num2) {
    const numb1 = parseInt(num1); 
    const numb2 = parseInt(num2);
    if(checkingVariableType([numb1, numb2])) {
        const result = numb1 + numb2;
        this.addToHistory(`${numb1} + ${numb2} = ${result}`);
    } 
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}

Calculator.prototype.addToHistory = function(calc) {
    this.history.push(calc);
}

function checkingVariableType(arr) {
    arr.forEach((num) => {
        if(typeof num !== "number") {
            return false;
        }
    })
    return true;
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
            console.log(calc.getHistoryAsString());
        }
    }
    
} while(calc.isCorrectAction(action));