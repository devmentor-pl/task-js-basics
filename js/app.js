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

    if(!isNaN(num1Int) && !isNaN(num2Int)) {

        const sum = num1Int + num2Int
    
        if(typeof this.history === 'undefined') {
            this.history = []
        }
    
        this.history.push(`${num1} + ${num2} = ${sum}`)
        return sum

    } else {
        alert('Podałeś błędne dane!')
    }
}

Calculator.prototype.sub = function(num1, num2) {
    const num1Int = Number(num1)
    const num2Int = Number(num2)

    if(!isNaN(num1Int) && !isNaN(num2Int)) {

        const sum = num1Int - num2Int
    
        if(typeof this.history === 'undefined') {
            this.history = []
        }
    
        this.history.push(`${num1} - ${num2} = ${sum}`)
        return sum

    } else {
        alert('Podałeś błędne dane!')
    }
}

Calculator.prototype.multip = function(num1, num2) {
    const num1Int = Number(num1)
    const num2Int = Number(num2)

    if(!isNaN(num1Int) && !isNaN(num2Int)) {

        const sum = num1Int * num2Int
    
        if(typeof this.history === 'undefined') {
            this.history = []
        }
    
        this.history.push(`${num1} * ${num2} = ${sum}`)
        return sum

    } else {
        alert('Podałeś błędne dane!')
    }  
}

Calculator.prototype.div = function(num1, num2) {

    const num1Int = Number(num1)
    const num2Int = Number(num2)

    if(num2Int === 0) {
        alert('Nie dziel przez 0!')

    } else if (!isNaN(num1Int) && !isNaN(num2Int)) {

            const sum = num1Int / num2Int
        
            if(typeof this.history === 'undefined') {
                this.history = []
            }
        
            this.history.push(`${num1} / ${num2} = ${sum}`)
            return sum
    
        } else {
            alert('Podałeś błędne dane!')
        }
}

Calculator.prototype.exp = function(num1, num2) {
    const num1Int = Number(num1)
    const num2Int = Number(num2)

    if(!isNaN(num1Int) && !isNaN(num2Int)) {

        var sum = 1

    for(let i=0; i<num2Int; i++) {
        sum = sum * num1Int
    }
    
    if(typeof this.history === 'undefined') {
        this.history = []
    }

    this.history.push(`${num1} ^ ${num2} = ${sum}`)
    return sum

    } else {
        alert('Podałeś błędne dane!')
    } 
}

const calc = new Calculator()

let action, promptContent, isCorrectAction, number1, number2

do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n'
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString()

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action)

    if(isCorrectAction) {
        
        number1 = prompt('Podaj liczbę nr 1')
        number2 = prompt('Podaj liczbę nr 2')

        if(action === '+') {
            const addSummary = calc.add(number1, number2)
            
            if(addSummary) {
                alert('Twój wynik to: ' + addSummary)
            }
        }

        else if(action === '-') {
            const addSummary = calc.sub(number1, number2)

            if(addSummary) {
                alert('Twój wynik to: ' + addSummary)
            } else if(addSummary === 0) {
                alert('Twój wynik to: ' + addSummary)
            }
        }

        else if(action === '*') {
            const addSummary = calc.multip(number1, number2)

            if(addSummary) {
                alert('Twój wynik to: ' + addSummary)
            }
        }

        else if (action === '/') {
            const addSummary = calc.div(number1, number2)

            if(addSummary) {
                alert('Twój wynik to: ' + addSummary)
            }
        }

        else if (action === '^') {
            const addSummary = calc.exp(number1, number2)

            if(addSummary) {
                alert('Twój wynik to: ' + addSummary)
            }
        }

    } else {
        alert('Podałeś błędny operator! Spróbuj ponownie.')
    }
    
} while(calc.isCorrectAction(action))