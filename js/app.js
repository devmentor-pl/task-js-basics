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
  num1 = Number(num1);
  num2 = Number(num2);

  if (num1 !== NaN && num2 !== NaN) {
    const result = num1 + num2;
    this.history.push(`${num1} + ${num2} = ${result}`);
    return result;
  }
};

Calculator.prototype.subtract = function (num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);

  if (num1 !== NaN && num2 !== NaN) {
    const result = num1 - num2;
    this.history.push(`${num1} - ${num2} = ${result}`);
    return result;
  }
};

Calculator.prototype.multiply = function (num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);

  if (num1 !== NaN && num2 !== NaN) {
    const result = num1 * num2;
    this.history.push(`${num1} * ${num2} = ${result}`);
    return result;
  }
};

Calculator.prototype.divide = function (num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);

  if (num1 !== NaN && num2) {
    const result = num1 / num2;
    this.history.push(`${num1} / ${num2} = ${result}`);
    return result;
  }
};

Calculator.prototype.power = function (num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);

  if (num1 !== NaN && num2 !== NaN) {
    if (num1 === 0 && num2 < 0) {
      return null;
    }
    // It would be much easier to use ** or Math.pow() to do the job but here it is:
    let result;
    if (num2 === 0) {
      result = 1;
    } else if (num2 < 0) {
      result = 1 / num1;
      for (let i = 1; i < Math.abs(num2); i++) {
        result *= 1 / num1;
      }
    } else {
      result = num1;
      for (let i = 1; i < num2; i++) {
        result *= num1;
      }
    }

    this.history.push(`${num1} ^ ${num2} = ${result}`);
    return result;
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
      calc.subtract(number1, number2);
    } else if (action === "*") {
      calc.multiply(number1, number2);
    } else if (action === "/") {
      calc.divide(number1, number2);
    } else if (action === "^") {
      calc.power(number1, number2);
    }
  }
} while (calc.isCorrectAction(action));
