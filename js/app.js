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
    const number1 = parseFloat(num1)
    const number2 = parseFloat(num2)

    if(!isNaN(number1 && number2)) {
        const result = number1 + number2
        const correctForm = `${number1} + ${number2} = ${result}`
        this.history.push(correctForm)
    } else {
       alert('Wrong input format')
    }
}

Calculator.prototype.subtract = function(num1, num2) {
    const number1 = parseFloat(num1)
    const number2 = parseFloat(num2)

    if(!isNaN(number1 && number2)) {
        const result = number1 - number2
        const correctForm = `${number1} - ${number2} = ${result}`
        this.history.push(correctForm)
    } else {
        alert('wrong input format')
    }
}

Calculator.prototype.multiply = function(num1, num2) {
    const number1 = parseFloat(num1)
    const number2 = parseFloat(num2)

    if(!isNaN(number1 && number2)) {
        const result = number1 * number2
        const correctForm = `${number1} * ${number2} = ${result}`
        this.history.push(correctForm)
    } else alert('wrong input format')
}
Calculator.prototype.divide = function(num1, num2) {
    const number1 = parseFloat(num1)
    const number2 = parseFloat(num2)

    if(!isNaN(number1 && number2)) {
        if(number2 === 0) {
            alert("Cannot divide by zero")
            return
        }
        const result = number1 / number2
        const correctForm = `${number1} / ${number2} = ${result}`
        this.history.push(correctForm)
    } else alert('wrong input format')
}
Calculator.prototype.powering = function(num1, num2) {
    const number1 = parseFloat(num1)
    const number2 = parseFloat(num2)

    if(!isNaN(number1 && number2)) {
        let result = 1
        let counter = 0
        if(number2 === 0) {
            this.history.push(`${number1} ** 0 = 1`)
            return
        }
        while(counter < Math.abs(number2) ) {
            result = result * number1
            counter++
        }
        if(number2 < 0) {
            result = 1 / result
        }
        const correctForm = `${number1} ** ${number2} = ${result}`
        this.history.push(correctForm)
    } else alert('wrong input format')
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
            calc.multiply(number1, number2);
        }
        if(action === '/') {
            calc.divide(number1, number2);
        }
        if(action === '^') {
            calc.powering(number1, number2);
        }
        
    }
    
} while(calc.isCorrectAction(action));