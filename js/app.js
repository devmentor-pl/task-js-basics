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
    num1 = parseInt(number1)
    num2 = parseInt(number2)
    if (!(isNaN(num1 && num2))) {
        result = num1 + num2
        this.history.push(`${num1} + ${num2} = ${result}`)
    } else {
        console.log('Podaj cyfry!')
    }
}

Calculator.prototype.sub = function(num1, num2) {
    num1 = parseInt(number1)
    num2 = parseInt(number2)
    if (!(isNaN(num1 && num2))) {
        result = num1 - num2
        this.history.push(`${num1} - ${num2} = ${result}`)
    } else {
        console.log('Podaj cyfry!')
    }
}

Calculator.prototype.multi = function(num1, num2) {
    num1 = parseInt(number1)
    num2 = parseInt(number2)
    if (!(isNaN(num1 && num2))) {
        result = num1 * num2
        this.history.push(`${num1} * ${num2} = ${result}`)
    } else {
        console.log('Podaj cyfry!')
    }
}

Calculator.prototype.div = function(num1, num2) {
    num1 = parseInt(number1)
    num2 = parseInt(number2)
    if (!(isNaN(num1 && num2))) {
        if (num2 !== 0) {
            result = num1 / num2
            this.history.push(`${num1} / ${num2} = ${result}`)
        } else {
            console.log('Liczna nr 2 nie może być zerem!')
        }
    } else {
        console.log('Podaj cyfry!')
    }
}

Calculator.prototype.exp = function(num1, num2) {
    // jest kilka wzorów na obliczenie potęgi w zależości od wykładnika
    // może być dodatni lub ujemny lub być ułamkiem (dodatnim lub ujemnym)

    num1 = parseInt(number1)
    num2 = parseInt(number2)
    let base = num1 // podstawa potęgi

    if (num1 !== 0 ) {
        if (num2 === 0) {
            this.history.push(`${num1} ^ ${num2} = 1`)
        } else if (num2 < 0) {
            for (let i = 0; i < (((-1) * num2) - 1); i++) {
                num1 *= base
            }
            result = (1 / num1)
            this.history.push(`${base} ^ ${num2} = ${result}`)
        } else {
            for (let i = 0; i < num2 - 1; i++) {
                num1 *= base
            }
            result = num1
            this.history.push(`${base} ^ ${num2} = ${result}`)
        }
    } else {
        console.log('Podstawa potęgi musi być różna od zera!')
    }
}
/*
Calculator.prototype.ifNegNumb = function(number1) {
    // funkcja sprawdzająca, które liczby są ujemne. Gdy są podaje je w nawiasach
    // nie zdąrzyłem naprawić :(
    
    num1 = parseInt(number1)

    if (num1 < 0) {
        num1 = (`(${num1})`)
    }
}
*/
const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
let result = 0 // wynik kalkulacji
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