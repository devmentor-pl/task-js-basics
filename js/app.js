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

Calculator.prototype.checkNumbers = function (num1, num2) {
  return !Number.isNaN(num1) && !Number.isNaN(num2);
};

Calculator.prototype.addToHistory = function (num1, num2, operator, result) {
  this.history.push(`${num1} ${operator} ${num2} = ${result}`);
};

Calculator.prototype.parseNumber = function (num) {
  return parseFloat(num);
};

Calculator.prototype.add = function (num1, num2) {
  // 1. zamień wartości przekazane przez parametr na typ number
  const num1Number = this.parseNumber(num1);
  const num2Number = this.parseNumber(num2);
  //console.log(num1, num2);
  // 2. sprawdź czy są one poprawne
  // if (!Number.isNaN(num1Number) && !Number.isNaN(num2Number);)
  if (this.checkNumbers(num1Number, num2Number)) {
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    const result = num1Number + num2Number;
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    this.addToHistory(num1Number, num2Number, "+", result);
  }
};

Calculator.prototype.subtract = function (num1, num2) {
  const num1Number = this.parseNumber(num1);
  const num2Number = this.parseNumber(num2);
  if (this.checkNumbers(num1Number, num2Number)) {
    //return this.history.push(
    //  `${num1Number} - ${num2Number} = $//{num1Number - num2Number}`
    const result = num1Number - num2Number;
    this.addToHistory(num1Number, num2Number, "-", result);
  }
};

Calculator.prototype.multiply = function (num1, num2) {
  const num1Number = this.parseNumber(num1);
  const num2Number = this.parseNumber(num2);
  if (this.checkNumbers(num1Number, num2Number)) {
    const result = num1Number * num2Number;
    this.addToHistory(num1Number, num2Number, "*", result);
  }
};

Calculator.prototype.divide = function (num1, num2) {
  const num1Number = this.parseNumber(num1);
  const num2Number = this.parseNumber(num2);
  if (this.checkNumbers(num1Number, num2Number)) {
    const result = num1Number / num2Number;
    this.addToHistory(num1Number, num2Number, "/", result);
  }
};

Calculator.prototype.power = function (num1, num2) {
  const num1Number = this.parseNumber(num1);
  const num2Number = this.parseNumber(num2);
  let i = 0;
  let power = 1;
  if (this.checkNumbers(num1Number, num2Number)) {
    while (i < num2Number) {
      power *= num1Number;
      i++;
    }
    this.addToHistory(num1Number, num2Number, "^", power);
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

    switch (action) {
      case "+":
        calc.add(number1, number2);
        break;
      case "-":
        calc.subtract(number1, number2);
        break;
      case "*":
        calc.multiply(number1, number2);
        break;
      case "/":
        calc.divide(number1, number2);
        break;
      case "^":
        calc.power(number1, number2);
        break;
    }
  }
} while (calc.isCorrectAction(action));
