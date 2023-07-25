function Calculator() {
  // this.actions = ["+", "-", "*", "/", "^"];
  this.actions = {
    '+': this.add,
    '-': this.subtract,
    '*': this.multiply,
    '/': this.divide,
    '^': this.exponentiation,
  }
  this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
    // return this.actions.includes(action)
    return this.actions[action]
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join("\n");
};
Calculator.prototype.add = function (num1, num2) {
  const result = num1 + num2;
  const resultAdd = `${num1} + ${num2} = ${result}`;
  this.history.push(resultAdd);
  return resultAdd;
};
Calculator.prototype.subtract = function (num1, num2) {
  const result = num1 - num2;
  const resultSubtraction = `${num1} - ${num2} = ${result}`;
  this.history.push(resultSubtraction);
  return resultSubtraction;
};
Calculator.prototype.multiply = function (num1, num2) {
  const result = num1 * num2;
  const resultMultiplication = `${num1} * ${num2} = ${result}`;
  this.history.push(resultMultiplication);
  return resultMultiplication;
};
Calculator.prototype.divide = function (num1, num2) {
  if (num2 === 0) {
    alert("NIE DZIELIMY PRZEZ 0!!!");
  } else {
    const result = num1 / num2;
    const resultDivision = `${num1} / ${num2} = ${result}`;
    this.history.push(resultDivision);
    return resultDivision;
  }
};
Calculator.prototype.exponentiation = function (num1, num2) {
  let result = num1 ** num2;
  let string = "";
  if (num2 === 0) {
    result = 1;
  } else {
    for (let i = 0; i < num2; i++) {
      if (i === 0) {
        string += `${num1}`;
      } else {
        string += ` * ${num1}`;
      }
    }
    const resultExponent = `${string} = ${result}`;
    this.history.push(resultExponent);
    return resultExponent;
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
    number1 = parseInt(prompt("Podaj liczbę nr 1"));
    number2 = parseInt(prompt("Podaj liczbę nr 2"));
    if (!isNaN(number1) && !isNaN(number2)) {

      if (action === '+') {
         calc.add(number1, number2);
      }
      if (action === '-') {
        calc.subtract(number1, number2);
      }
      if (action === '*') {
        calc.multiply(number1, number2);
      }
      if (action === '/') {
        calc.divide(number1, number2)
      }
      if (action === '^') {
        calc.exponentiation(number1, number2)
      }
    } else {
      console.log("Nie podałeś liczby, Spróbuj jeszcze raz!");
    }
  }
} while (calc.isCorrectAction(action));