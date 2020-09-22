function Calculator() {
  this.actions = ["+", "-", "*", "/", "^"];
  this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
  return this.actions.includes(action);
};

Calculator.prototype.isNumberCorrect = function (num) {
  return !Number.isNaN(num);
};

Calculator.prototype.checkNumber = function (num) {
  const number = parseInt(num);

  if (this.isNumberCorrect(number)) {
    return number;
  } else {
    throw new Error(`${num} is not a number.`);
  }
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join("\n");
};

Calculator.prototype.addToHistory = function (num1, num2, result, operation) {
  this.history.push(`${num1} ${operation} ${num2} = ${result}`);
};

Calculator.prototype.add = function (num1, num2) {
  try {
    num1 = this.checkNumber(num1);
    num2 = this.checkNumber(num2);

    const result = num1 + num2;

    this.addToHistory(num1, num2, result, "+");

    return result;
  } catch (e) {
    alert(e);
  }

  return null;
};

Calculator.prototype.subtract = function (num1, num2) {
  try {
    num1 = this.checkNumber(num1);
    num2 = this.checkNumber(num2);
    const result = num1 - num2;

    this.addToHistory(num1, num2, result, "-");

    return result;
  } catch (e) {
    alert(e);
  }

  return null;
};

Calculator.prototype.multiply = function (num1, num2) {
  try {
    num1 = this.checkNumber(num1);
    num2 = this.checkNumber(num2);
    const result = num1 * num2;

    this.addToHistory(num1, num2, result, "*");

    return result;
  } catch (e) {
    alert(e);
  }

  return null;
};

Calculator.prototype.divide = function (num1, num2) {
  try {
    num1 = this.checkNumber(num1);
    num2 = this.checkNumber(num2);
    if (num2 !== 0) {
      const result = num1 / num2;

      this.addToHistory(num1, num2, result, "/");

      return result;
    } else {
      alert("You cannot divide by zero.");
    }
  } catch (e) {
    alert(e);
  }

  return null;
};

Calculator.prototype.power = function (num1, num2) {
  try {
    num1 = this.checkNumber(num1);
    num2 = this.checkNumber(num2);
    let result = 1;

    if (num2 !== 0) {
      let count = Math.abs(num2);

      do {
        result *= num2 > 0 ? num1 : 1 / num1;
        count--;
      } while (count > 0);
    }

    this.addToHistory(num1, num2, result, "^");

    return result;
  } catch (e) {
    alert(e);
  }

  return null;
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
