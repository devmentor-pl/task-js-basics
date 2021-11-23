function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
}

Calculator.prototype.parseNumber = function (num) {
    return parseInt(num);
}

function checkNumber(num){
    if(typeof num === 'number' && typeof num !=='NaN'){
        return num;
    }
    return null;
}


Calculator.prototype.add = function(num1, num2) {
    let x = 0;
    if(checkNumber(num1)!==null && checkNumber(num2)!==null){ //((checkNumber(num1) || num1 ===0) && (checkNumber(num2) || num2 ===0))
        x = num1+num2;
        this.history.push(num1 + ' + ' + num2 + ' = ' + x );
    }
    return false;

    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}

Calculator.prototype.subtract = function(num1,num2){
    let x;
    if(checkNumber(num1)!==null && checkNumber(num2)!==null){
        x = num1-num2;
        this.history.push(num1 + ' - ' + num2 + ' = ' + x );
    }
    return null;
}

Calculator.prototype.multi = function(num1,num2){
    let x;
    if(checkNumber(num1)!==null && checkNumber(num2)!==null){
        x = num1*num2;
        this.history.push(num1 + ' * ' + num2 + ' = ' + x );
    }
}

Calculator.prototype.divi = function(num1,num2){
    let x;
    if((checkNumber(num1)!==null) && (checkNumber(num2)!==null && num2 !==0)){
        x = num1/num2;
        this.history.push(num1 + ' / ' + num2 + ' = ' + x );
    }
}

Calculator.prototype.expo = function(num1,num2){
    let x=1;
    let i=0;
    if(checkNumber(num1)!==null && checkNumber(num2)!==null){
        while(i<num2) {
            x *=num1;
            i++;
        }
        this.history.push(num1 + ' ^ ' + num2 + ' = ' + x );
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
    if (isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if (action === '+') {
           calc.add(calc.parseNumber(number1), calc.parseNumber(number2));
        }

        if (action === '-'){
            calc.subtract(calc.parseNumber(number1), calc.parseNumber(number2));
        }

        if (action === '*'){
            calc.multi(calc.parseNumber(number1), calc.parseNumber(number2));
        }

        if (action === '/'){
            calc.divi(calc.parseNumber(number1), calc.parseNumber(number2));
        }

        if (action === '^'){
            calc.expo(calc.parseNumber(number1), calc.parseNumber(number2));
        }
    }
} while (calc.isCorrectAction(action));

console.log(calc);