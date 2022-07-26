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

// Calculator.prototype.add = function (num1, num2) {
//   a = parseInt(num1);
//   b = parseInt(num2);
//   if (typeof a === "number" && typeof b === "number") {
//     let sum = a + b;
//     console.log(sum);
// this.history.push(a + " + " + b + " = " + sum);
//     return sum;
//   } else console.log("To nie są liczby");
// };

Calculator.prototype.isNumber = function (num1, num2) {
  if (Number.isNaN(num1)) {
    alert("Pierwsza wartość nie jest liczbą");
    return false;
  }
  if (Number.isNaN(num2)) {
    alert("Druga wartość nie jest liczbą");
    return false;
  } else return true;
};

Calculator.prototype.addToHistory = function (mathOperation) {
  return this.history.push(mathOperation);
};

Calculator.prototype.add = function (num1, num2) {
  return num1 + num2;
};
Calculator.prototype.sub = function (num1, num2) {
  return num1 - num2;
};
Calculator.prototype.multi = function (num1, num2) {
  return num1 * num2;
};
Calculator.prototype.divi = function (num1, num2) {
  if (num2 === 0) {
    alert("Nie można dzielić przez zero!");
  } else {
    return num1 / num2;
  }
};
Calculator.prototype.pow = function (num1, num2) {
  return Math.pow(num1, num2);
};

Calculator.prototype.addMathOperation = function (num1, num2, action, result) {
  this.addToHistory(`${num1} ${action} ${num2} = ${result}`);
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
    number1 = parseInt(prompt("Podaj liczbę nr 1"));
    number2 = parseInt(prompt("Podaj liczbę nr 2"));
    if (calc.isNumber(number1, number2)) {
      let res;

      if (action === "+") {
        res = calc.add(number1, number2);
      }
      if (action === "-") {
        res = calc.sub(number1, number2);
      }
      if (action === "*") {
        res = calc.multi(number1, number2);
      }
      if (action === "/") {
        res = calc.divi(number1, number2);
      }
      if (action === "^") {
        res = calc.pow(number1, number2);
      }
      calc.addMathOperation(number1, number2, action, res);
    }
  }
} while (calc.isCorrectAction(action));
