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
  // 1. zamień wartości przekazane przez parametr na typ number
  const parseNum1 = parseFloat(num1);
  const parseNum2 = parseFloat(num2);

  // 2. sprawdź czy są one poprawne
  console.log(typeof parseNum1, typeof parseNum2);

  // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
  const result = parseNum1 + parseNum2;
  console.log(`${parseNum1} + ${parseNum2} = ${result}`);

  // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
  if (result) {
    this.history.push(`${parseNum1} + ${parseNum2} = ${result}`);
  }
};

Calculator.prototype.substract = function (num1, num2) {
  const parseNum1 = parseFloat(num1);
  const parseNum2 = parseFloat(num2);
  console.log(typeof parseNum1, typeof parseNum2);

  const result = parseNum1 - parseNum2;
  console.log(`${parseNum1} - ${parseNum2} = ${result}`);

  if (result) {
    this.history.push(`${parseNum1} - ${parseNum2} = ${result}`);
  }
};

Calculator.prototype.multiply = function (num1, num2) {
  const parseNum1 = parseFloat(num1);
  const parseNum2 = parseFloat(num2);
  console.log(typeof parseNum1, typeof parseNum2);

  const result = parseNum1 * parseNum2;
  console.log(`${parseNum1} * ${parseNum2} = ${result}`);

  if (result) {
    this.history.push(`${parseNum1} * ${parseNum2} = ${result}`);
  }
};

Calculator.prototype.divide = function (num1, num2) {
  const parseNum1 = parseFloat(num1);
  const parseNum2 = parseFloat(num2);
  console.log(typeof parseNum1, typeof parseNum2);

  const result = parseNum1 / parseNum2;
  console.log(`${parseNum1} / ${parseNum2} = ${result}`);

  if (result) {
    this.history.push(`${parseNum1} / ${parseNum2} = ${result}`);
  }
};

Calculator.prototype.exponent = function (num1, num2) {
  let parseNum1 = parseFloat(num1);
  let parseNum2 = parseFloat(num2);
  console.log(typeof parseNum1, typeof parseNum2);

  let result = (parseNum1 **= parseNum2);

  const displayNum1 = num1;
  const displayNum2 = num2;

  console.log(`${displayNum1} ^ ${displayNum2} = ${result}`);

  if (result) {
    this.history.push(`${displayNum1} ^ ${displayNum2} = ${result}`);
  }
};

const calc = new Calculator();

const operations = {
  '+': calc.add,
  '-': calc.substract,
  '*': calc.multiply,
  '/': calc.divide,
  '^': calc.exponent,
};

let action, promptContent, isCorrectAction, number1, number2;
do {
  promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
  promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
  promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

  action = prompt(promptContent);

  isCorrectAction = calc.isCorrectAction(action);

  if (isCorrectAction) {
    number1 = prompt('Podaj liczbę nr 1');
    number2 = prompt('Podaj liczbę nr 2');
    const operationFunc = operations[action].bind(calc);

    if (typeof operationFunc === 'function') {
      operationFunc(number1, number2);
    }
  }
} while (calc.isCorrectAction(action));
