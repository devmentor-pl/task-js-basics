function Calculator() {
  this.actions = ["+", "-", "*", "/", "^", "1"];
  this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
  return this.actions.includes(action);
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join("\n");
};

Calculator.prototype.isNaN = function (FirstNumber, SecNumber) {
  if (isNaN(FirstNumber) === true || isNaN(SecNumber) === true) {
    return alert("Jeden z promptów nie jest liczbą");
  }
};

Calculator.prototype.add = function (num1, num2) {
  let result = 0;
  // 1. zamień wartości przekazane przez parametr na typ number
  // ZMIANA NA ETAPIE SPRAWDZANIA WARUNKÓW
  // 2. sprawdź czy są one poprawne
  this.isNaN(num1, num2);
  // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
  result = `${num1} + ${num2} = ${num1 + num2}`;
  // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
  return this.history.push(result);
};

Calculator.prototype.subtract = function (num1, num2) {
  let result = 0;
  this.isNaN(num1, num2);
  result = `${num1} - ${num2} = ${num1 - num2}`;
  return this.history.push(result);
};

Calculator.prototype.multiply = function (num1, num2) {
  let result = 0;
  this.isNaN(num1, num2);
  result = `${num1} * ${num2} = ${num1 * num2}`;
  return this.history.push(result);
};

Calculator.prototype.divide = function (num1, num2) {
  let result = 0;
  this.isNaN(num1, num2);
  result = `${num1} / ${num2} = ${num1 / num2}`;
  return this.history.push(result);
};

Calculator.prototype.pow = function (num1, num2) {
  let result = 0;
  let pow = 0;
  this.isNaN(num1, num2);

  for (let i = 0; i < num2; i++) {
    pow === 0 ? (pow += num1) : (pow *= num1);
  }

  result = `${num1} ^ ${num2} = ${pow}`;
  // result = `${num1} ^ ${num2} = ${num1 ** num2}`;
  return this.history.push(result);
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
    number1 = parseFloat(prompt("Podaj liczbę nr 1"));
    number2 = parseFloat(prompt("Podaj liczbę nr 2"));

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
        calc.pow(number1, number2);
        break;
    }
  }
} while (calc.isCorrectAction(action));
