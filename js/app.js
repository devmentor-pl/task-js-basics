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

Calculator.prototype.addToHistory = function(value) {
  return this.history.push(value)
}

Calculator.prototype.add = function(num1, num2) {
  const parsedSum =  num1 + num2
  calc.addToHistory(num1 + ' + ' + num2 + ' = ' + parsedSum);
  }

Calculator.prototype.diff = function(num1, num2) {
  const parsedSum =  num1 - num2
  calc.addToHistory(num1 + ' - ' + num2 + ' = ' + parsedSum);
  }

Calculator.prototype.ratio = function(num1, num2) {
  const parsedSum =  num1 * num2
  calc.addToHistory(num1 + ' * ' + num2 + ' = ' + parsedSum);
  }

Calculator.prototype.division = function(num1, num2) {
  const parsedSum =  num1 / num2
  calc.addToHistory(num1 + ' / ' + num2 + ' = ' + parsedSum);
  }

Calculator.prototype.expo = function(num1, num2) {
  let i = 1;
  let parsedSum = 1;
  while (i <= num2) {
    i++;
    parsedSum = parsedSum * num1
  }
  calc.addToHistory(num1 + ' ^ ' + num2 + ' = ' + parsedSum);
 }

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /,     ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' +              calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');
      
        const parsedNum1 = parseInt(number1);
        const parsedNum2 = parseInt(number2);
        
        if(!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
          if(action === '+') {
              calc.add(parsedNum1, parsedNum2);
          }

          if(action === '-') {
              calc.diff(parsedNum1, parsedNum2);
           }

          if(action === '*') {
              calc.ratio(parsedNum1, parsedNum2);
           }

          if(action === '/') {
              calc.division(parsedNum1, parsedNum2);
           }

          if(action === '^') {
              calc.expo(parsedNum1, parsedNum2);
           }
        }
    }
    
} while(calc.isCorrectAction(action));

console.log(calc.history)


