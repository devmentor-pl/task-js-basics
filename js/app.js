function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}
Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action);
}
Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
}

Calculator.prototype.checkNumbers = function (num1, num2) {
    let number1 = Number(num1);
    let number2 = Number(num2);
    if (((number1 && number2))) {
        return true;
    } else {
        alert("Spróbuj ponownie. Podane wyrażenie to nie liczba lub podałeś 0.")
    }
}
Calculator.prototype.addHistory = function (num1, num2, action, result) {
    this.history.push(`${num1} ${action} ${num2} = ${result}`);
}
Calculator.prototype.add = function (num1, num2) {
    return result = num1 + num2;
}

Calculator.prototype.sub = function (num1, num2) {
    return result = num1 - num2;
}

Calculator.prototype.multi = function (num1, num2) {
    return result = num1 * num2;

}
Calculator.prototype.div = function (num1, num2) {
    return result = num1 / num2;
}

Calculator.prototype.exponentation = function (num1, num2) {
    let exp = num1;
    for (let i = 1; i < num2; i++) {
        exp *= num1;
    }
    return exp;
}

const calc = new Calculator();

let action, promptContent, isCorrectAction, number1, number2;

do {
    const operations = {
        "+": calc.add,
        "-": calc.sub,
        "*": calc.multi,
        "/": calc.div,
        "^": calc.exponentation,

    }
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n';
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();
    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);

    if (isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');
        calc.checkNumbers(number1, number2)
        // nie wiem dlaczego właściwość powyżej nie konwertuje podczas dodawania na number tylko robi konkatenacje pomimo, że sprawdza czy podana wartosc jest number czy nie. Jesli np jedna z wartosci nie jest number to wyswietli błąd. Mam wrażenie, że to nie działa prawidłowo, a w innych operacjach po prostu zachodzi konwersja niejawna. Wychodzi na to jakby kod działał w połowie dobrze.  
        const operationFunc = operations[action];
        const result = operationFunc(number1, number2);
        const addHistory = calc.addHistory(number1, number2, action, result);
    }
} while (calc.isCorrectAction(action));




















function addfd() {
    // promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    // promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    // promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    // action = prompt(promptContent);
    // isCorrectAction = calc.isCorrectAction(action);
    // if (isCorrectAction) {
    // number1 = prompt('Podaj liczbę nr 1');
    // number2 = prompt('Podaj liczbę nr 2');
    // }

    // } while (calc.isCorrectAction(action));



    // if (action === '+') {
    //     calc.add(number1, number2);
    // } else if (action === "-") {
    //     calc.sub(number1, number2);
    // } else if (action === "*") {
    //     calc.multi(number1, number2);
    // } else if (action === "/") {
    //     calc.div(number1, number2)
    // } else if (action === "^") {
    //     calc.exponentation(number1, number2);
    // }



    // function Calculator() {
    //     this.actions = ['+', '-', '*', '/', '^'];
    //     this.history = [];
    // }
    // Calculator.prototype.isCorrectAction = function (action) {
    //     return this.actions.includes(action);
    // }
    // Calculator.prototype.getHistoryAsString = function () {
    //     return this.history.join('\n');
    // }

    // Calculator.prototype.checkNumbers = function (num1, num2) {
    //     let number1 = Number(num1);
    //     let number2 = Number(num2);
    //     if (number1 && number2) {
    //         return true;
    //     } else {
    //         alert("Spróbuj ponownie. Podane wyrażenie to nie liczba")
    //     }
    // }

    // Calculator.prototype.add = function (num1, num2) {
    //     // 1. zamień wartości przekazane przez parametr na typ number
    //     // 2. sprawdź czy są one poprawne
    //     this.checkNumbers(num1, num2);
    //     // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    //     let result = num1 + num2;
    //     // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
    //     this.history.push(`${num1} + ${num2} = ${result}`);
    // }

    // Calculator.prototype.sub = function (num1, num2) {
    //     // this.checkNumbers(num1, num2);
    //     let result = num1 - num2;
    //     // this.history.push(`${num1} - ${num2} = ${result}`);
    //     return result;
    // }
    // Calculator.prototype.addHistory = function (num1, num2, action, result) {
    //     this.history.push(`${num1} ${action} ${num2} = ${result}`);
    // }
    // Calculator.prototype.multi = function (num1, num2) {
    //     // this.checkNumbers(num1,num2);
    //     let result = num1 * num2;
    //     return result
    //     // this.history.push(`${num1} * ${num2} = ${result}`);

    // }
    // Calculator.prototype.div = function (num1, num2) {
    //     // this.checkNumbers(num1, num2);
    //     let result = num1 / num2;
    //     return result;
    //     // this.history.push(`${num1} / ${num2} = ${result}`);

    // }

    // Calculator.prototype.exponentation = function (num1, num2) {
    //     // this.checkNumbers(num1, num2);
    //     let exp = 1;
    //     for (let i = 1; i <= num2; i++) {
    //         exp *= num1;
    //     }
    //     return exp;

    //     // this.history.push(`${num1} ^ ${num2} = ${exp}`);
    // }}
    // do {
}