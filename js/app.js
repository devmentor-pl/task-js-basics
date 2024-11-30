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

Calculator.prototype.getNumber = function(num1, num2){
    return [parseFloat(num1), parseFloat(num2)];
}

Calculator.prototype.checkCorrect = function(arr){
    return !(arr.some(item => isNaN(item)));
}

Calculator.prototype.expo = function(num1, num2){
    let i = 0;
    let result = 1;
    while(i < parseFloat(num2)){
        result *= parseFloat(num1)
        i++
    }
    return result;
}

Calculator.prototype.getResult = function(num1, num2){
    let result;
    switch (action){
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
        case '^':
            result = this.expo(num1, num2);
            break;
        default:
            break;
    }
    return result
}

Calculator.prototype.calculate = function(num1, num2){
    const array = this. getNumber(num1, num2);
    const ifCorrect = this.checkCorrect(array);
    if(ifCorrect){
        const result = this.getResult(num1, num2);
        this.history.push(`${num1} ${action} ${num2} = ${result}`);
    }
}

Calculator.prototype.add = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
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

        calc.calculate(number1, number2);
    }
    
} while(calc.isCorrectAction(action));