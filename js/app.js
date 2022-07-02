function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

const action1 = new Calculator()
console.log(action1.isCorrectAction('+'))


Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.add = function(num1, num2) {
    // 1. zamień wartości przekazane przez parametr na typ number
     //const changeToNumber = Number(num1, num2)
    
    
    // 2. sprawdź czy są one poprawne
    
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

// function getNumberFromUser(num1, num2 ){
//         num1 = prompt('Podaj liczbę nr 1');
//         num2 = prompt('Podaj liczbę nr 2');
    let number1 = Number(num1)
    let number2 = Number(num2)

    const result = number1 + number2

    return result

        
        
//         if(Number.isNaN(number1)) {
//             return getNumberFromUser()
//         }else {
//             return number1
//         }

//         if(Number.isNaN(number2)) {
//             return getNumberFromUser()
//         }else {
//             return number2
//         }
        
}

const action2 = new Calculator()
console.log(action2.add(2,6))
console.log(6 === Number.isNaN)

//Calculator.prototype.

const calc = new Calculator();

let action, promptContent, isCorrectAction, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        
        num1 = prompt('Podaj liczbę nr 1');
        
        if(Number.isNaN(num1)) {
            
        } else {
            prompt('Podaj liczbę nr 1')
        }

        num2 = prompt('Podaj liczbę nr 2') 

        if(Number.isNaN(num1)) {
            
        } else {
            prompt('Podaj liczbę nr 2')
        }
       
        //             }else if {
        //                 num2 = prompt('Podaj liczbę nr 2')  
        //             }
        

        if(action === '+') {
            calc.add(number1, number2);
        }
    }
    
} while(calc.isCorrectAction(action))