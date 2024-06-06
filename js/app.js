function Calculator() {
  this.actions = ["+", "-", "*", "/", "^", "CLEAR"];
  this.history = sessionStorage.getItem("history")
    ? JSON.parse(sessionStorage.getItem("history"))
    : [];
}

Calculator.prototype.isCorrectAction = function (action) {
  return this.actions.includes(action);
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.slice(-10).join("\n");
};

Calculator.prototype.verifyInputs = function (num1, num2) {
  return !isNaN(+num1) && !isNaN(+num2);
};

Calculator.prototype.errorGenerator = function (num1, num2) {
  let error = "";
  if (isNaN(+num1) || !num1) error += "Pierwszy argument nie jest liczbą\n";
  if (isNaN(+num2) || !num2) error += "Drugi argument nie jest liczbą";
  return error;
};

Calculator.prototype.covertCommaToDot = function (num1, num2) {
  const correctNum1 = num1.includes(",") ? num1.replace(",", ".") : num1;
  const correctNum2 = num2.includes(",") ? num2.replace(",", ".") : num2;
  return [correctNum1, correctNum2];
};

Calculator.prototype.addToHistory = function (num1, num2, action, result) {
  const record = `${+num1} ${action} ${+num2} = ${result}`;
  this.history.push(record);
  sessionStorage.setItem("history", JSON.stringify(this.history));
  alert(record);
};

Calculator.prototype.add = function (num1, num2) {
  [num1Coverted, num2Coverted] = this.covertCommaToDot(num1, num2);
  const result = +num1 + +num2;
  const error = this.errorGenerator(num1, num2);
  return this.verifyInputs(num1, num2)
    ? this.addToHistory(num1, num2, "+", result)
    : alert(error);
};

Calculator.prototype.substract = function (num1, num2) {
  [num1Coverted, num2Coverted] = this.covertCommaToDot(num1, num2);
  const result = +num1 - +num2;
  const error = this.errorGenerator(num1, num2);
  return this.verifyInputs(num1, num2)
    ? this.addToHistory(num1, num2, "-", result)
    : alert(error);
};

Calculator.prototype.multiply = function (num1, num2) {
  [num1Coverted, num2Coverted] = this.covertCommaToDot(num1, num2);
  const result = +num1 * +num2;
  const error = this.errorGenerator(num1, num2);
  return this.verifyInputs(num1, num2)
    ? this.addToHistory(num1, num2, "*", result)
    : alert(error);
};

Calculator.prototype.divide = function (num1, num2) {
  [num1Coverted, num2Coverted] = this.covertCommaToDot(num1, num2);
  const result = +num1 / +num2;
  const error = this.errorGenerator(num1, num2);
  return this.verifyInputs(num1, num2)
    ? this.addToHistory(num1, num2, "/", result)
    : alert(error);
};

Calculator.prototype.power = function (num1, num2) {
  const error = this.errorGenerator(num1, num2);
  const result = num1 ** num2;
  return this.verifyInputs(num1, num2)
    ? this.addToHistory(num1, num2, "^", result)
    : alert(error);
};

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;

do {
  promptContent = `
Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź.
Jeśli chcesz zrezygnować wciśnij Anuluj.
Lista poprzednich 10 operacji:
${calc.getHistoryAsString()}`;

  action = prompt(promptContent);
  isCorrectAction = calc.isCorrectAction(action);

  if (action === "CLEAR") {
    sessionStorage.removeItem("history");
    alert("Historia wyników została wyczyszczona");
    break;
  }

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
  } else {
    alert("BŁĄD: Podano błędny operator");
  }
} while (calc.isCorrectAction(action));
