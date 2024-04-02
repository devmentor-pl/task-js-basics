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
  // 2. sprawdź czy są one poprawne
  // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
  // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

  const number1 = parseInt(num1);
  const number2 = parseInt(num2);
  if (isNaN(number1) && isNaN(number2)) {
    this.history.push(`Podane dane są nieprawidłowe, wpisz liczby!`);
  } else if (isNaN(number1) && !isNaN(number2)) {
    this.history.push(
      `Podana pierwsza liczba jest nieprawidłowa, wpisz jeszcze raz!`
    );
  } else if (!isNaN(number1) && isNaN(number2)) {
    this.history.push(
      'Podana druga liczba jest nieprawidłowa, wpisz jeszcze raz!'
    );
  } else {
    const result = number1 + number2;
    this.history.push(`${number1} + ${number2} = ${result}`);
  }
};

Calculator.prototype.subtract = function (num1, num2) {
  const number1 = parseInt(num1);
  const number2 = parseInt(num2);
  if (isNaN(number1) && isNaN(number2)) {
    this.history.push(`Podane dane są nieprawidłowe, wpisz liczby!`);
  } else if (isNaN(number1) && !isNaN(number2)) {
    this.history.push(
      `Podana pierwsza liczba jest nieprawidłowa, wpisz jeszcze raz!`
    );
  } else if (!isNaN(number1) && isNaN(number2)) {
    this.history.push(
      'Podana druga liczba jest nieprawidłowa, wpisz jeszcze raz!'
    );
  } else {
    const result = number1 - number2;
    this.history.push(`${number1} - ${number2} = ${result}`);
  }
};

Calculator.prototype.multiply = function (num1, num2) {
  const number1 = parseInt(num1);
  const number2 = parseInt(num2);
  if (isNaN(number1) && isNaN(number2)) {
    this.history.push(`Podane dane są nieprawidłowe, wpisz liczby!`);
  } else if (isNaN(number1) && !isNaN(number2)) {
    this.history.push(
      `Podana pierwsza liczba jest nieprawidłowa, wpisz jeszcze raz!`
    );
  } else if (!isNaN(number1) && isNaN(number2)) {
    this.history.push(
      'Podana druga liczba jest nieprawidłowa, wpisz jeszcze raz!'
    );
  } else {
    const result = number1 * number2;
    this.history.push(`${number1} * ${number2} = ${result}`);
  }
};

Calculator.prototype.divide = function (num1, num2) {
  const number1 = parseInt(num1);
  const number2 = parseInt(num2);
  if (isNaN(number1) && isNaN(number2)) {
    this.history.push(`Podane dane są nieprawidłowe, wpisz liczby!`);
  } else if (isNaN(number1) && !isNaN(number2)) {
    this.history.push(
      `Podana pierwsza liczba jest nieprawidłowa, wpisz jeszcze raz!`
    );
  } else if (!isNaN(number1) && isNaN(number2)) {
    this.history.push(
      'Podana druga liczba jest nieprawidłowa, wpisz jeszcze raz!'
    );
  } else {
    if (number2 === 0) {
      this.history.push(`Nie można dzielić przez zero, spróbuj jeszcze raz!`);
    } else {
      const result = number1 / number2;
      this.history.push(`${number1} / ${number2} = ${result}`);
    }
  }
};

Calculator.prototype.power = function (num, exp) {
  const number = parseInt(num);
  const exponent = parseInt(exp);
  let result = 1;
  if (isNaN(number) && isNaN(exponent)) {
    this.history.push(`Podane dane są nieprawidłowe, wpisz liczby!`);
  } else if (isNaN(number) && !isNaN(exponent)) {
    this.history.push(
      `Podana pierwsza liczba jest nieprawidłowa, wpisz jeszcze raz!`
    );
  } else if (!isNaN(number) && isNaN(exponent)) {
    this.history.push(
      'Podana druga liczba jest nieprawidłowa, wpisz jeszcze raz!'
    );
  } else {
    for (let i = 0; i < exponent; i++) {
      result *= number;
    }
    this.history.push(`${number} ^ ${exponent} = ${result}`);
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

    if (action === '+') {
      calc.add(number1, number2);
    }
    if (action === '-') {
      calc.subtract(number1, number2);
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
