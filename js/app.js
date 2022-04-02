function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action);
}

Calculator.prototype.addHistory = function (operation) {
    this.history.push(operation)
}
Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
}
Calculator.prototype.infoOparation = function (number1, number2, operator, result) {
    operation = number1 + operator + number2 + '=' + result
    console.log(operation)
    this.addHistory(operation)  
}
Calculator.prototype.operation = function (num1, num2, action) {
    console.log('operation')

    // 1. zamień wartości przekazane przez parametr na typ number
    const number1 = parseFloat(num1)
    const number2 = parseFloat(num2)

    // 2. sprawdź czy są one poprawne
    console.log('--- check numbers ---')
    console.log('number 1 =', number1, !isNaN(number1))
    console.log('number 2 =', number2, !isNaN(number2))

    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    if (!isNaN(number1) && !isNaN(number2)) {
        let result = null
        let operation = null
        switch(action) {
            case '+':
                result = number1 + number2
                // operation = number1 + '+' + number2 + '=' + result
                // console.log(operation)
                // this.addHistory(operation)  
                this.infoOparation(number1, number2, action, result)
                break
            case '-':
                result = number1 - number2
                // operation = number1 + '-' + number2 + '=' + result
                // console.log(operation)
                // this.addHistory(operation) 
                this.infoOparation(number1, number2, action, result) 
                break
            case '*':
                result = number1 * number2
                // operation = number1 + 'x' + number2 + '=' + result
                // console.log(operation)
                // this.addHistory(operation) 
                this.infoOparation(number1, number2, action, result) 
                break
            case '/':
                if(number2 === 0) {
                    console.log('You can not divide by 0')
                    this.addHistory('You can not divide by 0') 
                    break
                }
                result = number1 / number2
                // operation = number1 + '/' + number2 + '=' + result
                // console.log(operation)
                // this.addHistory(operation)  
                this.infoOparation(number1, number2, action, result) 
                break
            case '^':
                if(number2 < 0) {
                    const info = 'You can not exponentiation for minus exponent'
                    console.log(info)
                    this.addHistory(info) 
                    break
                }
                result = 1     
                for(let i=1; i<=number2; i++) {
                    result *= number1
                } 
                // const exponentiation = number1 + '^' + number2 + '=' + result
                // console.log(exponentiation)
                // this.addHistory(exponentiation) 
                this.infoOparation(number1, number2, action, result)  
                break
            default:
                console.log("there isn't such operation")
                break
        }     
    } else {
        console.log('Operation not correct')
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
    if (isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        calc.operation(number1, number2, action);

    }

} while (calc.isCorrectAction(action));