function Calculator() {
  this.actions = ["+", "-", "*", "/", "^"];
  this.history = [];
}

Calculator.prototype.showError = function () {
  alert("Któraś z liczb jest nieprawidłowa!");
};

Calculator.prototype.isCorrectAction = function (action) {
  return this.actions.includes(action);
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join("\n");
};

Calculator.prototype.add = function (num1, num2) {
  // 1. zamień wartości przekazane przez parametr na typ number
  num1 = Number(num1);
  num2 = Number(num2);
  // 2. sprawdź czy są one poprawne
  if (this.areCorrectNumbers(num1, num2)) {
    this.showError();
  } else {
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    result = num1 + num2;
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    this.addOperationToHistory(num1, num2, "+", result);
  }
};

Calculator.prototype.substract = function (num1, num2) {
  if (this.areCorrectNumbers(num1, num2)) {
    this.showError();
  } else {
    result = num1 - num2;
    this.addOperationToHistory(num1, num2, "-", result);
  }
};

Calculator.prototype.multiply = function (num1, num2) {
  if (this.areCorrectNumbers(num1, num2)) {
    this.showError();
  } else {
    result = num1 * num2;
    this.addOperationToHistory(num1, num2, "*", result);
  }
};

Calculator.prototype.divide = function (num1, num2) {
  if (this.areCorrectNumbers(num1, num2)) {
    this.showError();
  } else {
    result = num1 / num2;
    this.addOperationToHistory(num1, num2, "/", result);
  }
};

Calculator.prototype.exponentation = function (num1, num2) {
  if (this.areCorrectNumbers(num1, num2)) {
    this.showError();
  } else {
    let counter = 0;
    let result = 1;
    if (num2 === 0) {
      result = 1;
    }
    while (counter < num2) {
      result *= num1;
      counter++;
    }
    this.addOperationToHistory(num1, num2, "^", result);
  }
};

Calculator.prototype.areCorrectNumbers = function (num1, num2) {
  if (this.areCorrectNumbers(num1, num2)) {
    return false;
  } else {
    return true;
  }
};

Calculator.prototype.addOperationToHistory = function (
  num1,
  num2,
  action,
  result
) {
  this.history.push(`${num1} ${action} ${num2} = ${result}`);
};

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
  promptContent =
    "Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n"; // \n - znak nowej linii
  promptContent += "Jeśli chcesz zrezygnować wciśnij Anuluj. \n";
  promptContent += "Lista poprzednich operacji: \n" + calc.getHistoryAsString();

  action = prompt(promptContent);
  isCorrectAction = calc.isCorrectAction(action);
  if (isCorrectAction) {
    number1 = prompt("Podaj liczbę nr 1");
    number2 = prompt("Podaj liczbę nr 2");

    if (action === "+") {
      calc.add(Number(number1), Number(number2));
    } else if (action === "-") {
      calc.substract(Number(number1), Number(number2));
    } else if (action === "*") {
      calc.multiply(Number(number1), Number(number2));
    } else if (action === "/") {
      calc.divide(Number(number1), Number(number2));
    } else if (action === "^") {
      calc.exponentation(Number(number1), Number(number2));
    }
  }
} while (calc.isCorrectAction(action));
