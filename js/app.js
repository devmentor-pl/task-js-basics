function Calculator() {
  this.actions = ['+', '-', '*', '/', '^'];
  this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
  // dlaczego includes poniżej?
  return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
  return this.history.join('\n');
}

// ********** ADD **********
Calculator.prototype.add = function(num1, num2) {
  // 1. zamień wartości przekazane przez parametr na typ number
  const val1 = parseInt(num1);
  const val2 = parseInt(num2);
  // 2. sprawdź czy są one poprawne
  if (typeof val1 === 'number' && typeof val2 === 'number') {
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    const result = val1 + val2;

    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    this.history.push(`${val1} + ${val2} = ${result}`);
    return result;
  }
}


// ********** SUBTRACT **********

Calculator.prototype.subtract = function(num1, num2) {
  // 1. zamień wartości przekazane przez parametr na typ number
  const val1 = parseInt(num1);
  const val2 = parseInt(num2);
  // 2. sprawdź czy są one poprawne
  if (typeof val1 === 'number' && typeof val2 === 'number') {
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    const result = val1 - val2;

    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    this.history.push(`${val1} - ${val2} = ${result}`);
    return result;
  }
}


// ********** MULTIPLY **********

Calculator.prototype.multiply = function(num1, num2) {
  // 1. zamień wartości przekazane przez parametr na typ number
  const val1 = parseInt(num1);
  const val2 = parseInt(num2);
  // 2. sprawdź czy są one poprawne
  if (typeof val1 === 'number' && typeof val2 === 'number') {
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    const result = val1 * val2;

    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    this.history.push(`${val1} * ${val2} = ${result}`);
    return result;
  }
}

// ********** DIVIDE **********

Calculator.prototype.divide = function(num1, num2) {
  // 1. zamień wartości przekazane przez parametr na typ number
  const val1 = parseInt(num1);
  const val2 = parseInt(num2);
  // 2. sprawdź czy są one poprawne
  if (typeof val1 === 'number' && typeof val2 === 'number') {
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    const result = val1 / val2;

    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    this.history.push(`${val1} / ${val2} = ${result}`);
    return result;
  }
}

// ********** POWER **********

Calculator.prototype.power = function(num1, num2) {
  // 1. zamień wartości przekazane przez parametr na typ number
  const val1 = parseInt(num1);
  const val2 = parseInt(num2);
  // 2. sprawdź czy są one poprawne
  if (typeof val1 === 'number' && typeof val2 === 'number') {

    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat

    // czemu nie tak?
    // const result = val1 ** val2;

    // pętla
    let result = 1;

    for (let count = 0; count < val2; count++) {
      result *= val1;
    }
    // console.log(result);
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    this.history.push(`${val1} ^ ${val2} = ${result}`);
    return result;
  }
};





const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {

  // czy promptContent poniżej może być zastąpiony jednym długim komunikatem
  // w jednym oknie promptu? czyli tak jak jest w UX?
  // po co dodawać promptContent += 'string'?
  promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
  promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
  promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

  action = prompt(promptContent);
  isCorrectAction = calc.isCorrectAction(action);
  if (isCorrectAction) {
    number1 = prompt('Podaj liczbę nr 1');
    number2 = prompt('Podaj liczbę nr 2');

    if (action === '+') {
      calc.add(number1, number2);
    } else if (action === '-') {
      calc.subtract(number1, number2);
    } else if (action === '*') {
      calc.multiply(number1, number2);
    } else if (action === '/') {
      calc.divide(number1, number2);
    } else if (action === '^') {
      calc.power(number1, number2);
    }
  }

} while (calc.isCorrectAction(action));
