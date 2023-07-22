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

Calculator.prototype.calculate = function (num1, num2) {
  switch (action) {
    case "+": {
      const result = num1 + num2;
      const resultAdd = `${num1} + ${num2} = ${result}`;
      this.history.push(resultAdd);
      return resultAdd;
    }
    case "-": {
      const result = num1 - num2;
      const resultSubtraction = `${num1} - ${num2} = ${result}`;
      this.history.push(resultSubtraction);
      return resultSubtraction;
    }
    case "*": {
      const result = num1 * num2;
      const resultMultiplication = `${num1} * ${num2} = ${result}`;
      this.history.push(resultMultiplication);
      return resultMultiplication;
    }
    case "/": {
      const result = num1 / num2;
      const resultDivision = `${num1} / ${num2} = ${result}`;
      this.history.push(resultDivision);
      return resultDivision;
    }
    case "^": {
      const result = num1 ** num2;
      let string = "";
      if (num1 > 0 && num2 > 0 && num1 < 10 && num2 < 10) {
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
      } else {
        console.log("Wybierz liczby z przedziału od 1 - 9");
      }
    }
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
      calc.calculate(number1, number2);
    } else {
      console.log("Nie podałeś liczby, Spróbuj jeszcze raz!");
    }
  }
} while (calc.isCorrectAction(action));
