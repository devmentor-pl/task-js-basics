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
    
    result = (num1 + num2);
    return result;
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}
Calculator.prototype.min = function(num1, num2) {
    
    result = (num1 - num2);
    return result;
}

Calculator.prototype.multi = function(num1, num2) {
    
    result = (num1 * num2);
    return result;
}

Calculator.prototype.div = function(num1, num2) {
    
    result = (num1 / num2);
    return result;
}
Calculator.prototype.pow = function(num1, num2) {
    result = num1;
    for(i=0; i<(num2 -1); i++){
        result = (result * num1);
    
    }
    return result;
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
        number1 = Number(number1);
        number2 = Number(number2);
        if(isNaN(number1) || isNaN(number2)){
        alert('Podane wartości nie są liczbami!');
        }else{
            switch(action){
                case "+":
                    calc.add(number1, number2);
                    calc.history.push(number1 +'+'+ number2 +'='+ result);
                    alert("Wynik: "+calc.add(number1, number2));
                    break;
                case "-":
                    calc.min(number1, number2);
                    calc.history.push(number1 +'-'+ number2 +'='+ result);
                    alert("Wynik: "+calc.min(number1, number2));
                    break;
                case "*":
                    calc.multi(number1, number2);
                    calc.history.push(number1 +'*'+ number2 +'='+ result);
                    alert("Wynik: "+calc.multi(number1, number2));
                    break;
                case "/":
                    calc.div(number1, number2);
                    calc.history.push(number1 +'/'+ number2 +'='+ result);
                    alert("Wynik: "+calc.div(number1, number2));
                    break;
                case "^":
                    calc.pow(number1, number2);
                    calc.history.push(number1 +'^'+ number2 +'='+ result);
                    alert("Wynik: "+calc.pow(number1, number2));
                    break;
            }

        }
     
            
     }else{
        alert("Nie wybrano właściwego znaku działania! Odśwież stronę i spróbuj ponownie:)");
     }
    
} while(calc.isCorrectAction(action));