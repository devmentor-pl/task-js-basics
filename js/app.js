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
    let integer = 0;
    let integerSecond = 0;
    
    if (typeof num1 !== 'number') {
        integer = parseInt(num1, 10)
    }
    if (typeof num2 !== 'number') {
        integerSecond = parseInt(num2, 10)
    }
    if (typeof integer === 'number' && typeof integerSecond === 'number') {
        var result = integer + integerSecond;
        }
    console.log(integer);
    console.log(integerSecond);
    console.log(result);
    let stringg = integer + "+" + integerSecond + "=" + result;
    return this.history.push(stringg);


    


    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}
Calculator.prototype.subtract = function(num1, num2) {
    let integer = 0;
    let integerSecond = 0;
    
    if (typeof num1 !== 'number') {
        integer = parseInt(num1, 10)
    }
    if (typeof num2 !== 'number') {
        integerSecond = parseInt(num2, 10)
    }
    if (typeof integer === 'number' && typeof integerSecond === 'number') {
        var resultSec = integer - integerSecond;
    }
    console.log(integer);
    console.log(integerSecond);
    console.log(resultSec);
    let stringg = integer + "-" + integerSecond + "=" + resultSec;
    return this.history.push(stringg);
    }
    Calculator.prototype.multi = function(num1, num2) {
        let integer = 0;
        let integerSecond = 0;
        
        if (typeof num1 !== 'number') {
            integer = parseInt(num1, 10)
        }
        if (typeof num2 !== 'number') {
            integerSecond = parseInt(num2, 10)
        }
        if (typeof integer === 'number' && typeof integerSecond === 'number') {
            var resultTrd = integer * integerSecond;
        }
        console.log(integer);
        console.log(integerSecond);
        console.log(resultTrd);
        let stringg = integer + "*" + integerSecond + "=" + resultTrd;
        return this.history.push(stringg);
        }
        Calculator.prototype.div = function(num1, num2) {
            let integer = 0;
            let integerSecond = 0;
            
            if (typeof num1 !== 'number') {
                integer = parseInt(num1, 10)
            }
            if (typeof num2 !== 'number') {
                integerSecond = parseInt(num2, 10)
            }
            if (typeof integer === 'number' && typeof integerSecond === 'number') {
                var resultFth = integer / integerSecond;
            }
            console.log(integer);
            console.log(integerSecond);
            console.log(resultFth);
            let stringg = integer + "/" + integerSecond + "=" + resultFth;
            return this.history.push(stringg);
            }
            Calculator.prototype.exp = function(num1, num2) {
                if (typeof num1 !== 'number') {
                    integer = parseInt(num1, 10)
                }
                if (typeof num2 !== 'number') {
                    integerSecond = parseInt(num2, 10)
                }
                if (typeof integer === 'number' && typeof integerSecond === 'number') {
                    var resultFiv = 1;
                for (var count = 0; count < integerSecond; count++){
                  resultFiv *= integer;
                  
                }
                console.log(resultFiv);
                }
                let stringg = integer + "^" + integerSecond + "=" + resultFiv;
                return this.history.push(stringg);
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
        if(action === '-') {
            calc.subtract(number1, number2);
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