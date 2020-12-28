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

Calculator.prototype.checkInput = function(txt) {
    return alert(txt);
}

Calculator.prototype.areCorrectNumber = function(num1, num2) {

    if (!isNaN(num1) && !isNaN(num2)) {
        return true;
    } else {
        return null;
    }
}


// Adding
Calculator.prototype.add = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    
    let result = 0;

    if (this.areCorrectNumber(num1,num2) === true) {
        result = num1 + num2;
        this.history.push(`${num1} + ${num2} = ${result}`);
    } 

    return null;
    
}

//Substract
Calculator.prototype.substract = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

    let result = 0;

    if (calc.areCorrectNumber(num1, num2) === true) {
        result = num1 - num2;
        this.history.push(`${num1} - ${num2} = ${result}`);
    }

    return null;
}

// Multiplication
Calculator.prototype.multiplication = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    let result = 0;

    if (calc.areCorrectNumber(num1, num2) === true) {
        result = num1 * num2;
        this.history.push(`${num1} * ${num2} = ${result}`);
    }

    return null;
}

//Devide
Calculator.prototype.devide = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    let result = 0;
    

    if (calc.areCorrectNumber(num1, num2) === true) {
        result = (num2 !== 0) ? (num1 / num2) : 0;
        this.history.push(`${num1} / ${num2} = ${result}`);
    }

    return null;
}

//Expentation
Calculator.prototype.exponentiation = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    let result = 1;

    if (this.areCorrectNumber(num1, num2) === true) {
        
        for(let i = 1; i <= num2; i++) {
            result *= num1;
        }
        this.history.push(`${num1}^${num2} = ${result}`);
    }


    return null;
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
        number1 = parseInt(prompt('Podaj liczbę nr 1'));
        number2 = parseInt(prompt('Podaj liczbę nr 2'));

        if(action === '+') {
            calc.add(number1, number2);
        }else if(action === '-') {
            calc.substract(number1, number2);
        } else if(action === '*') {
            calc.multiplication(number1, number2);
        } else if(action === '/') {
            calc.devide(number1, number2);
        }else if(action === '^') {
            calc.exponentiation(number1, number2);
        }
    } else {
        calc.checkInput('Plase Type following: (+, -, *, /, ^)');
    }
    
} while(calc.isCorrectAction(action));