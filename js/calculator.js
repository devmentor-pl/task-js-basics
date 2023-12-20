function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.add = function(num1, num2) {
    const num1Par = parseInt(num1);
    const num2Par = parseInt(num2);

    let result = num1Par + num2Par;
    this.history.push(`${num1Par} + ${num2Par} = ${result}`);
    return result;
};

Calculator.prototype.subtract = function(num1, num2) {
    const num1Par = parseInt(num1);
    const num2Par = parseInt(num2);

    let result;
    if (!isNaN(num1Par) && !isNaN(num2Par)) {
        result = num1Par - num2Par;
        this.history.push(`${num1Par} - ${num2Par} = ${result}`);
        return result;
    } else {
        console.log("Podane wartości nie są liczbami.");
        return NaN;
    }
};

Calculator.prototype.multiply = function(num1, num2) {
    let result = num1 * num2;
    this.history.push(`${num1} * ${num2} = ${result}`);
    return result;
};

Calculator.prototype.divide = function(num1, num2) {
    let result;

    if (num2 === 0) {
        console.log("Nie można dzielić przez zero.");
        return NaN;
    }

    result = num1 / num2;
    this.history.push(`${num1} / ${num2} = ${result}`);
    return result;
};

Calculator.prototype.power = function(num1, num2) {
    let result = 1;

    for (let i = 1; i <= num2; i++) {
        result *= num1;
    }

    this.history.push(`${num1} ^ ${num2} = ${result}`);
    return result;
};

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;

do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n';
    promptContent += 'Jeśli chcesz zrezygnować, wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);

    if (isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if (!isNaN(number1) && !isNaN(number2)) {
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
        } else {
            alert("Podane wartości nie są liczbami!");
        }
    }
} while (calc.isCorrectAction(action));

/*typeof zwraca typ danych. typeof num2Par === number sprawdza czy to liczba czyli generalnie
 kod sprawdza czy obydwie zmienne zawierają dane liczbowe. 
 
 
Użycie symbolu $ w kodzie JavaScript jest związane z notacją zwana szablonami szeregów 
znaków (template literals), wprowadzoną w standardzie ECMAScript 6 (ES6). Szablony szeregów 
znaków pozwalają na łatwiejsze tworzenie ciągów znaków, w których można umieszczać zmienne 
bez konieczności korzystania z konkatenacji lub dodatkowych operatorów.

`${num1} + ${num2} = ${result}`   vs  num1 + ' + ' + num2 + ' = ' + result

Symbol $ wraz z nawiasami klamrowymi {} używany jest do osadzania zmiennych wewnątrz ciągu znaków. 
W tym przypadku, wartości zmiennych num1, num2 i result są dynamicznie wstawiane w odpowiednie 
miejsca w łańcuchu znaków. To sprawia, że kod staje się bardziej czytelny i zwięzły, zwłaszcza 
gdy mamy do czynienia z bardziej skomplikowanymi ciągami znaków.

Użycie szablonów szeregów znaków sprawia, że kod jest bardziej czytelny i bardziej zwięzły, 
zwłaszcza w przypadku tworzenia dłuższych ciągów znaków z wieloma zmiennymi.

Ten kod powinien działać poprawnie i obsługiwać różne operacje matematyczne oraz sprawdzać, czy podane wartości są liczbami.

Warto dodać sprawdzenie, czy druga liczba w dzieleniu nie jest zerem, aby uniknąć błędów.

 */