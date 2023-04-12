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

    const num1Int = parseInt(num1)
    const num2Int = parseInt(num2)

    const sum = num1 + num2
    return sum

    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego rezultat
    // 4. dodaj do historii operacji to działanie w formie: 1 + 1 = 2
}

console.log(Calculator.prototype.add(5,2))

const calc = new Calculator();

let action, promptContent, isCorrectAction, inputNumber1, inputNumber2;

do { 
    console.log("start pętli")

    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);

    if(isCorrectAction) {
        
        
        inputNumber1 = prompt('Podaj liczbę nr 1');

        inputNumber2 = prompt('Podaj liczbę nr 2');

        let number1 = Number(inputNumber1)


        let number2 = Number(inputNumber2)

        console.log(number1)
        console.log(number2)

        if(action === '+') {
            const addSummary = calc.add(number1, number2)

            if(addSummary) {

                alert('Twój wynik to: ' + addSummary)

            } else alert('Podałeś błędną liczbę!')

        }

        else if(action === '-') {
            calc.sub(number1, number2);
        }

        else if(action === '*') {
            calc.multip(number1, number2);
        }

        else if (action === '/') {
            calc.div(number1, number2);
        }

    } else {
        alert('end')
    }
    
} while(true);