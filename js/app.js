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

Calculator.prototype.doAction = function (par1, par2) {
  if (action === "+") {
    const result = par1 + par2;
    this.pushResultToArray(par1, action, par2, result);
  } else if (action === "-") {
    const result = par1 - par2;
    this.pushResultToArray(par1, action, par2, result);
  } else if (action === "*") {
    const result = par1 * par2;
    this.pushResultToArray(par1, action, par2, result);
  } else if (action === "/") {
    const result = par1 / par2;
    this.pushResultToArray(par1, action, par2, result);
  } else if (action === "^") {
    let total = 1;
    for (let i = 1; i <= par2; i++) {
      total *= par1;
    }
    this.pushResultToArray(par1, action, par2, total);
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
    }
  }
} while (calc.isCorrectAction(action));
