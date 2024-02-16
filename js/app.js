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

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function power(a, b) {
  let total = 1;
  for (let i = 1; i <= b; i++) {
    total *= a;
  }
  return total;
}
function modulo(a, b) {
  return a % b;
}

Calculator.prototype.isCorrectAction = function (action) {
  return this.actions.hasOwnProperty(action);
};

Calculator.prototype.isCorrectNumber = function (num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) {
    return true;
  } else {
    return false;
  }
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join("\n");
};

Calculator.prototype.pushResultToArray = function (num1, action, num2, result) {
  const str = `${num1} ${action} ${num2} = ${result}`;
  this.history.push(str);
};

Calculator.prototype.doAction = function (num1, num2, action) {
  const typeOfOperation = this.actions[action];
  const result = typeOfOperation(num1, num2);
  this.pushResultToArray(num1, action, num2, result);
};

const calc = new Calculator();

let action, promptContent, isCorrectAction, isCorrectNumber, number1, number2;

do {
  promptContent =
    "Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n"; // \n - znak nowej linii
  promptContent += "Jeśli chcesz zrezygnować wciśnij Anuluj. \n";
  promptContent += "Lista poprzednich operacji: \n" + calc.getHistoryAsString();

  action = prompt(promptContent);
  isCorrectAction = calc.isCorrectAction(action);
  if (isCorrectAction) {
    number1 = Number(prompt("Podaj liczbę nr 1"));
    number2 = Number(prompt("Podaj liczbę nr 2"));
    isCorrectNumber = calc.isCorrectNumber(number1, number2);
    if (isCorrectNumber) {
      calc.doAction(number1, number2, action);
    } else {
      alert("Błąd. Podaj liczbę!");
    }
  } else {
    alert("Podano niewłaściwy typ operacji");
  }
} while (calc.isCorrectAction(action));
