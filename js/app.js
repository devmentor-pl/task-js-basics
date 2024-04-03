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

Calculator.prototype.parseInputs = function (num1, num2) {
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);
  return { number1, number2 };
};

Calculator.prototype.validateNumbers = function (number1, number2) {
  if (isNaN(number1) && isNaN(number2)) {
    this.addToHistory(`Podane dane są nieprawidłowe, wpisz liczby!`);
    return false;
  } else if (isNaN(number1) && !isNaN(number2)) {
    this.addToHistory(
      `Podana pierwsza liczba jest nieprawidłowa, wpisz jeszcze raz!`
    );
    return false;
  } else if (!isNaN(number1) && isNaN(number2)) {
    this.addToHistory(
      'Podana druga liczba jest nieprawidłowa, wpisz jeszcze raz!'
    );
    return false;
  }
  return true;
};

Calculator.prototype.performOperation = function (action, number1, number2) {
  if (action === '+') {
    return number1 + number2;
  } else if (action === '-') {
    return number1 - number2;
  } else if (action === '*') {
    return number1 * number2;
  } else if (action === '/') {
    if (number2 === 0) {
      this.addToHistory(`Nie można dzielić przez zero, spróbuj jeszcze raz!`);
      return null;
    }
    return number1 / number2;
  } else if (action === '^') {
    let result = 1;
    for (let i = 0; i < number2; i++) {
      result *= number1;
    }
    return result;
  } else {
    this.addToHistory(`Operacja jest nieznana`);
    return null;
  }
};

Calculator.prototype.addToHistory = function (entry) {
  this.history.push(entry);
};

Calculator.prototype.calculation = function (action, num1, num2) {
  const { number1, number2 } = this.parseInputs(num1, num2);
  if (!this.validateNumbers(number1, number2)) return;

  const result = this.performOperation(action, number1, number2);
  if (result !== null) {
    const calculateResult = `${number1} ${action} ${number2} = ${result}`;
    this.addToHistory(calculateResult);
  }

  return result;
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
  if (action === null) {
    break;
  } else if (isCorrectAction) {
    number1 = prompt('Podaj liczbę nr 1');
    number2 = prompt('Podaj liczbę nr 2');
    calc.calculation(action, number1, number2);
  } else {
    alert('Podany operator działania jest nieprawidłowy, spróbuj jeszcze raz!');
  }
} while (true);
