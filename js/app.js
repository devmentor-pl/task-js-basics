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

// ADDIND
Calculator.prototype.add = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    alert("Podałeś błędne wartości! Podaj cyfry z zakresu od 0 do 9! ");
  } else {
    let sum = 0;
    let sumStringResult = "";
    sum = num1 + num2;
    sumStringResult = `${num1} + ${num2} = ${sum}`;
    this.history.push(sumStringResult);
  }
};

// SUBTRACTION
Calculator.prototype.subtract = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    alert("Podałeś błędne wartości! Podaj cyfry z zakresu od 0 do 9! ");
  } else {
    let subt = 0;
    let subtStringResult = "";
    subt = num1 - num2;
    subtStringResult = `${num1} - ${num2} = ${subt}`;
    this.history.push(subtStringResult);
  }
};

// MULTIPLICATION
Calculator.prototype.multiply = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    alert("Podałeś błędne wartości! Podaj cyfry z zakresu od 0 do 9! ");
  } else {
    let mult = 0;
    let multStringResult = "";
    mult = num1 * num2;
    multStringResult = `${num1} * ${num2} = ${mult}`;
    this.history.push(multStringResult);
  }
};

// DIVISION
Calculator.prototype.divide = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    alert("Podałeś błędne wartości! Podaj cyfry z zakresu od 0 do 9! ");
  } else {
    let div = 0;
    let divStringResult = "";
    div = num1 / num2;
    divStringResult = `${num1} / ${num2} = ${div}`;
    this.history.push(divStringResult);
  }
};

// EXPONENTATION
Calculator.prototype.exponetiate = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    alert("Podałeś błędne wartości! Podaj cyfry z zakresu od 0 do 9! ");
  } else {
    let exp = 0;
    let expStringResult = "";
    exp = num1 ** num2;
    expStringResult = `${num1} ^ ${num2} = ${exp}`;
    this.history.push(expStringResult);
  }
};

//
//   CONTROLER
//
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

    if (action === "+") {
      calc.add(number1, number2);
    }
    if (action === "-") {
      calc.subtract(number1, number2);
    }
    if (action === "*") {
      calc.multiply(number1, number2);
    }
    if (action === "/") {
      calc.divide(number1, number2);
    }
    if (action === "^") {
      calc.exponetiate(number1, number2);
    }
  }
} while (calc.isCorrectAction(action));
