function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
    this.result = 0
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.sendInfo = function(result, show){
    this.history.push(result)
    return this.result = show
}

Calculator.prototype.add = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    const number1 = Number(num1)
    const number2 = Number(num2)
    // 2. sprawdź czy są one poprawne
    if (isNaN(number1) || isNaN(number2)) {
        return NaN;
    }
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    const result = number1 + number2
    let x = `${number1} + ${number2} = ${result}`
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    this.sendInfo(x, result)
}

Calculator.prototype.sub = function(num1, num2) {
    const number1 = Number(num1)
    const number2 = Number(num2)
    
    if (isNaN(number1) || isNaN(number2)) {
        return NaN;
    }

    const result = number1 - number2
    let x = `${number1} - ${number2} = ${result}`

    this.sendInfo(x, result)
}

Calculator.prototype.mul = function(num1, num2) {
    const number1 = Number(num1)
    const number2 = Number(num2)
    
    if (isNaN(number1) || isNaN(number2)) {
        return NaN;
    }

    const result = number1 * number2
    let x = `${number1} * ${number2} = ${result}`

    this.sendInfo(x, result)
}

Calculator.prototype.div = function(num1, num2) {
    const number1 = Number(num1)
    const number2 = Number(num2)

    if (isNaN(number1) || isNaN(number2)) {
        return NaN;
    }    if(typeof number1 === 'isNan' && typeof number2 === 'isNan') return false

    if(number1 === 0 || number2 === 0 ) return false
    const result = number1 / number2
    let x = `${number1} / ${number2} = ${result}`

    this.sendInfo(x, result)
}

Calculator.prototype.exp = function(num1, num2) {
    const number1 = Number(num1)
    const number2 = Number(num2)
    
    if (isNaN(number1) || isNaN(number2)) {
        return NaN;
    }

    let result = 1
    let i = 0;
    let tab = []

    while(i < number2) {
        result *= number1
        i++
    }

    let x = `${number1} ^ ${number2} = ${result}`

    this.sendInfo(x, result)
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
            calc.mul(number1, number2);
        }
        if(action === '/') {
            calc.div(number1, number2);
        }
        if(action === '^') {
            calc.exp(number1, number2);
        }
        
    }
    
} while(calc.isCorrectAction(action));