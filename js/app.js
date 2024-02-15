function Calculator() {
  this.actions = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
    "^": power,
    "%": modulo,
  };
  this.history = [];
}

function add(par1, par2) {
  return par1 + par2;
}
function subtract(par1, par2) {
  return par1 - par2;
}
function multiply(par1, par2) {
  return par1 * par2;
}
function divide(par1, par2) {
  return par1 / par2;
}
function power(par1, par2) {
  let total = 1;
  for (let i = 1; i <= par2; i++) {
    total *= par1;
  }
  return total;
}
function modulo(par1, par2) {
  return par1 % par2;
}

Calculator.prototype.isCorrectAction = function (action) {
  return this.actions.hasOwnProperty(action);
};

Calculator.prototype.isCorrectNumber = function (par1, par2) {
  if (!isNaN(par1) && !isNaN(par2)) {
    return par1, par2;
  }
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join("\n");
};

Calculator.prototype.pushResultToArray = function (par1, act, par2, par3) {
  const result = `${par1} ${act} ${par2} = ${par3}`;
  this.history.push(result);
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

    calc.doAction(number1, number2);
  }
} while (calc.isCorrectAction(action));
