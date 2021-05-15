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
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if( Number.isNaN(a) || Number.isNaN(b) ) {
        this.history.push('Musisz podać liczby');
    }
    else if( !Number.isFinite(a) || !Number.isFinite(b) ) {
        this.history.push('Wyszedłeś poza możliwy zakres liczb');
    }
    else {
        const result = a + b;
        this.history.push(`${a} + ${b} = ${result}`)
        return result;
    }
}

Calculator.prototype.subtraction = function(num1, num2) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if( Number.isNaN(a) || Number.isNaN(b) ) {
        this.history.push('Musisz podać liczby');
    }
    else if( !Number.isFinite(a) || !Number.isFinite(b) ) {
        this.history.push( 'wyszedłeś poza możliwy zakres liczb' )
    }
    else {
        const result = a - b;
        this.history.push(`${a} - ${b} = ${result}`)
        return result;
    }
}

Calculator.prototype.multiply = function(num1, num2) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if( Number.isNaN(a) || Number.isNaN(b)) {

        this.history.push('Musisz podać liczby');
    }

    else if( !Number.isFinite(a) || !Number.isFinite(b) ) {
        this.history.push('Wyszedłeś poza zakres');
    }

    else if( a === 0 || b === 0) {

        const result = 0;
        this.history.push(`${a} * ${b} = ${result} (Mnożenie przez zero? To nie żaden pic! Wynikiem jest zawsze zwyczajne nic.)`)
        return result;
    }

    else {
        const result = a * b;
        this.history.push(`${a} * ${b} = ${result}`)
        return result;
    }
}

Calculator.prototype.division = function(num1, num2) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if( Number.isNaN(a) || Number.isNaN(b) ) {

        this.history.push('Musisz podać liczby');
    }

    else if( !Number.isFinite(a) || !Number.isFinite(b) ) {

        this.history.push('Wyszedłeś poza zakres');
    }

    else if( a === 0 || b === 0) {

        const result = 0;
        this.history.push(`${a} / ${b} = ${result} (Nie dzielimy przez 0, dla potrzeby przyjmijmy, że wynik to 0)`);
        return result;
    }

    else {
        const result = a / b;
        this.history.push(`${a} / ${b} = ${result}`)
        return result;
    }
}

Calculator.prototype.power = function(num1, num2) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if( Number.isNaN(a) || Number.isNaN(b)) {
        this.history.push('Musisz podać liczby');
    }
    else if( !Number.isFinite(a) || !Number.isFinite(b) ) {
        this.history.push('Wyszedłeś poza zakres');
    }
    else if( a === 0 && b === 0 ) {
        const result = 1;
        this.history.push(`${a} ^ ${b} = ${result} (Wynikiem jest symbol nieoznaczony, dla potrzeby zadania przyjmujemy, że wynik to 1)`);
        return result;
    }
    else if ( b < 0 ) {

        const limit = Math.abs(b)
        let pow = 1;
        for(let i=1; i<=limit; i++) {
           pow *= a;
        }
        const result = 1 / pow;
        console.log(result);
        this.history.push(`${a} ^ ${b} = ${result}`);
        return result;

    }
    else {
        let pow = 1;
        for(let i=1; i<=b; i++) {
           pow *= a;
        }
        this.history.push(`${a} ^ ${b} = ${pow}`);
        return pow;
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