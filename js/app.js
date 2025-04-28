function Calculator() {
  this.actions = {
    '+': this.add.bind(this),
    '-': this.subtract.bind(this),
    '*': this.multiply.bind(this),
    '/': this.divide.bind(this),
    '^': this.pow.bind(this),
  };
  this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
  return Object.keys(this.actions).includes(action);
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join('\n');
};

Calculator.prototype.performOperation = function (
  num1,
  num2,
  operator,
  operationFn
) {
  num1 = Number(num1);
  num2 = Number(num2);

  if (isNaN(num1) || isNaN(num2)) {
    alert('Musisz podać dwie liczby!');
    return;
  }

  const result = operationFn(num1, num2);
  const operation = `${num1} ${operator} ${num2} = ${result}`;
  this.history.push(operation);
  alert(operation);
};

Calculator.prototype.add = function (num1, num2) {
  this.performOperation(num1, num2, '+', (a, b) => a + b);
};
Calculator.prototype.subtract = function (num1, num2) {
  this.performOperation(num1, num2, '-', (a, b) => a - b);
};

Calculator.prototype.multiply = function (num1, num2) {
  this.performOperation(num1, num2, '*', (a, b) => a * b);
};

Calculator.prototype.divide = function (num1, num2) {
  this.performOperation(num1, num2, '/', (a, b) => {
    if (b === 0) {
      alert('Nie można dzielić przez 0');
      return 'Błąd';
    }
    return a / b;
  });
};

Calculator.prototype.pow = function (num1, num2) {
  this.performOperation(num1, num2, '^', (a, b) => {
    let result = 1;
    for (let i = 0; i < b; i++) {
      result *= a;
    }
    return result;
  });
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

    const operation = calc.actions[action];
    if (operation) {
      operation(number1, number2);
    }
  }
} while (calc.isCorrectAction(action));
