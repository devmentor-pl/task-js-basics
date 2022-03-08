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

Calculator.prototype.addToHistory = function(num1, num2, action, result){

        this.history.push(`${num1} ${action} ${num2} = ${result}`);    
}

Calculator.prototype.add = function(num1, num2) {

    return num1+num2;
}

Calculator.prototype.sub = function(num1, num2) {

    return num1-num2;
}

Calculator.prototype.multi = function(num1, num2) {
        
    return num1*num2;
}

Calculator.prototype.div = function(num1, num2) {
        
    return num1 / num2;
}

Calculator.prototype.power = function(a, n) {
        
    if (n===0) return 1;

    let result=a;
    for (let i=1; i<n; i++){
        result*=a;
    }
    
    return result;
}


const calc = new Calculator();

let action, promptContent, isCorrectAction, number1, number2, result, num1, num2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz przerwać wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');
        num1 = Number(number1);
        num2 = Number(number2);
      
        if ((!isNaN(num1))&&(!isNaN(num2))){
            switch (action){
                case '+':
                    result = calc.add(num1,num2);                
                    break;
                case '-':
                    result = calc.sub(num1,num2);                 
                    break;
                case '*':
                    result = calc.multi(num1,num2);                 
                    break;
                case '/':                    
                    if (num2!==0){
                        result = calc.div(num1,num2);
                    }
                    else{
                        result='Niedozwolone dzielenie przez zero';
                    }
                    break;
                case '^':
                    result = calc.power(num1,num2);
                    break;
                default:   
                    result = false;             
            }
        
            calc.addToHistory(num1,num2,action,result);
        }
    }
    
} while(action);