function Calculator() {
  this.actions = {
    "+": this.add,
    "-": this.substract,
    "*": this.multiply,
    "/": this.divide,
    "^": this.power,
  };
  this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
  return typeof calc.actions[action] === "function";
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join("\n");
};

Calculator.prototype.addToHistory = function (operation) {
  this.history.push(operation);
};

Calculator.prototype.areInputsValid = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    return false;
  }

  return true;
};

Calculator.prototype.add = function (num1, num2) {
  return num1 + num2;
};

Calculator.prototype.subtract = function (num1, num2) {
  return num1 - num2;
};

Calculator.prototype.multiply = function (num1, num2) {
  return num1 * num2;
};

Calculator.prototype.divide = function (num1, num2) {
  return num1 / num2;
};

Calculator.prototype.power = function (num1, num2) {
  // Works only when num2 is integer
  if (!Number.isInteger(num2)) return;

  if (num2 === 0) return 1;

  let result = num1;
  for (let i = 1; i < Math.abs(num2); i++) {
    result = result * num1;
  }

  return num2 < 0 ? 1 / result : result;
};

Calculator.prototype.calculate = function (num1, num2, operator) {
  const result = this.actions[operator](num1, num2);

  if (!Number.isFinite(result)) return;

  this.addToHistory(`${number1} ${operator} ${number2} = ${result}`);

  return result;
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

    if (number1 && number2) {
      number1 = Number(number1);
      number2 = Number(number2);

      if (calc.areInputsValid(number1, number2)) {
        calc.calculate(number1, number2, action);
      }
    }
  }
} while (calc.isCorrectAction(action));
