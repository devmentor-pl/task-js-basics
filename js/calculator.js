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

/*
Calculator is one of the most popular projects we learn to create. 
Often, mistakes such as not checking whether the number in division is zero or whether the provided values are actually numbers are made. 
In the project, I used the $ symbol in JavaScript code, which was introduced in the ECMAScript 6 standard. This allows for easier 
creation of strings where variables can be placed without the need for additional operators. 
The $ symbol along with curly braces {} is used to embed variables inside a string.
In this case, the values of the variables num1, num2, and result are dynamically inserted into the respective
places in the string. This makes the code more readable and concise, especially when dealing with more complex strings.

example:
old code:
num1 + ' + ' + num2 + ' = ' + result

new one:
`${num1} + ${num2} = ${result}`

The use of template literals makes the code more readable and concise, especially when creating longer strings with multiple variables.
 */