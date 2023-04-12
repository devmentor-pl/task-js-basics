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

    const num1Int = Number(num1)
    const num2Int = Number(num2)

    const sum = num1Int + num2Int
    return sum

    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego rezultat
    // 4. dodaj do historii operacji to działanie w formie: 1 + 1 = 2
}

Calculator.prototype.sub = function(num1, num2) {

    const num1Int = Number(num1)
    const num2Int = Number(num2)

    const sum = num1Int - num2Int
    return sum

}

Calculator.prototype.multip = function(num1, num2) {

    const num1Int = Number(num1)
    const num2Int = Number(num2)

    const sum = num1Int * num2Int
    return sum
    
}

Calculator.prototype.div = function(num1, num2) {

    const num1Int = Number(num1)
    const num2Int = Number(num2)

    const sum = num1Int / num2Int

    if(num2Int === 0) {
        alert('Nie dziel przez 0!')
    }

    return sum

}

Calculator.prototype.exp = function(num1, num2) {


    const num1Int = Number(num1)
    const num2Int = Number(num2)

    var sum = 1

    for(let i=0; i<num2Int; i++) {

        sum = sum * num1Int
        
    }
    
    console.log(sum)
    return sum
    
}

const x = '5'
const y = 2

console.log(Calculator.prototype.add(x,y))
console.log(Calculator.prototype.sub(x,y))
console.log(Calculator.prototype.multip(x,y))
console.log(Calculator.prototype.div(x,y))
console.log(Calculator.prototype.exp(x,y))

const calc = new Calculator();

let action, promptContent, isCorrectAction, number1, number2;

do { 
    console.log("start pętli")

    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);

    if(isCorrectAction) {
        
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        console.log(number1)
        console.log(number2)

        if(action === '+') {
            const addSummary = calc.add(number1, number2)

            if(addSummary) {

                alert('Twój wynik to: ' + addSummary)
                console.log(number1 + '+' + number2 + '=' + addSummary)

            } else alert('Podałeś błędną liczbę!')

        }

        else if(action === '-') {
            const addSummary = calc.sub(number1, number2);

            if(addSummary) {

                alert('Twój wynik to: ' + addSummary)


            } else if(addSummary === 0) {

                alert('Twój wynik to: ' + addSummary)

            } else alert('Podałeś błędną liczbę!')
        }

        else if(action === '*') {
            const addSummary = calc.multip(number1, number2);

            if(addSummary) {

                alert('Twój wynik to: ' + addSummary)

            } else alert('Podałeś błędną liczbę!')
        }

        else if (action === '/') {
            const addSummary = calc.div(number1, number2);

            if(addSummary) {

                alert('Twój wynik to: ' + addSummary)

            } else alert('Podałeś błędną liczbę!')
        }

        else if (action === '^') {
            const addSummary = calc.exp(number1, number2);

            if(addSummary) {

                alert('Twój wynik to: ' + addSummary)

            } else alert('Podałeś błędną liczbę!')
        }

        console.log(calc.add(number1, number2))

    } else {
        alert('Podałeś błędny operator! Spróbuj ponownie.')
    }
    
} while(calc.isCorrectAction(action));