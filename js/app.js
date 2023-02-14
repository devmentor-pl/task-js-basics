function Calculator() {
  this.actions = ["+", "-", "*", "/", "^"];
  this.history = [];
}

let result = 0;

Calculator.prototype.isCorrectAction = function (action) {
  return this.actions.includes(action);
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join("\n");
};

Calculator.prototype.parsetoInteger = function (a, b) {
  number1 = parseInt(number1);
  number2 = parseInt(number2);
};

Calculator.prototype.add = function (num1, num2) {
  // 1. zamień wartości przekazane przez parametr na typ numbe
  // 2. sprawdź czy są one poprawne
  // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
  // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

  result = num1 + num2;
  //console.log(result);
  alert("wynik: " + result);

  calc.history.push(num1 + " + " + num2 + " = " + result);
};

Calculator.prototype.substract = function (num1, num2) {
  result = num1 - num2;

  alert("wynik: " + result);

  calc.history.push(num1 + " - " + num2 + " = " + result);
};

Calculator.prototype.multiply = function (num1, num2) {
  result = num1 * num2;

  alert("wynik: " + result);

  calc.history.push(num1 + " * " + num2 + " = " + result);
};

Calculator.prototype.divide = function (num1, num2) {
  result = num1 / num2;
  alert("wynik: " + result);

  calc.history.push(num1 + " / " + num2 + " = " + result);
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

    calc.parsetoInteger(number1, number2);

    if (typeof number1 === "number" && typeof number2 === "number") {
      if (action === "+") {
        calc.add(number1, number2);
      } else if (action === "-") {
        calc.substract(number1, number2);
      } else if (action === "*") {
        calc.multiply(number1, number2);
      } else if (action === "/") {
        calc.divide(number1, number2);
      } else if (action === "^") {
        calc.pow(number1, number2);
      }
    }
  }
} while (calc.isCorrectAction(action));

console.log(calc.history);