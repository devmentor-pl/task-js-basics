function Calculator() {
  this.actions = {
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "/": "divide",
    "^": "power",
  };
  this.history = [];
}

Calculator.prototype.doOperation = function (action, num1, num2) {
  const parsedNum1 = Number(num1);
  const parsedNum2 = Number(num2);

  if (!this.areNumbersValid(parsedNum1, parsedNum2)) {
    const nameOfAction = this.actions[action];
    const operationResult = this[nameOfAction](parsedNum1, parsedNum2);

    if (operationResult) {
      const resultToString = operationResult.toString();
      const decimalPlaces = /\.\d{3,}$/;

      if (decimalPlaces.test(resultToString)) {
        const fixedResult = operationResult.toFixed(2);
        return this.history.push(
          `${parsedNum1} ${action} ${parsedNum2} = ${fixedResult}`
        );
      } else {
        return this.history.push(
          `${parsedNum1} ${action} ${parsedNum2} = ${operationResult}`
        );
      }
    }
  }
};

Calculator.prototype.isCorrectAction = function (action) {
  if (this.actions[action]) {
    return true;
  }
};

Calculator.prototype.areNumbersValid = function (num1, num2) {
  if (isNaN(num1) && isNaN(num2)) {
    alert("Both numbers are falsy.");
    return true;
  } else if (isNaN(num1)) {
    alert("First number is falsy.");
    return true;
  } else if (isNaN(num2)) {
    alert("Second number is falsy.");
    return true;
  } else {
    return false;
  }
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join("\n");
};

Calculator.prototype.add = function (num1, num2) {
  const result = num1 + num2;
  return result;
};

Calculator.prototype.subtract = function (num1, num2) {
  const result = num1 - num2;
  return result;
};

Calculator.prototype.multiply = function (num1, num2) {
  const result = num1 * num2;
  return result;
};

Calculator.prototype.divide = function (num1, num2) {
  if (num2) {
    const result = num1 / num2;
    return result;
  }
};

Calculator.prototype.power = function (num1, num2) {
  if ((num1 === 0 && num2 < 0) || !Number.isInteger(num2)) {
    return null;
  }
  // I used conditionals because in this task I was asked to use loops for powers.
  let result;
  if (num2 === 0) {
    result = 1;
  } else if (num2 < 0) {
    result = 1 / num1;
    for (let i = 1; i < num2; i++) {
      result *= 1 / num1;
    }
  } else {
    result = num1;
    for (let i = 1; i < num2; i++) {
      result *= num1;
    }
  }

  return result;
};

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
  promptContent =
    "Enter the operation you want to perform (+, -, *, /, ^) and confirm. \n";
  promptContent += "If you want to cancel, press Cancel. \n";
  promptContent +=
    "List of previous operations: \n" + calc.getHistoryAsString();

  action = prompt(promptContent);
  isCorrectAction = calc.isCorrectAction(action);
  if (isCorrectAction) {
    number1 = prompt("Enter number 1");
    number2 = prompt("Enter number 2");

    calc.doOperation(action, number1, number2);
  }
} while (calc.isCorrectAction(action));
