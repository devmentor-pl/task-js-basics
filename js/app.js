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
    if( !(isNaN(num1) || isNaN(num2)) ) {
        let sum = num1 + num2;
        this.history.push(`${num1} + ${num2} = ${sum}`);
        } else {
            alert('Błąd');
        }
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}

Calculator.prototype.subst = function(num1, num2) {
    if(!(isNaN(num1) || isNaN(num2))){
        let subst = num1 - num2;
        this.history.push(`${num1} - ${num2} = ${subst}`);
        } else {
            alert('Błąd');
        }
}

Calculator.prototype.multi = function(num1, num2) {
    if(!(isNaN(num1) || isNaN(num2))){
        let multi = num1 * num2;
        this.history.push(`${num1} * ${num2} = ${multi}`);
        } else {
            alert('Błąd');
        }
}

Calculator.prototype.div = function(num1, num2) {
    if(!(isNaN(num1) || isNaN(num2))){
        if(num2 === 0) {
            alert('Dzielenie przez 0 jest zabronione!');
        } else {
            let div = num1 / num2;
            this.history.push(`${num1} / ${num2} = ${div}`);
        }
    } else {
        alert('Błąd');
    }
}


Calculator.prototype.exp = function(num1, num2) {
    if(!(isNaN(num1) || isNaN(num2))){
        let exp = 1;
        for(let i = 1; i <= num2; i++) {
            exp *= num1;
        }
        this.history.push(`${num1} ^ ${num2} = ${exp}`);
        } else {
            alert('Błąd');
        }
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
        number1 = parseInt(prompt('Podaj liczbę nr 1'));
        number2 = parseInt(prompt('Podaj liczbę nr 2'));

        if(action === '+') {
            calc.add(number1, number2);
        }

        if(action === '-') {
            calc.subst(number1, number2);
        }

        if(action === '*') {
            calc.multi(number1, number2);
        }

        if(action === '/') {
            calc.div(number1, number2);
        }

        if(action === '^') {
            calc.exp(number1, number2);
        }
    }
    
} while(calc.isCorrectAction(action));