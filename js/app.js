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
    num1 = Number(num1);
    num2 = Number(num2);
    if (!isNaN(num1) && !isNaN(num2)){
        let result = num1 + num2;
        return this.history.push(num1 + ' + ' + num2 + ' = ' + result);
    } else {
        return alert('Podany parametr nie jest liczbą!');
    }
}

Calculator.prototype.sub = function(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (!isNaN(num1) && !isNaN(num2)){
        let result = num1 - num2;
        return this.history.push(num1 + ' - ' + num2 + ' = ' + result);
    } else {
        return alert('Podany parametr nie jest liczbą!');
    }
}

Calculator.prototype.mul = function(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (!isNaN(num1) && !isNaN(num2)){
        let result = num1 * num2;
        return this.history.push(num1 + ' * ' + num2 + ' = ' + result);
    } else {
        return alert('Podany parametr nie jest liczbą!');
    }
}

Calculator.prototype.div = function(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (!isNaN(num1) && !isNaN(num2)){
        if (num1 !== 0 && num2 !== 0){
            let result = num1 / num2;
            return this.history.push(num1 + ' / ' + num2 + ' = ' + result);
        } else {
            return alert('Podaj liczbę różną od 0!');
        }
    } else {
        return alert('Podany parametr nie jest liczbą!');
    }
}

Calculator.prototype.pow = function(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (!isNaN(num1) && !isNaN(num2)){
        if (num1 === 0 && num2 === 0) {
            return alert('Podaj jedną z liczb różną od 0!');
        } else if (num1 === 0) {
            let result = 0;
            return this.history.push(num1 + ' ^ ' + num2 + ' = ' + result);
        } else if (num2 === 0) {
            let result = 1;
            return this.history.push(num1 + ' ^ ' + num2 + ' = ' + result);
        } else {
            let i = 0;
            let result = 1;
            while (i < num2){
                result *= num1;
                i++;
            }
            return this.history.push(num1 + ' ^ ' + num2 + ' = ' + result);
        }
    } else {
        return alert('Podany parametr nie jest liczbą!');
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
        } else if (action === '-'){
            calc.sub(number1, number2);
        } else if (action === '*'){
            calc.mul(number1, number2);
        } else if (action === '/'){
            calc.div(number1, number2);
        } else if (action === '^'){
            calc.pow(number1, number2);
        }
    }
    
} while(calc.isCorrectAction(action));