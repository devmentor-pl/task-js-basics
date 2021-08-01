
function Calculator() {
    this.actions = ['+', '-', '*', '/', '^', '%'];
    this.history = [];
    this.result = 0;
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.isNumber = function (number) {
    if (typeof parseFloat(number) === 'number' || Number.isNaN(number)) {  //sprawdź czy number jest number lub NaN
        return true;
    } else {
        return alert('Nieprawidłowa wartość!');
    }
}

// 1. zamień wartości przekazane przez parametr na typ number
// 2. sprawdź czy są one poprawne
// 3. jeśli tak to wykonaj działanie i zapisz jego resultat
// 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

// dodawanie (+)
Calculator.prototype.add = function(number1, number2) {
    if (this.isNumber(number1) && this.isNumber(number2)) {
        this.result = parseFloat(number1) + parseFloat(number2);
        calc.addToHistory();
    }
}

// odejmowanie (-)
Calculator.prototype.substraction = function(number1, number2) {
    if (this.isNumber(number1) && this.isNumber(number2)) {
        this.result = parseFloat(number1) - parseFloat(number2);
        calc.addToHistory();
    }
}

// mnożenie (*)
Calculator.prototype.multiplication = function(number1, number2) {
    if (this.isNumber(number1) && this.isNumber(number2)) {
        this.result = parseFloat(number1) * parseFloat(number2);
        calc.addToHistory();
    }
}

// dzielenie (/)
Calculator.prototype.divide = function(number1, number2) {
    if (this.isNumber(number1) && this.isNumber(number2)) {
        this.result = parseFloat(number1) / parseFloat(number2);
        calc.addToHistory();
    }
}

// potęgowanie (^) - wykonaj to rozwiązanie przy pomocy pętli, nie korzystaj z *Math.pow()*;
Calculator.prototype.exponentiation = function(number1, number2) {
    this.result = 1;
    if (this.isNumber(number1) && this.isNumber(number2)) {
        if (number2 <= 0) {
            this.result = 1;
        } else {
            for (let i = 1; i <= number2; i++) {
                this.result = this.result * number1;
            }
        }
        calc.addToHistory();
    }
}

// modulo (%)
Calculator.prototype.modulo = function(number1, number2) {
    if (this.isNumber(number1) && this.isNumber(number2)) {
        this.result = parseFloat(number1) % parseFloat(number2);
        calc.addToHistory();
    }
}

// dodaj do historii
Calculator.prototype.addToHistory = function () {
    this.history.push(`${number1} ${action} ${number2} = ${this.result}`);
}

const calc = new Calculator();

let action, promptContent, isCorrectAction, number1, number2;

do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^, %) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);

    if (isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if (action === '+') {
            calc.add(number1, number2);
        } else {
            if (action === '-') {
                calc.substraction(number1, number2);
            } else {
                if (action === '*') {
                    calc.multiplication(number1, number2);
                } else {
                    if (action === '/') {
                        calc.divide(number1, number2);
                    } else {
                        if (action === '^') {
                            calc.exponentiation(number1, number2);
                        } else {
                            if (action === '%') {
                                calc.modulo(number1, number2);
                            }
                        }
                    }
                }
            }
        }
    }
    
} while(calc.isCorrectAction(action));

