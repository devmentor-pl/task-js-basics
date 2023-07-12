import Validation from "./Validation/Validation.js";
import { parseParams } from "./utils.js";

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
  // 2. sprawdź czy są one poprawne
  const [number1, number2] = parseParams(num1, num2);

  // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
  const result = number1 + number2;

  // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
  this.history.push(`${number1} + ${number2} = ${result}`);
};

Calculator.prototype.subtract = function (num1, num2) {
  const [number1, number2] = parseParams(num1, num2);

  const result = number1 - number2;
  this.history.push(`${number1} + ${number2} = ${result}`);
};

Calculator.prototype.multiply = function (num1, num2) {
  const [number1, number2] = parseParams(num1, num2);

  const result = number1 * number2;
  this.history.push(`${number1} * ${number2} = ${result}`);
};

Calculator.prototype.divide = function (num1, num2) {
  const [number1, number2] = parseParams(num1, num2);

  if (number2 === 0) throw new Error("nie dzielimy przez 0");

  const result = number1 / number2;
  this.history.push(`${number1} : ${number2} = ${result}`);
};

Calculator.prototype.pow = function (num1, num2) {
  const [number1, number2] = parseParams(num1, num2);

  if (number2 === 0) return this.history.push(`${number1}^${number2} = 1`);

  let result = number1;
  for (let i = 1; i < number2; i++) {
    result *= number1;
  }
  this.history.push(`${number1}^${number2} = ${result}`);
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

    const operations = {
      "+": calc.add,
      "-": calc.subtract,
      "*": calc.multiply,
      "/": calc.divide,
      "^": calc.pow,
    };

    operations[action].call(calc, number1, number2);

    // switch (action) {
    //   case "+":
    //     calc.add(number1, number2);
    //     break;
    //   case "-":
    //     calc.subtract(number1, number2);
    //     break;
    //   case "*":
    //     calc.multiply(number1, number2);
    //     break;
    //   case "/":
    //     calc.divide(number1, number2);
    //     break;
    //   case "^":
    //     calc.pow(number1, number2);
    // }
  }
} while (calc.isCorrectAction(action));
