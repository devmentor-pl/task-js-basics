function Calculator() {
    this.actions = {
        '+': this.add.bind(this),
        '-': this.sub.bind(this),
        '*': this.multi.bind(this),
        '/': this.div.bind(this),
        '^': this.power.bind(this),
    };
    this.history = [];
    this.result = 0;
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.validateNumberInput = function(num1, num2) {
    const isNum1Valid = !isNaN(Number(num1));
    const isNum2Valid = !isNaN(Number(num2));

    if (!isNum1Valid || !isNum2Valid) {
        promptContent += '\nPodane wartości nie są liczbami. \nWciśnij Ok aby kontynuować';
        prompt(promptContent);
        return false;
    }

    return true;
}

Calculator.prototype.add = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number

    // 2. sprawdź czy są one poprawne
    if (!this.validateNumberInput(num1, num2)) {
        return NaN;
    }
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    const result = num1 + num2;
    this.result = result;
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    const operation = `${num1} + ${num2} = ${result}`;
    this.history.push(operation);
    return result;
}

Calculator.prototype.sub = function(num1, num2) {


    if (!this.validateNumberInput(num1, num2)) {
        return NaN;
    }

    const result = num1 - num2;
    this.result = result;

    const operation = `${num1} - ${num2} = ${result}`;
    this.history.push(operation);
    return result;
}

Calculator.prototype.multi = function(num1, num2) {


    if (!this.validateNumberInput(num1, num2)) {
        return NaN;
    }

    const result = num1 * num2;
    this.result = result;

    const operation = `${num1} * ${num2} = ${result}`;
    this.history.push(operation);
    return result;
}

Calculator.prototype.div = function(num1, num2) {


    if (!this.validateNumberInput(num1, num2)) {
        return NaN;
    }

    if (num2 === 0) {
        promptContent += '\nNie można dzielić przez zero. Wprowadź inną liczbę dla dzielnika.';
        prompt(promptContent);
        return NaN;
    }

    const result = num1 / num2;
    this.result = result;

    const operation = `${num1} / ${num2} = ${result}`;
    this.history.push(operation);
    return result;
}

Calculator.prototype.power = function (num1, num2) {

    if (!this.validateNumberInput(num1, num2)) {
        return NaN;
    }

    let result = 1;

    for (let i = 0; i < num2; i++) {
        result *= num1;
    }

    this.result = result;

    const operation = `${num1} ^ ${num2} = ${result}`;
    this.history.push(operation);
    return result;
}



const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wpisz Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);

    if (action.toLowerCase() === 'anuluj') {
        break;
    }

    const operationFunction = calc.actions[action];

    if (operationFunction) {
        number1 = Number(prompt('Podaj liczbę nr 1'));
        number2 = Number(prompt('Podaj liczbę nr 2'));

        if (!isNaN(number1) && !isNaN(number2)) {
            calc.actions[action](number1, number2);
        } else {
            promptContent += '\nPodane wartości nie są liczbami. \nWciśnij Ok aby kontynuować';
            prompt(promptContent);
        }
    } else {
        promptContent += '\nNieprawidłowa operacja. \nWciśnij Ok aby kontynuować';
        prompt(promptContent);
    }
    
} while (true);
