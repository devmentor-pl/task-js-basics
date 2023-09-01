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
  const number1 = Number(num1);
  const number2 = Number(num2);

  if (number1 && number2) {
    const sum = number1 + number2;
    const operationString = `${number1} + ${number2} = ${sum}`;
    this.history.push(operationString);
  }
};
Calculator.prototype.substract = function (num1, num2) {
  const number1 = Number(num1);
  const number2 = Number(num2);

  if (number1 && number2) {
    const sum = number1 - number2;
    const operationString = `${number1} - ${number2} = ${sum}`;
    this.history.push(operationString);
  }
};
Calculator.prototype.multiplication = function (num1, num2) {
  const number1 = Number(num1);
  const number2 = Number(num2);

  if (number1 && number2) {
    const sum = number1 * number2;
    const operationString = `${number1} * ${number2} = ${sum}`;
    this.history.push(operationString);
  }
};
Calculator.prototype.division = function (num1, num2) {
  const number1 = Number(num1);
  const number2 = Number(num2);

  if (number1 && number2) {
    const sum = number1 / number2;
    const operationString = `${number1} / ${number2} = ${sum}`;
    this.history.push(operationString);
  }
};
Calculator.prototype.power = function (num1, num2) {
  const number1 = Number(num1);
  const number2 = Number(num2);

  if (number1 && number2) {
    let sum = 0;

    for (let i = 1; i < number2; i++) {
      if (i === 1) {
        sum = number1 * number1;
      } else {
        sum *= number1;
      }
    }
    const operationString = `${number1} ^ ${number2} = ${sum}`;
    this.history.push(operationString);
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
    number1 = prompt("Podaj liczbę nr 1");
    number2 = prompt("Podaj liczbę nr 2");

    if (action === "+") {
      calc.add(number1, number2);
    } else if (action === "-") {
      calc.substract(number1, number2);
    } else if (action === "*") {
      calc.multiplication(number1, number2);
    } else if (action === "/") {
      calc.division(number1, number2);
    } else if (action === "^") {
      calc.power(number1, number2);
    }
  }
} while (calc.isCorrectAction(action));
