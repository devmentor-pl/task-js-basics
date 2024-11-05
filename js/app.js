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
Calculator.prototype.validateNumber = function (number) {
  return !isNaN(number);
};

Calculator.prototype.makeOperation = function (operationType, num1, num2) {
  const number1 = Number(num1);
  const number2 = Number(num2);
  let result;

  if (!this.validateNumber(number1) || !this.validateNumber(number2))
    return alert("Prosze podac poprawne liczby!");

  switch (operationType) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    case "^":
      for (let i = 1; i < number2; i++) {
        if (i === 1) {
          result = number1 * number1;
        } else {
          result *= number1;
        }
      }
      break;
  }
  const operationString = `${number1} ${operationType} ${number2} = ${result}`;
  this.history.push(operationString);
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

    calc.makeOperation(action, number1, number2);
  }
} while (calc.isCorrectAction(action));
