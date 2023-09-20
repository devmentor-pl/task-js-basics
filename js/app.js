function Calculator() {
  this.actions = ['+', '-', '*', '/', '^'];
  this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
  return this.actions.includes(action);
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join('\n');
};

Calculator.prototype.add = function (num1, num2) {
  const number1 = Number(num1);
  const number2 = Number(num2);
  const addResult = number1 + number2;
  this.history.push(`${number1} + ${number2} = ${addResult}`);
};

Calculator.prototype.minus = function (num1, num2) {
  const minusResult = num1 - num2;
  this.history.push(`${num1} - ${num2} = ${minusResult}`);
};

Calculator.prototype.multiplication = function (num1, num2) {
  const multiResult = num1 * num2;
  this.history.push(`${num1} * ${num2} = ${multiResult}`);
};

Calculator.prototype.division = function (num1, num2) {
  const number2 = notZero(Number(num2));
  const divisionResult = (num1 / number2).toFixed(2);
  this.history.push(`${num1} / ${number2} = ${divisionResult}`);
};

function notZero(number2) {
  number2 = +number2;
  if (!number2) {
    throw console.error(
      prompt('Nie można dzielić przez 0! Wcisnij F5 aby kontynuować')
    );
  }
  return number2;
}

Calculator.prototype.exponentiation = function (num1, num2) {
  const number1 = Number(num1);
  const number2 = Number(num2);
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
  isCorrectAction = calc.isCorrectAction(action);
  if (isCorrectAction) {
    number1 = prompt('Podaj liczbę nr 1');
    number2 = prompt('Podaj liczbę nr 2');

    const calcOptions = {
      '+': calc.add,
      '-': calc.minus,
      '*': calc.multiplication,
      '/': calc.division,
      '^': calc.division,
    };
    if (calcOptions[action]) {
      calcOptions[action].call(calc, number1, number2);
    }
  }
} while (calc.isCorrectAction(action));
