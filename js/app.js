// ROZWIĄZANIE PO REFAKTORYZACJI

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

Calculator.prototype.makeCalculation = function (num1, num2, action) {
  let number1 = Number(num1);
  let number2 = Number(num2);
  let result;
  if (!isNaN(number1) && !isNaN(number2)) {
    switch (action) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        result = number1 / number2;
        break;
      case '^':
        result = 1;
        for (let i = 0; i < number2; i++) {
          result *= number1;
        }
        break;
      default:
        console.log('błedna operacja');
    }
    const historyResult = `${number1} ${action} ${number2} = ${result}`;
    this.history.push(historyResult);
    return result;
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
    number1 = prompt('Podaj liczbę nr 1');
    number2 = prompt('Podaj liczbę nr 2');

    calc.makeCalculation(number1, number2, action);
  }
} while (calc.isCorrectAction(action));

// ROZWIĄZANIE PRZED REFAKTORYZACJĄ

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
  if (!isNaN(num1) && !isNaN(num2)) {
    const result = num1 + num2;
    this.history.push(`${num1} + ${num2} = ${result}`);
    return result;
  }

  // 1. zamień wartości przekazane przez parametr na typ number
  // 2. sprawdź czy są one poprawne
  // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
  // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
};

Calculator.prototype.subtracting = function (num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) {
    const result = num1 - num2;
    this.history.push(`${num1} - ${num2} = ${result}`);
    return result;
  }
};
Calculator.prototype.multiply = function (num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) {
    const result = num1 * num2;
    this.history.push(`${num1} * ${num2} = ${result}`);
    return result;
  }
};
Calculator.prototype.divide = function (num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) {
    const result = num1 / num2;
    this.history.push(`${num1} / ${num2} = ${result}`);
    return result;
  }
};
Calculator.prototype.power = function (num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) {
    let result = 1;
    for (let i = 0; i < num2; i++) {
      result *= num1;
    }
    this.history.push(`${num1} ^ ${num2} = ${result}`);
    return result;
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
    number1 = Number(prompt('Podaj liczbę nr 1'));
    number2 = Number(prompt('Podaj liczbę nr 2'));

    if (action === '+') {
      calc.add(number1, number2);
    }
    if (action === '-') {
      calc.subtracting(number1, number2);
    }
    if (action === '*') {
      calc.multiply(number1, number2);
    }
    if (action === '/') {
      calc.divide(number1, number2);
    }
    if (action === '^') {
      calc.power(number1, number2);
    }
  }
} while (calc.isCorrectAction(action));
