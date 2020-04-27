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
//Number.isNaN(num1)
//Number.isNaN(num2)
    let a = parseInt(num1)
    let b = parseInt(num2)

    if(typeof a === 'number' && typeof b === 'number'){
    if(Number.isNaN(num1) === false && Number.isNaN(num2) === false)
   {
   
        const addResult = a + b
        result = a+ ' + ' + b + ' = ' + addResult;
        //console.log(result); 
        this.history.push(result)  
   }}
    else
   alert('podane dane nie są liczbą')
}
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    Calculator.prototype.diff = function(num1, num2) {
        //Number.isNaN(num1)
        //Number.isNaN(num2)
        let a = parseInt(num1)
        let b = parseInt(num2)

    if(typeof a === 'number' && typeof b === 'number'){
            if(Number.isNaN(num1) === false && Number.isNaN(num2) === false)
           {
            let a = parseInt(num1)
            let b = parseInt(num2)
                const addResult = a - b
                result = a+ ' - ' + b + ' = ' + addResult;
                //console.log(result);
                this.history.push(result)  
           }}
    else
    alert('podane dane nie są liczbą')
}

    Calculator.prototype.mult = function(num1, num2) {
        //Number.isNaN(num1)
        //Number.isNaN(num2)
        let a = parseInt(num1)
        let b = parseInt(num2)

        if(typeof a === 'number' && typeof b === 'number'){
        if(Number.isNaN(num1) === false && Number.isNaN(num2) === false)
        {
        let a = parseInt(num1)
        let b = parseInt(num2)
        const addResult = a * b
        result = a+ ' * ' + b + ' = ' + addResult;
        //console.log(result);
        this.history.push(result)  
        }}
        else
        alert('podane dane nie są liczbą')
}

Calculator.prototype.div = function(num1, num2) {
   // Number.isNaN(num1)
    //Number.isNaN(num2)
    let a = parseInt(num1)
    let b = parseInt(num2)

    if(typeof a === 'number' && typeof b === 'number'){
    if(Number.isNaN(num1) === false && Number.isNaN(num2) === false)
   {
    let a = parseInt(num1)
    let b = parseInt(num2)
        const addResult = a / b
        result = a+ ' / ' + b + ' = ' + addResult;
        //console.log(result);
        this.history.push(result)  
   }}
    else
    alert('podane dane nie są liczbą')
}

Calculator.prototype.pow = function(num1, num2) {
    //Number.isNaN(num1)
    //Number.isNaN(num2)

    let a = parseInt(num1)
    let b = parseInt(num2)
    if(typeof a === 'number' && typeof b === 'number'){
    
    if(Number.isNaN(num1) === false && Number.isNaN(num2) === false)
        {   
            let a = parseInt(num1)
            let b = parseInt(num2)
            let i = 0;
            let str= ''
            result = a ** b 
            while (i < b)
            {
                if (i === 0)
                {
                    str = a;
                }
                else
                {
                str = str + ' * ' + a
                }
                i++;
            }
          
            this.history.push(str + ' = ' + result) 

    }}
    else
    alert('podane dane nie są liczbą')
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