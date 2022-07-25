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
//     return sum;
//   } else console.log("To nie są liczby");
//   this.history.push(a + " + " + b + " = " + sum);
// };

Calculator.prototype.isNumber = function (a, b) {
  // a = parseInt(num1);
  // b = parseInt(num2);
  if (
    typeof a === "number" &&
    typeof b === "number" &&
    !Number.isNaN(a) &&
    !Number.isNaN(b)
  ) {
    return true;
  } else {
    alert(
      "Przynajmniej jedna z podanych wartości nie jest liczbą, działanie nie zostanie wykonane!"
    );
  }
};

Calculator.prototype.addToHistory = function (mathOperation) {
  return this.history.push(mathOperation);
};

Calculator.prototype.add = function (num1, num2) {
  let result = num1 + num2;
  calc.addToHistory(num1 + " + " + num2 + " = " + result);
};
Calculator.prototype.sub = function (num1, num2) {
  let result = num1 - num2;
  calc.addToHistory(num1 + " - " + num2 + " = " + result);
};
Calculator.prototype.multi = function (num1, num2) {
  let result = num1 * num2;
  calc.addToHistory(num1 + " * " + num2 + " = " + result);
};
Calculator.prototype.divi = function (num1, num2) {
  if (num2 === 0) {
    alert("Nie można dzielić przez zero!");
  } else {
    let result = num1 / num2;
    calc.addToHistory(num1 + " : " + num2 + " = " + result);
  }
};
Calculator.prototype.pow = function (num1, num2) {
  result = Math.pow(num1, num2);
  calc.addToHistory(num1 + " ^ " + num2 + " = " + result);
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
      if (action === "+") {
        calc.add(number1, number2);
      }
      if (action === "-") {
        calc.sub(number1, number2);
      }
      if (action === "*") {
        calc.multi(number1, number2);
      }
      if (action === "/") {
        calc.divi(number1, number2);
      }
      if (action === "^") {
        calc.pow(number1, number2);
      }
    }
  }
} while (calc.isCorrectAction(action));
