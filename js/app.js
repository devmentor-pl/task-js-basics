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

Calculator.prototype.convertNumber = function(num) {
    const convertedNum = parseFloat(num);
    return convertedNum;
}

Calculator.prototype.isCorrectNumber = function(num) {
    if(Number.isNaN(Number(num))) {
        return false;
    }
    return true;
}

Calculator.prototype.add = function(num1, num2) {
    const convertednum1 = this.convertNumber(num1);
    const convertednum2 = this.convertNumber(num2);
    if(!this.isCorrectNumber(convertednum1) || !this.isCorrectNumber(convertednum2)) {
        alert ("Mozesz podac tylko liczbe. Jedna z wartosci nie jest liczba");
    }
    else {
        let result = convertednum1 + convertednum2;
        const addResult = this.history.push(convertednum1 + '+' + convertednum2 + '=' + result);
        return result;
    }       
}

Calculator.prototype.extract = function(num1, num2) {
    const convertednum1 = this.convertNumber(num1);
    const convertednum2 = this.convertNumber(num2);
    if(!this.isCorrectNumber(convertednum1) || !this.isCorrectNumber(convertednum2)) {
        alert ("Mozesz podac tylko liczbe. Jedna z wartosci nie jest liczba");
    }
    else {
        let result = convertednum1 - convertednum2;
        const addResult = this.history.push(convertednum1 + '-' + convertednum2 + '=' + result);
        return result;
    } 
}

Calculator.prototype.multiply = function(num1, num2) {
    const convertednum1 = this.convertNumber(num1);
    const convertednum2 = this.convertNumber(num2);
    if(!this.isCorrectNumber(convertednum1) || !this.isCorrectNumber(convertednum2)) {
        alert ("Mozesz podac tylko liczbe. Jedna z wartosci nie jest liczba");
    }
    else {
        let result = convertednum1 * convertednum2;
        const addResult = this.history.push(convertednum1 + '*' + convertednum2 + '=' + result);
        return result;
    } 
}

Calculator.prototype.divide = function(num1, num2) {
    const convertednum1 = this.convertNumber(num1);
    const convertednum2 = this.convertNumber(num2);
    if(!this.isCorrectNumber(convertednum1) || !this.isCorrectNumber(convertednum2)) {
        alert ("Mozesz podac tylko liczbe. Jedna z wartosci nie jest liczba");
    }
    else {
        if(convertednum2 === 0) {
            alert("Nie mozna dzielic przez zero");
        }
        else {
            let result = convertednum1 / convertednum2;
            const addResult = this.history.push(convertednum1 + '/' + convertednum2 + '=' + result);
            return result;
        }
    } 
}

Calculator.prototype.power = function(num1, num2) {
    const convertednum1 = this.convertNumber(num1);
    const convertednum2 = this.convertNumber(num2);
    if(!this.isCorrectNumber(convertednum1) || !this.isCorrectNumber(convertednum2)) {
        alert ("Mozesz podac tylko liczbe. Jedna z wartosci nie jest liczba");
    }
    else {
        let result = convertednum1 ** convertednum2;
        const addResult = this.history.push(convertednum1 + '^' + convertednum2 + '=' + result);
        return result;
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
            calc.add(number1, number2)}

        else if(action === '-') {
                calc.extract(number1, number2)
            }

        else if(action === '*') {
            calc.multiply(number1, number2)
        }

        else if(action === '/') {
            calc.divide(number1, number2)
        }

        else {
            calc.power(number1, number2)
        }
    }
    
} while(calc.isCorrectAction(action));
