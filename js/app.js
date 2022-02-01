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


Calculator.prototype.isNumber = function(x)  {
    const parsedValue = parseFloat(x)

    if( Number.isNaN( parsedValue ) || !Number.isFinite( parsedValue ) ) { return null; }
    return parsedValue;
}


Calculator.prototype.add = function(num1, num2) {
    const a = this.isNumber(num1);
    const b = this.isNumber(num2);

    if( a !== null && b !== null ) {
        const result = a + b;
        this.history.push(`${a} + ${b} = ${result}`)
        return result;

    } return alert('Inncorect data');
}


Calculator.prototype.subtraction = function(num1, num2) {
    const a = this.isNumber(num1);
    const b = this.isNumber(num2);

    if( a !== null && b !== null ) {
        const result = a - b;
        this.history.push(`${a} - ${b} = ${result}`)
        return result;

    } return alert('Inncorect data');
}

Calculator.prototype.multiply = function(num1, num2) {

    const a = this.isNumber(num1);
    const b = this.isNumber(num2);

    if( a !== null && b !== null ) {
        const result = a * b;
        this.history.push(`${a} * ${b} = ${result}`)
        return result;

    } return alert('Inncorect data');
}

Calculator.prototype.division = function(num1, num2) {
    const a = this.isNumber(num1);
    const b = this.isNumber(num2);
    let result;

    if( a !== null && b !== null ) {

        if( a === 0 || b === 0) {
            result = 0;
        }
        else {
            result = a / b;
        }
    this.history.push(`${a} / ${b} = ${result}`)
    return result;

} return alert('Inncorect data');

}

Calculator.prototype.power = function(num1, num2) {
    const a = this.isNumber(num1);
    const b = this.isNumber(num2);
    let result = 1;

    if( a !== null && b !== null ) {

        if ( b < 0 ) {
            const limit = Math.abs(b)
            for(let i=1; i<=limit; i++) {
                result *= a;
            }
            result = 1 / result
        }
        else {
            for(let i=1; i<=b; i++) {
                result *= a;
            }
        }
        this.history.push(`${a} ^ ${b} = ${result}`);
        return result;

    } return alert('Inncorect data');
}



const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
    promptContent = 'Enter the operation you want to perform (+, -, *, /, ^) and confirm. \n';
    promptContent += 'If you want to quit, click Cancel. \n';
    promptContent += 'List of previous operations: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = prompt('Enter the first number');
        number2 = prompt('Enter the second number');

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