function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    const arr = this.history;
   
    if (typeof action !== 'undefined')
    {
        arr.push(result)
    }
    
    return this.history.join('\n');
}

Calculator.prototype.add = function(num1, num2) {

    num1=parseInt(number1);
    num2 = parseFloat(number2)
    //console.log(typeof num1, typeof num2 )
    if(typeof num1 === 'number' && typeof num2 === 'number')
   {
        const addResult = num1 + num2
        result = num1 + ' + ' + num2 + ' = ' + addResult;
        //console.log(result);
        return result;  
    }
    else
    console.log('podane dane nie są liczbą')
}
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    Calculator.prototype.diff = function(num1, num2) {
        num1=parseInt(number1);
    num2 = parseFloat(number2)
    //console.log(typeof num1, typeof num2 )
    if(typeof num1 === 'number' && typeof num2 === 'number')
   {
        const diffResult = num1 - num2
        result = num1 + ' - ' + num2 + ' = ' + diffResult;
        //console.log(result);
        return result;  
    }
    else
    console.log('podane dane nie są liczbą')
}

    Calculator.prototype.mult = function(num1, num2) {
        num1=parseInt(number1);
        num2 = parseFloat(number2)
        // console.log(typeof num1, typeof num2 )
        if(typeof num1 === 'number' && typeof num2 === 'number')
        {
            const multResult = num1 * num2
            result = num1 + ' * ' + num2 + ' = ' + multResult;
           // console.log(result);
            return result;  
        }
        else
        console.log('podane dane nie są liczbą')
}

Calculator.prototype.div = function(num1, num2) {
    num1=parseInt(number1);
    num2 = parseFloat(number2)
    //console.log(typeof num1, typeof num2 )
    if(typeof num1 === 'number' && typeof num2 === 'number')
    {
        const divResult = num1 / num2
        result = num1 + ' / ' + num2 + ' = ' + divResult;
       // console.log(result);
        return result;  
    }
    else
    console.log('podane dane nie są liczbą')
}

Calculator.prototype.pow = function(num1, num2) {
    num1=parseInt(number1);
    num2 = parseFloat(number2)
    console.log(typeof num1, typeof num2 )
    if(typeof num1 === 'number' && typeof num2 === 'number')
        {   
            let i = 0;
            let str= ''
            result = num1 ** num2 
            while (i < num2)
            {
                if (i === 0)
                {
                    str = num1;
                }
                else
                {
                str = str + ' * ' + num1
                }
                i++;
            }
           // const result = str + ' = ' + result <- próbowałem wersję const powResult = str + '=' + result a potem return powResult
           // w .getHistoryAsString robiłem specjalny warunek tylko dla potęg, ale wtedy mi wywalało informację, że nie umie znaleźć powResult...
            //console.log(result) 
            return result; // w przeglądarce w konsoli pokazuje mi cały wynik czyli num1*num1*num1 ale zapisuje mi 
            // jedynie wynik końcowy... a nie całe działanie robiłem różne kombinacje 

    }
    else
    console.log('podane dane nie są liczbą')
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

        else if(action === '-') {
            calc.diff(number1, number2);
        }

        else if(action === '*') {
            calc.mult(number1, number2);
        }

        else if(action === '/') {
            calc.div(number1, number2);
        }

        else if(action === '^') {
            calc.pow(number1, number2);
        }
    
    }
    
} while(calc.isCorrectAction(action));