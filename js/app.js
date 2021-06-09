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

// dodawanie
Calculator.prototype.add = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    let x = parseFloat(num1);
    let y = parseFloat(num2);
    let result = 0;
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    if(typeof x === 'number' && typeof y === 'number') {
        result = x + y; 
    }
    alert(result);
    this.history.push(`${x} ${action} ${y} = ${result}`)         
}

// Odejmowanie
Calculator.prototype.substr = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    let x = parseFloat(num1);
    let y = parseFloat(num2);
    let result = 0;


    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    if(typeof x === 'number' && typeof y === 'number') {
         result = x - y; 
    }
    alert(result);

    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    this.history.push(`${x} ${action} ${y} = ${result}`)         
}

// Mnożenie
Calculator.prototype.multiplication = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    let x = parseFloat(num1);
    let y = parseFloat(num2);
    let result = 0;

    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    if(typeof x === 'number' && typeof y === 'number') {
        result = x * y; 
    }
    alert(result);

    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    this.history.push(`${x} ${action} ${y} = ${result}`)        
}

// Dzielenie
Calculator.prototype.division = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    let x = parseFloat(num1);
    let y = parseFloat(num2);
    let result = 0;

    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    if(typeof x === 'number' && typeof y === 'number') {
        result = x / y; 
    }
    alert(result);

     // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    this.history.push(`${x} ${action} ${y} = ${result}`)
    
          
}

// Potęgowanie
Calculator.prototype.power = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    let x = parseFloat(num1);
    let y = parseFloat(num2);
    
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    if(typeof x === 'number' && typeof y === 'number') {
        let result = 1;
       for(let i = 0; i < y; i++) {
           result = result * x;
       }
       alert(result);

       // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
       this.history.push(`${x} ${action} ${y} = ${result}`)
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
        } else if (action === '-') {
            calc.substr(number1, number2)
        } else if (action === '*') {
            calc.multiplication(number1, number2)
        } else if (action === '/') {
            calc.division(number1, number2)
        } else if (action === '^') {
            calc.power(number1, number2);
        }    
    }
    
} while(calc.isCorrectAction(action));