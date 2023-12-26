function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
    this.result = 0;
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.add = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    const numOne = Number(num1);
    const numTwo = Number(num2);
    // 2. sprawdź czy są one poprawne
    if (isNaN(numOne) || isNaN(numTwo)) {
        promptContent += '\nPodane wartości nie są liczbami. \nWciśnij Ok aby kontynuować';
        prompt(promptContent);
        return NaN;
    }
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    const result = numOne + numTwo;
    this.result = result;
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    const operation = `${numOne} + ${numTwo} = ${result}`;
    this.history.push(operation);
    return result;
}

Calculator.prototype.sub = function(num1, num2) {
    const numOne = Number(num1);
    const numTwo = Number(num2);

    if (isNaN(numOne) || isNaN(numTwo)) {
        promptContent += '\nPodane wartości nie są liczbami. \nWciśnij Ok aby kontynuować';
        prompt(promptContent);
        return NaN;
    }

    const result = numOne - numTwo;
    this.result = result;

    const operation = `${numOne} - ${numTwo} = ${result}`;
    this.history.push(operation);
    return result;
}

Calculator.prototype.multi = function(num1, num2) {
    const numOne = Number(num1);
    const numTwo = Number(num2);

    if (isNaN(numOne) || isNaN(numTwo)) {
        promptContent += '\nPodane wartości nie są liczbami. \nWciśnij Ok aby kontynuować';
        prompt(promptContent);
        return NaN;
    }

    const result = numOne * numTwo;
    this.result = result;

    const operation = `${numOne} * ${numTwo} = ${result}`;
    this.history.push(operation);
    return result;
}

Calculator.prototype.div = function(num1, num2) {
    const numOne = Number(num1);
    const numTwo = Number(num2);

    if (isNaN(numOne) || isNaN(numTwo)) {
        promptContent += '\nPodane wartości nie są liczbami. \nWciśnij Ok aby kontynuować';
        prompt(promptContent);
        return NaN;
    }

    const result = numOne / numTwo;
    this.result = result;

    const operation = `${numOne} / ${numTwo} = ${result}`;
    this.history.push(operation);
    return result;
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

        switch (action) {
            case '+':
                calc.add(number1, number2);
                break;
            case '-':
                calc.sub(number1, number2);
                break;
            case '*':
                calc.multi(number1, number2);
                break;
            case '/':
                calc.div(number1, number2);
                break;
            case '^':
                calc.exp(number1, number2);
                break;
            default:
                console.log('Nieprawidłowa operacja');
        }
    }
    
} while (true);