function Calculator() {
  this.actions = ["+", "-", "*", "/", "^"];
  this.history = [];
  this.functions = {
    '+': this.add,
    '-': this.subtract,
    '/': this.divide,
    '*': this.multiply,
    '^': this.power
  }
}

function isInputANumber(num) {
  return !isNaN(Number(num)) && Number(num) !== undefined;
}

Calculator.prototype.isCorrectAction = function (action) {
  return this.actions.includes(action);
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join("\n");
};

Calculator.prototype.add = function (num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    const equationString = `${num1} + ${num2} = ${num1 + num2}`;
    this.history.push(equationString);
    return num1 + num2;
  // 1. zamień wartości przekazane przez parametr na typ number
  // 2. sprawdź czy są one poprawne
  // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
  // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
};

Calculator.prototype.subtract = function (num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    const equationString = `${num1} - ${num2} = ${num1 - num2}`;
    this.history.push(equationString);
    return num1 - num2;
};

Calculator.prototype.multiply = function (num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    const equationString = `${num1} * ${num2} = ${num1 * num2}`;
    this.history.push(equationString);
    return num1 * num2;
};

Calculator.prototype.divide = function (num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    const equationString = `${num1} / ${num2} = ${num1 / num2}`;
    this.history.push(equationString);
    return num1 / num2;
};

Calculator.prototype.power = function (num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let exponentiationResult = 1;
    for (let i = 0; i < num2; i++) {
      exponentiationResult *= num1;
    }

    const equationString = `${num1} ^ ${num2} = ${exponentiationResult}`;
    this.history.push(equationString);
    return exponentiationResult;
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
  if (isCorrectAction && action === "^") {
    do{
    number1 = prompt("Podaj podstawę");
    number2 = prompt("Podaj potęgę");
    }while(!isInputANumber(number1) || !isInputANumber(number2))
    calc.power(number1, number2);
  } else if (isCorrectAction) {
    do{
    number1 = prompt("Podaj liczbę nr 1");
    number2 = prompt("Podaj liczbę nr 2");
    }while(!isInputANumber(number1) || !isInputANumber(number2))
    const calcFunction = calc.functions[action].bind(calc);
    calcFunction(number1,number2);
  }
} while (calc.isCorrectAction(action));
