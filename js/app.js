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
  let result;
  if (isNumber(num1, num2)) {
    result = (num1 + num2);
    calc.history.push(`${num1} + ${num2} = ${result}`);
    return;
  } else return calc.history.push(`Podałeś wartości nie będące cyframi`);    
}

Calculator.prototype.sub = function(num1, num2) {
  let result;
  if (isNumber(num1, num2)) {
    result = num1 - num2;
    calc.history.push(`${num1} - ${num2} = ${result}`);
    return;
  } else return calc.history.push(`Podałeś wartości nie będące cyframi`);    
}

Calculator.prototype.multi = function(num1, num2) {
  let result;
  if (isNumber(num1, num2)) {
    result = num1 * num2;
    calc.history.push(`${num1} * ${num2} = ${result}`);
    return;
  } else return calc.history.push(`Podałeś wartości nie będące cyframi`);    
}

Calculator.prototype.div = function(num1, num2) {
  let result;
  if (isNumber(num1, num2)) {
      if (num2 === 0) {return calc.history.push(`Nie mozna dzielic przez zero`); 
      } else {
        result = num1 / num2;
        calc.history.push(`${num1} / ${num2} = ${result}`);
        return;
      }
  } else return calc.history.push(`Podałeś wartości nie będące cyframi`);    
}

Calculator.prototype.pow = function(num1, num2) {
  let hist = num1;
  let n = `${num1}`;
  let result = num1;
  for (let i = 1; i < num2; i++) {
    hist = hist + ` * ${n}`;
    result = result * n
  } return calc.history.push(`${hist} = ${result}`);
}

function isNumber (num1, num2) { 
  if ( isNaN(num1) || isNaN(num2)) {
    return false;
  } else return true;
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
      number1 = parseInt(prompt('Podaj liczbę nr 1'));
      number2 = parseInt(prompt('Podaj liczbę nr 2'));

      if(action === '+') {
        calc.add(number1, number2);       
      }

      if(action === '-') {
        calc.sub(number1, number2)
      }

      if(action === '*') {
        calc.multi(number1, number2)
      }

      if(action === '/') {
        calc.div(number1, number2)
      }

      if(action === '^') {
        calc.pow(number1, number2)
      }
        
    }
   
} while(calc.isCorrectAction(action));



