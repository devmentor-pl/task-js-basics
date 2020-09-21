function Calculator() {
  this.actions = ["+", "-", "*", "/", "^"];
  this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
  return this.actions.includes(action);
};

Calculator.prototype.areNumbersCorrect = function (num1, num2) {
  return !isNaN(num1) && !isNaN(num2);
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join("\n");
};

Calculator.prototype.add = function (num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (this.areNumbersCorrect(num1, num2)) {
    const result = num1 + num2;

    this.history.push(`${num1} + ${num2} = ${result}`);

    return result;
  } else {
    alert("Please enter numbers");
  }

  return null;
};

Calculator.prototype.subtract = function (num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (this.areNumbersCorrect(num1, num2)) {
    const result = num1 - num2;

    this.history.push(`${num1} - ${num2} = ${result}`);

    return result;
  } else {
    alert("Please enter numbers");
  }

  return null;
};

Calculator.prototype.multiply = function (num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (this.areNumbersCorrect(num1, num2)) {
    const result = num1 * num2;

    this.history.push(`${num1} * ${num2} = ${result}`);

    return result;
  } else {
    alert("Please enter numbers");
  }

  return null;
};

Calculator.prototype.divide = function (num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (this.areNumbersCorrect(num1, num2)) {
    if (num2 !== 0) {
      const result = num1 / num2;

      this.history.push(`${num1} / ${num2} = ${result}`);

      return result;
    } else {
      alert("You cannot divide by zero.");
    }
  } else {
    alert("Please enter numbers");
  }

  return null;
};

Calculator.prototype.power = function (num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (this.areNumbersCorrect(num1, num2)) {
    let result = 1;

    if (num2 !== 0) {
      let count = Math.abs(num2);

      do {
        result *= num2 > 0 ? num1 : 1 / num1;
        count--;
      } while (count > 0);
    }

    this.history.push(`${num1} ^ ${num2} = ${result}`);

    return result;
  } else {
    alert("Please enter numbers");
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
