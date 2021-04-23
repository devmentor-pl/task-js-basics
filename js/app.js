
function Calculator() {
    this.actions = ['+', '-', '*', '/', '^', '%'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.isNumber = function (number) {

    if (typeof parseFloat(number) === 'number') {  //sprawdź czy number
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
Calculator.prototype.add = function(num1, num2) {
    let result = 0;
    do {
        result = parseFloat(num1) + parseFloat(num2);
        this.history.push(`${number1} + ${number2} = ${result}`);
        return result;
    } while (this.isNumber(num1) && this.isNumber(num2))
}

// odejmowanie (-)
Calculator.prototype.substraction = function(num1, num2) {
    let result = 0;
    do {
        result = parseFloat(num1) - parseFloat(num2);
        this.history.push(`${number1} - ${number2} = ${result}`);
        return result;
    } while (this.isNumber(num1) && this.isNumber(num2))
}

// mnożenie (*)
Calculator.prototype.multiplication = function(num1, num2) {
    let result = 0;
    do {
        result = parseFloat(num1) * parseFloat(num2);
        this.history.push(`${number1} * ${number2} = ${result}`);
        return result;
    } while (this.isNumber(num1) && this.isNumber(num2))
}

// dzielenie (/)
Calculator.prototype.divide = function(num1, num2) {
    let result = 0;
    do {
        result = parseFloat(num1) / parseFloat(num2);
        this.history.push(`${number1} / ${number2} = ${Math.round(result * 1000) / 1000}`);
        return Math.round(result * 1000) / 1000;
    } while (this.isNumber(num1) && this.isNumber(num2))
}

// potęgowanie (^) - wykonaj to rozwiązanie przy pomocy pętli, nie korzystaj z *Math.pow()*;
Calculator.prototype.exponentiation = function(num1, num2) {
    let result = 1;
    do {
        if (num2 <= 0) {
            result = 1;
        } else {
            for (let i = 1; i <= num2; i++) {
                result = result * num1;
            }
        }
        this.history.push(`${number1} ^ ${number2} = ${result}`);
        return result;
    } while (this.isNumber(num1) && this.isNumber(num2))
}

// modulo (%)
Calculator.prototype.modulo = function(num1, num2) {
    let result = 0;
    do {
        result = parseFloat(num1) % parseFloat(num2);
        this.history.push(`${number1} % ${number2} = ${result}`);
        return result;
    } while (this.isNumber(num1) && this.isNumber(num2))
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
                            if (action == '%') {
                                calc.modulo(number1, number2);
                            }
                        }
                    }
                }
            }
        }
    }
    
} while(calc.isCorrectAction(action));