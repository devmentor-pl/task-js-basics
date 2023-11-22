// ROZWIĄZANIE PO REFAKTORYZACJI

function Calculator() {
  this.actions = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
    '^': power,
    history: [],
  };
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function power(a, b) {
  return a ** b;
}

Calculator.prototype.isCorrectAction = function (action) {
  return this.actions.hasOwnProperty(action);
};

Calculator.prototype.getHistoryAsString = function () {
  return this.actions['history'].join('\n');
};

Calculator.prototype.makeCalculation = function (num1, num2, action) {
  if (!isNaN(num1) && !isNaN(num2)) {
    if (this.isCorrectAction(action)) {
      const actionsType = this.actions[action];
      const result = actionsType(num1, num2);
      const historyResult = `${num1} ${action} ${num2} = ${result}`;
      this.actions['history'].push(historyResult);
      return result;
    } else {
      console.log('Błędna operacja');
    }
  } else {
    console.log('Podano błędne liczby');
  }
};

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
  promptContent =
    'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
  promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
  promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

  action = prompt(promptContent);
  isCorrectAction = calc.isCorrectAction(action);
  if (isCorrectAction) {
    number1 = parseInt(prompt('Podaj liczbę nr 1'));
    number2 = parseInt(prompt('Podaj liczbę nr 2'));

    calc.makeCalculation(number1, number2, action);
  }
} while (calc.isCorrectAction(action));
