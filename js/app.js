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

Calculator.prototype.parsetoInteger = function (a) {
  return parseInt(a);
};

Calculator.prototype.add = function (num1, num2) {
  // 1. zamień wartości przekazane przez parametr na typ numbe
  // 2. sprawdź czy są one poprawne
  // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
  // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2

  const result = num1 + num2;
  //console.log(result);
  alert("wynik: " + result);

  this.history.push(num1 + " + " + num2 + " = " + result);
};

Calculator.prototype.substract = function (num1, num2) {
  const result = num1 - num2;

  alert("wynik: " + result);

  this.history.push(num1 + " - " + num2 + " = " + result);
};

Calculator.prototype.multiply = function (num1, num2) {
  const result = num1 * num2;

  alert("wynik: " + result);

  this.history.push(num1 + " * " + num2 + " = " + result);
};

Calculator.prototype.divide = function (num1, num2) {
  const result = num1 / num2;
  alert("wynik: " + result);

  this.history.push(num1 + " / " + num2 + " = " + result);
};

Calculator.prototype.pow = function (num1, num2) {
  
  const result = num1 ** num2;
  alert("wynik: " + result);

  let number = 0;
  let str = "";
  while (number < num2) {
    number++;
    if (str === "") {
      str = num1;
    } else {
      str = str + " * " + num1;
    }
  }
  str = str + " = " + result;
  this.history.push(str);
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
    const number1 = prompt("Podaj liczbę nr 1");
    const number2 = prompt("Podaj liczbę nr 2");

    const integer1 = calc.parsetoInteger(number1);
    const integer2 = calc.parsetoInteger(number2);

    if (typeof integer1 === "number" && typeof integer2 === "number") {
      if (action === "+") {
        calc.add(integer1, integer2);
      } else if (action === "-") {
        calc.substract(integer1, integer2);
      } else if (action === "*") {
        calc.multiply(integer1, integer2);
      } else if (action === "/") {
        calc.divide(integer1, integer2);
      } else if (action === "^") {
        calc.pow(integer1, integer2);
      }
    }
  }
} while (calc.isCorrectAction(action));

console.log(calc.history);
