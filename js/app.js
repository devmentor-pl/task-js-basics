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
    const firstNum = parseInt(num1);
    const secondNum = parseInt(num2);

    if((isNaN(firstNum)) || (isNaN(secondNum))) {
        alert('Wprowadzono nieprawidłowe wartości.');
    } else {
        const addition = (firstNum + ' + ' + secondNum + ' = ' + (firstNum + secondNum));
        console.log(addition); 
        this.history.push(addition);
        return addition;
    }
    
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}

Calculator.prototype.subtract = function(num1, num2) {
    const firstNum = parseInt(num1);
    const secondNum = parseInt(num2);

    if((isNaN(firstNum)) || (isNaN(secondNum))) {
        alert('Wprowadzono nieprawidłowe wartości.');
    } else {
        const subtraction = (firstNum + ' - ' + secondNum + ' = ' + (firstNum - secondNum));
        console.log(subtraction);
        this.history.push(subtraction);
        return subtraction;
    }
}
Calculator.prototype.multiply = function(num1, num2) {
    const firstNum = parseInt(num1);
    const secondNum = parseInt(num2);

    if((isNaN(firstNum)) || (isNaN(secondNum))) {
        alert('Wprowadzono nieprawidłowe wartości.');
    } else {
        const multiplication = (firstNum + ' * ' + secondNum + ' = ' + (firstNum * secondNum));
        console.log(multiplication);
        this.history.push(multiplication);
        return multiplication; 
    }
}
Calculator.prototype.divide = function(num1, num2) {
    const firstNum = parseInt(num1);
    const secondNum = parseInt(num2);

    if((isNaN(firstNum)) || (isNaN(secondNum))) {
        alert('Wprowadzono nieprawidłowe wartości.');
    } else if((firstNum === 0) || (secondNum === 0)) {
        alert('Nie wolno dzielić przez zero :)')
    } else {
        const division = (firstNum + ' / ' + secondNum + ' = ' + (firstNum / secondNum)); 
        console.log(division);
        this.history.push(division);
        return division;
    }
}

Calculator.prototype.increase = function(num1, num2) {
    const firstNum = parseInt(num1);
    const secondNum = parseInt(num2);

    if((isNaN(firstNum)) || (isNaN(secondNum))) {
        alert('Wprowadzono nieprawidłowe wartości.');
    } else {
        let leftSideOfResult;
       let i = 1;
        while (i <= secondNum) {
            if (i === 1) {
                leftSideOfResult = firstNum;
            } else {
                leftSideOfResult = leftSideOfResult + ' * ' + firstNum;
            }
            i++;
    }
    const exponentiation = (leftSideOfResult + ' = ' + Math.pow(firstNum, secondNum)); 
    console.log(exponentiation);
    return this.history.push(exponentiation);
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
        } else if(action === '-') {
            calc.subtract(number1, number2);
        } else if(action === '*') {
            calc.multiply(number1, number2);
        } else if(action === '/') {
            calc.divide(number1, number2);
        } else if(action === '^') {
            calc.increase(number1, number2);
        }
    }
    
} while(calc.isCorrectAction(action));