function Calculator() {
  this.actions = ["+", "-", "*", "/", "^"];
  this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
  if (!this.actions.includes(action)) {
    alert("BŁĄD: Podano błędny operator");
  }
  return this.actions.includes(action);
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join("\n");
};

Calculator.prototype.verifyInputs = function (num1, num2) {
  let error = "";
  if (isNaN(+num1)) error += "Pierwszy argument nie jest liczbą \n";
  if (isNaN(+num2)) error += "Drugi argument nie jest liczbą";

  return error;
};

Calculator.prototype.add = function (num1, num2) {
  const error = this.verifyInputs(num1, num2);
  return error
    ? alert(error)
    : this.history.push(`${+num1} + ${+num2} = ${+num1 + +num2}`);
};

Calculator.prototype.substract = function (num1, num2) {
  const error = this.verifyInputs(num1, num2);
  return error
    ? alert(error)
    : this.history.push(`${+num1} - ${+num2} = ${+num1 - +num2}`);
};

Calculator.prototype.multiply = function (num1, num2) {
  const error = this.verifyInputs(num1, num2);
  return error
    ? alert(error)
    : this.history.push(`${+num1} * ${+num2} = ${+num1 * +num2}`);
};

Calculator.prototype.divide = function (num1, num2) {
  const error = this.verifyInputs(num1, num2);
  return error
    ? alert(error)
    : this.history.push(`${+num1} / ${+num2} = ${+num1 / +num2}`);
};

Calculator.prototype.power = function (num1, num2) {
  const error = this.verifyInputs(num1, num2);
  if (error) {
    alert(error);
    return;
  }

  if (num2 < 0) {
    let i = num2;
    let j = 1 / num1;
    let result = 1;
    while (i < 0) {
      result *= j;
      i++;
    }
    this.history.push(`${+num1} ^ ${+num2} = ${result}`);
    return;
  }

  if (num2 > 0) {
    let i = num2;
    let j = num1;
    let result = 1;
    while (i > 0) {
      result *= j;
      i--;
    }
    this.history.push(`${+num1} ^ ${+num2} = ${result}`);
    return;
  }

  this.history.push(`${+num1} ^ ${+num2} = 1`);
};

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;

do {
  promptContent = `
Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź.
Jeśli chcesz zrezygnować wciśnij Anuluj.
Lista poprzednich operacji:
${calc.getHistoryAsString()}`;

  action = prompt(promptContent);
  isCorrectAction = calc.isCorrectAction(action);
  if (isCorrectAction) {
    number1 = prompt("Podaj liczbę nr 1");
    number2 = prompt("Podaj liczbę nr 2");

    switch (action) {
      case "+": {
        calc.add(number1, number2);
        break;
      }
      case "-": {
        calc.substract(number1, number2);
        break;
      }
      case "*": {
        calc.multiply(number1, number2);
        break;
      }
      case "/": {
        calc.divide(number1, number2);
        break;
      }
      case "^": {
        calc.power(number1, number2);
        break;
      }
    }
  }
} while (calc.isCorrectAction(action));
