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

Calculator.prototype.add = function(number1, number2) {
    number1 = Number(number1)
    number2 = Number(number2)
    const result = number1 + number2
    if(typeof number1 == Number && typeof number2 == Number) {
       return result
    }
    else {
       console.log('podane wartości są niepoprawne') ;

    }
}
Calculator.prototype.sub = function(number1, number2) {
    number1 = Number(number1)
    number2 = Number(number2)
    
    if(typeof number1 == Number && typeof number2 == Number) {
      const result = number1 - number2;
      
      return result
    }
    else {
       console.log('podane wartości są niepoprawne') ;

    }
}
Calculator.prototype.multi = function(number1, number2) {
    number1 = Number(number1)
    number2 = Number(number2)
    
    if(typeof number1 == Number && typeof number2 == Number) {
       const result = number1 * number2;
        return result
    }
    else {
       console.log('podane wartości są niepoprawne') ;

    }
}
Calculator.prototype.div = function(number1, number2) {
    number1 = Number(number1)
    number2 = Number(number2)
    
    if(typeof number1 == Number && typeof number2 == Number) {
        const result = number1 / number2
       return result
    }
    else {
       console.log('podane wartości są niepoprawne') ;

    }
}
Calculator.prototype.expo = function(number1, number2) {
    number1 = Number(number1)
    number2 = Number(number2)
    
    if(typeof number1 == Number && typeof number2 == Number) {
        const result = number1 ** number2;
       return result
    }
    else {
       console.log('podane wartości są niepoprawne') ;

    }
}


    
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2


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
          result =  calc.add(number1, number2);
          console.log(result)
        }
        else if(action === "-") {
           result = calc.sub(number1, number2);
           console.log(result)
        }
        else if(action === "*") {
           result = calc.multi(number1, number2);
            console.log(result)
        }
        else if (action === "/") {
           result = calc.div(number1,number2);
           console.log(result)
        }
        else {
            calc.expo(number1,number2);
        }

    }
    
} while(calc.isCorrectAction(action));