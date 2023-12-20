function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}
Calculator.prototype.isCorrectAction = function(action) {

    if(!this.actions.includes(action)){
        alert('Użyłeś nieprawidłowego operatora matematycznego')
    }
    else{

    return this.actions.includes(action);
    }
}

Calculator.prototype.getHistoryAsString = function() {

    return this.history.join('\n');
      
}

Calculator.prototype.converter = function(convtert) {
    
    const math = number1 + " " + action + " " + number2;
    const convertToString = convtert.toString(10);
    const result = math + " = " + convertToString
    this.history = this.history.concat(result);   
    
    return convertToString
}


Calculator.prototype.add = function(n1, n2) {

    n1 = number1;
    n2 = number2;
    const result = n1 + n2;
    this.converter(result);

}

Calculator.prototype.subtract = function(n1,n2){

        n1 = number1;
        n2 = number2;  
        const result = n1 - n2;
        this.converter(result);
        return number1 - number2;
    }

Calculator.prototype.multiply = function(n1,n2) {
        
    n1 = number1;
    n2 = number2;
    const result = n1 * n2;
    this.converter(result);

}

Calculator.prototype.divide = function(n1,n2){
        n1 = number1;
        n2 = number2;
        const result = n1 / n2;
        this.converter(result);
        return number1/number2;
}

Calculator.prototype.exponentation = function(n1,n2){
    
        n1 = number1;
        n2 = number2;

        if(number2 <= 0){
            sum = 0
        }
        else if(number2 > 0) {
            sum = 1
        }

        for(let i = 0;i<number2;i++){
            sum = sum * number1;
        }

        this.converter(sum);

    
}

Calculator.prototype.condition = function(){

    number1 = parseInt(number1);
    number2 = parseInt(number2);

    if((isNaN(number1)) || (isNaN(number2))){
       
        alert('Nie podałeś liczby');
        return false
         
    }
    if((typeof number2 === 'number' && number2 == 0) && action === '/'){
        alert('nie można dzielić przez 0');   
        return false   
    }
    if(typeof number2 === 'string' && typeof number2 === 'string'){
        alert('podany znak nie jest liczbą!');   
        return false   
        
    }
    else if((typeof number1 === 'number') && (typeof number2 === 'number')){
        return true

    }
}

const calc = new Calculator();
let action, promptContent, isCorrectAction,number1, number2;

do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();
 
    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if(calc.condition(number1,number2) === false){
            
        }
        else if(calc.condition(number1,number2) === true){

        switch(action){
            case "+":
                calc.add()
                break;
            case "-":
                calc.subtract();
                break;
            case "*":
                calc.multiply();
                break;
            case "/":
                calc.divide();
                break;
            case "^":
                calc.exponentation()
                break;
        }            
    }
    }
    
} while(calc.isCorrectAction(action));