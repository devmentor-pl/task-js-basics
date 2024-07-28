function Calculator() {
  this.actions = ["+", "-", "*", "/", "^"];
  this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
  return this.actions.includes(action);
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join("\n");
};

Calculator.prototype.add = function (num1, num2) {
  // 1. zamień wartości przekazane przez parametr na typ number
  // zmieniono w do ... while
  // 2. sprawdź czy są one poprawne
  if (isNaN(num1) || isNaN(num2)) {
    this.history.push("Dane niepoprawne");
  } else {
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    const result = num1 + num2;
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    this.history.push(num1 + " + " + num2 + " = " + result);
  }
};

Calculator.prototype.diff = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    this.history.push("Dane niepoprawne");
  } else {
    const result = num1 - num2;
    this.history.push(num1 + " - " + num2 + " = " + result);
  }
};

Calculator.prototype.multiply = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    this.history.push("Dane niepoprawne");
  } else {
    const result = num1 * num2;
    this.history.push(num1 + " x " + num2 + " = " + result);
  }
};

Calculator.prototype.divide = function (num1, num2) {
  if (num2 === 0 || isNaN(num1) || isNaN(num2)) {
    this.history.push("Dane niepoprawne");
  } else {
    const result = num1 / num2;
    this.history.push(num1 + " : " + num2 + " = " + result);
  }
};

Calculator.prototype.exp = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    this.history.push("Dane niepoprawne");
  } else {
    let result = 1;
    for (let i = 0; i < num2; i++) {
      result *= num1;
    }
    this.history.push(num1 + "^" + num2 + " = " + result);
  }
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
    number1 = Number(prompt("Podaj liczbę nr 1"));
    number2 = Number(prompt("Podaj liczbę nr 2"));

    if (action === "+") {
      calc.add(number1, number2);
    } else if (action === "-") {
      calc.diff(number1, number2);
    } else if (action === "*") {
      calc.multiply(number1, number2);
    } else if (action === "/") {
      calc.divide(number1, number2);
    } else if (action === "^") {
      calc.exp(number1, number2);
    }
  }
} while (calc.isCorrectAction(action));
