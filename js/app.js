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
  [num1Coverted, num2Coverted] = this.covertCommaToDot(num1, num2);
  return !isNaN(num1Coverted) && !isNaN(num2Coverted);
};

Calculator.prototype.errorGenerator = function (num1, num2) {
  [num1Coverted, num2Coverted] = this.covertCommaToDot(num1, num2);
  let error = "";
  if (isNaN(num1Coverted) || !num1Coverted)
    error += "Pierwszy argument nie jest liczbą\n";
  if (isNaN(num2Coverted) || !num2Coverted)
    error += "Drugi argument nie jest liczbą";
  return error;
};

Calculator.prototype.covertCommaToDot = function (num1, num2) {
  const correctNum1 = num1.includes(",")
    ? Number(num1.replace(",", "."))
    : +num1;
  const correctNum2 = num2.includes(",")
    ? Number(num2.replace(",", "."))
    : +num2;
  return [correctNum1, correctNum2];
};

Calculator.prototype.addToHistory = function (num1, num2, action, result) {
  [num1Coverted, num2Coverted] = this.covertCommaToDot(num1, num2);
  const record = `${num1Coverted} ${action} ${num2Coverted} = ${result}`;
  this.history.push(record);
  sessionStorage.setItem("history", JSON.stringify(this.history));
  alert(record);
};

Calculator.prototype.add = function (num1, num2) {
  [num1Coverted, num2Coverted] = this.covertCommaToDot(num1, num2);
  const result = num1Coverted + num2Coverted;
  const error = this.errorGenerator(num1, num2);
  return this.verifyInputs(num1, num2)
    ? this.addToHistory(num1, num2, "+", result)
    : alert(error);
};

Calculator.prototype.substract = function (num1, num2) {
  [num1Coverted, num2Coverted] = this.covertCommaToDot(num1, num2);
  const result = num1Coverted - num2Coverted;
  const error = this.errorGenerator(num1, num2);
  return this.verifyInputs(num1, num2)
    ? this.addToHistory(num1, num2, "-", result)
    : alert(error);
};

Calculator.prototype.multiply = function (num1, num2) {
  [num1Coverted, num2Coverted] = this.covertCommaToDot(num1, num2);
  const result = num1Coverted * num2Coverted;
  const error = this.errorGenerator(num1, num2);
  return this.verifyInputs(num1, num2)
    ? this.addToHistory(num1, num2, "*", result)
    : alert(error);
};

Calculator.prototype.divide = function (num1, num2) {
  [num1Coverted, num2Coverted] = this.covertCommaToDot(num1, num2);
  const result = num1Coverted / num2Coverted;
  const error = this.errorGenerator(num1, num2);
  return this.verifyInputs(num1, num2)
    ? this.addToHistory(num1, num2, "/", result)
    : alert(error);
};

Calculator.prototype.power = function (num1, num2) {
  [num1Coverted, num2Coverted] = this.covertCommaToDot(num1, num2);
  const result = num1Coverted ** num2Coverted;
  const error = this.errorGenerator(num1, num2);
  return this.verifyInputs(num1, num2)
    ? this.addToHistory(num1, num2, "^", result)
    : alert(error);
};

Calculator.prototype.clearHistory = function () {
  sessionStorage.removeItem("history");
  this.history = [];
  alert("Historia wyników została wyczyszczona");
};

Calculator.prototype.promptUser = function () {
  let action, promptContent, isCorrectAction, number1, number2;

  const operations = {
    "+": (num1, num2) => this.add(num1, num2),
    "-": (num1, num2) => this.substract(num1, num2),
    "*": (num1, num2) => this.multiply(num1, num2),
    "/": (num1, num2) => this.divide(num1, num2),
    "^": (num1, num2) => this.power(num1, num2),
  };

  do {
    promptContent = `
Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź.
Jeśli chcesz zrezygnować wciśnij Anuluj.
Lista poprzednich 10 operacji:
${this.getHistoryAsString()}`;

    action = prompt(promptContent);
    isCorrectAction = this.isCorrectAction(action);

    if (action === "CLEAR") {
      this.clearHistory();
      continue;
    }

    if (isCorrectAction) {
      number1 = prompt("Podaj liczbę nr 1");
      number2 = prompt("Podaj liczbę nr 2");

      const operation = operations[action];
      if (operation) {
        operation(number1, number2);
      }
    } else {
      alert("BŁĄD: Podano błędny operator");
    }
  } while (true);
};

const calc = new Calculator();
calc.promptUser();
