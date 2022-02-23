function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
    this.num1Float = 0;
    this.num2Float = 0;
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.check = function(num1, num2) {
    this.num1Float = parseFloat(num1);
    this.num2Float = parseFloat(num2);
    if(this.num1Float !== this.num1Float || this.num2Float !== this.num2Float) {
        return false;
    }
    else{
        return true;
    }
}

Calculator.prototype.add = function(num1, num2) {
    let result = 0;
    if(this.check(num1, num2)) {
        result = this.num1Float + this.num2Float;
        this.history.push(`${this.num1Float} + ${this.num2Float} = ${result}`);
        return result;
    }
    else {
        return NaN;
    }
    
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}

Calculator.prototype.sub = function(num1, num2) {
    let result = 0;
    if(this.check(num1, num2)) {
        result = this.num1Float - this.num2Float;
        this.history.push(`${this.num1Float} - ${this.num2Float} = ${result}`);
        return result;
    }
    else {
        return NaN;
    }
}

Calculator.prototype.multi = function(num1, num2) {
    let result = 1;
    if(this.check(num1, num2)) {
        result = this.num1Float * this.num2Float;
        this.history.push(`${this.num1Float} * ${this.num2Float} = ${result}`);
        return result;
    }
    else {
        return NaN;
    }
}

Calculator.prototype.div = function(num1, num2) {
    let result = 1;
    if(this.check(num1, num2) && (this.num2Float !==0)) {
        result = this.num1Float / this.num2Float;
        this.history.push(`${this.num1Float} / ${this.num2Float} = ${result}`);
        return result;
    }
    else {
        return NaN;
    }
}

Calculator.prototype.power = function(num1, num2) {
    let result = 1;
    if(this.check(num1, num2)) {
            if(this.num2Float>=0) {
                for(let i = 1; i <= this.num2Float; i++)
                result *= this.num1Float;
                this.history.push(`${this.num1Float} ^ ${this.num2Float} = ${result}`);
                return result;
            }
            else if(this.num2Float<0) {
                for(let i = 1; i <= Math.abs(this.num2Float); i++)
                result /= this.num1Float;
                this.history.push(`${this.num1Float} ^ ${this.num2Float} = ${result}`);
                return result;
            }
    }
    else {
        return NaN;
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

        if(action === '-') {
            calc.sub(number1, number2);
        }

        if(action === '*') {
            calc.multi(number1, number2);
        }

        if(action === '/') {
            calc.div(number1, number2);
        }

        if(action === '^') {
            calc.power(number1, number2);
        }
    }
    
} while(calc.isCorrectAction(action));