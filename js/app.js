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
    const x=parseInt(num1);
    const y=parseInt(num2);
    if(typeof x==='number'&&typeof y==='number') {
        const result = x+y;
        this.history.push(x+'+'+y+'='+result);
    }
}

Calculator.prototype.subtract = function(num1, num2) {
    const x=parseInt(num1);
    const y=parseInt(num2);
    if(typeof x==='number'&&typeof y==='number') {
        const result = x - y;
        this.history.push(x+'-'+y+'='+result);
    }
}

Calculator.prototype.multiply = function(num1, num2) {
    const x=parseInt(num1);
    const y=parseInt(num2);
    if(typeof x==='number'&&typeof y==='number') {
        const result = x * y;
        this.history.push(x+'*'+y+'='+result);
    }
}

Calculator.prototype.divide = function(num1, num2) {
    const x=parseInt(num1);
    const y=parseInt(num2);
    if(typeof x==='number'&&typeof y==='number') {
        const result = x / y;
        this.history.push(x+'/'+y+'='+result);
    }
}

Calculator.prototype.power = function(num1, num2) {
    const x=parseInt(num1);
    const y=parseInt(num2);
    if(typeof x==='number'&&typeof y==='number') {
        let result = x;
        if(y!==0) {for(let i=2; i<=y; i++) {result*=x;}this.history.push(x+'^'+y+'='+result);} else {
            this.history.push(x+'^'+y+'='+1);
        }
    }
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;

do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \nJeśli chcesz zrezygnować wciśnij Anuluj.\nLista poprzednich operacji: \n' + calc.getHistoryAsString();
    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');
        switch(action) {
            case '+':
            calc.add(number1, number2);
            break;
            case '-':
            calc.subtract(number1, number2);
            break;
            case '*':
            calc.multiply(number1, number2);;
            break;
            case '/':
            calc.divide(number1, number2);;
            break;
            case '^':
            calc.power(number1, number2);
            break;
            default:
            alert('Dzialanie nie istnieje!');
            break;
        }
    }

} while(calc.isCorrectAction(action));

