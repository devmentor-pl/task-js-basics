function Calculator() {
  this.actions = {
    '+': 'add',
    '-': 'minus',
    '*': 'multiplication',
    '/': 'division',
    '^': 'exponentiation',
  };
  this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
  return this.actions.includes(action);
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join('\n');
};

Calculator.prototype.add = function (number1, number2) {
  const addResult = number1 + number2;
  this.history.push(`${number1} + ${number2} = ${addResult}`);
};

Calculator.prototype.minus = function (number1, number2) {
  const minusResult = number1 - number2;
  this.history.push(`${number1} - ${number2} = ${minusResult}`);
};

Calculator.prototype.multiplication = function (number1, number2) {
  const multiResult = number1 * number2;
  this.history.push(`${number1} * ${number2} = ${multiResult}`);
};

Calculator.prototype.division = function (number1, number2) {
  if (Number(number2) !== 0) {
    const divisionResult = (number1 / number2).toFixed(2);
    this.history.push(`${number1} / ${number2} = ${divisionResult}`);
  } else {
    throw new Error('Nie możesz wykonać dzielenia przez 0!');
  }
};

Calculator.prototype.exponentiation = function (number1, number2) {
  let expResult = 1;
  for (let i = 0; i < number2; i++) {
    expResult *= number1;
  }
  this.history.push(`${number1} ^ ${number2} = ${expResult}`);
};

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
  promptContent =
    'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
  promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
  promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

  action = prompt(promptContent);
  isCorrectAction = Object.hasOwnProperty.call(calc.actions, action);
  if (isCorrectAction) {
    number1 = Number(prompt('Podaj liczbę nr 1'));
    number2 = Number(prompt('Podaj liczbę nr 2'));

    calc[calc.actions[action]](number1, number2);
  }
} while (isCorrectAction);
