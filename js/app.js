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


Calculator.prototype.isNumber = function(x)  {

    if( Number.isNaN( parseFloat(x) ) || !Number.isFinite( parseFloat(x) ) ) {
       return null;
    }
    else {
        return parseFloat(x);
    }
}


Calculator.prototype.add = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    const a = this.getNumber(num1);
    const b = this.getNumber(num2);

    if( a !== null && b !== null ) {
        const result = a + b;
        this.history.push(`${a} + ${b} = ${result}`)
        return result;
    }
}


Calculator.prototype.subtraction = function(num1, num2) {
    const a = this.getNumber(num1);
    const b = this.getNumber(num2);

    if( a !== null && b !== null ) {
        const result = a - b;
        this.history.push(`${a} - ${b} = ${result}`)
        return result;
    }
}

Calculator.prototype.multiply = function(num1, num2) {

    const a = this.getNumber(num1);
    const b = this.getNumber(num2);

    if( a !== null && b !== null ) {
        const result = a * b;
        this.history.push(`${a} * ${b} = ${result}`)
        return result;
    }
}

Calculator.prototype.division = function(num1, num2) {
    const a = this.getNumber(num1);
    const b = this.getNumber(num2);

    if( a !== null && b !== null ) {

        if(a === 0 || b === 0) {
            const result = 0;
            this.history.push(`${a} / ${b} = ${result}`)
            return result;
        }

        else {
        const result = a / b;
        this.history.push(`${a} / ${b} = ${result}`)
        return result;
        }
    }
}

Calculator.prototype.power = function(num1, num2) {
    const a = this.isNumber(num1);
    const b = this.isNumber(num2);
    let pow = 1;

    if( a !== null && b !== null ) {

        if(a === 0 && b === 0) {
            const result = 1;
            this.history.push(`${a} ^ ${b} = ${result}`)
            return result;
        }
        else if ( b < 0 ) {
            const limit = Math.abs(b)
            for(let i=1; i<=limit; i++) {
                pow *= a;
            }
            const result = 1 / pow;
            this.history.push(`${a} ^ ${b} = ${result}`);
            return result;
        }
        else {
            for(let i=1; i<=b; i++) {
                pow *= a;
            }
            const result = pow;
            this.history.push(`${a} ^ ${b} = ${result}`);
            return result;
        }
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
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if(action === '+') {
            calc.add(number1, number2);
        }
        else if(action === '-') {
            calc.subtraction(number1, number2);
        }
        else if(action === '*') {
            calc.multiply(number1, number2);
        }
        else if(action === '/') {
            calc.division(number1, number2);
        }
        else if(action === '^') {
            calc.power(number1, number2);
        }
    }

} while(calc.isCorrectAction(action));


