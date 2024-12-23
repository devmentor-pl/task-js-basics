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
  // Works only for integers
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return null;

  if (num2 === 0) return 1;
  let result;

  for (let i = 0; i < Math.abs(num2); i++) {
    if (i === 0) result = num1;
    else result = result * num1;
  }

  return num2 < 0 ? 1 / result : result;
};

Calculator.prototype.calculate = function (num1, num2, operator) {
  const number1 = Number(num1);
  const number2 = Number(num2);

  if (!this.areInputsValid(number1, number2)) return null;

  let result;

  switch (operator) {
    case "+":
      result = calc.add(number1, number2);
      break;
    case "-":
      result = calc.subtract(number1, number2);
      break;
    case "*":
      result = calc.multiply(number1, number2);
      break;
    case "/":
      result = calc.divide(number1, number2);
      break;
    case "^":
      result = calc.power(number1, number2);
      break;
    default:
      null;
  }

  if (Number.isFinite(result))
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

    calc.calculate(number1, number2, action);
  }
} while (calc.isCorrectAction(action));
