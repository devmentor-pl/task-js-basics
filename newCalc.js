document.addEventListener('DOMContentLoaded', isDOMContentLoaded);

function isDOMContentLoaded() {
    const calculatorForm = document.querySelector('.calculatorForm');
    const historyList = document.querySelector('.history-list');

    calculatorForm.addEventListener('submit', e => getResult(e));

    const operations = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide,
        '%': modulo,
    };

    function add(a, b) {
        const result = a + b;
        updateHistory(`${a} + ${b} = ${result}`);
        return result;
    }

    function subtract(a, b) {
        const result = a - b;
        updateHistory(`${a} - ${b} = ${result}`);
        return result;
    }

    function multiply(a, b) {
        const result = a * b;
        updateHistory(`${a} * ${b} = ${result}`);
        return result;
    }

    function divide(a, b) {
        if (b === 0) {
            console.log("Cannot divide by zero!");
            return NaN;
        }

        const result = a / b;
        updateHistory(`${a} / ${b} = ${result}`);
        return result;
    }

    function modulo(a, b) {
        const result = a % b;
        updateHistory(`${a} % ${b} = ${result}`);
        return result;
    }

    function updateHistory(entry) {
        const listItem = document.createElement('li');
        listItem.textContent = entry;
        historyList.appendChild(listItem);
    }

    function getResult(e) {
        e.preventDefault();
        const number1 = Number(e.target.elements.number1.value);
        const number2 = Number(e.target.elements.number2.value);
        const operationType = e.target.elements.operation.value;

        const result = operations[operationType](number1, number2);

        const resultEl = document.querySelector('.result');
        resultEl.innerText = `Result: ${result}`;
    }
}

/*
Advantages of the second version of the calculator:

The second version of the calculator has fewer conditional constructs, which can 
make the code more readable and easier to understand.

It separates operations from history in a more modular way, which can facilitate 
code management and maintenance.

Using helper functions: Utilizing helper functions, such as add, subtract, etc., 
can make the code more organized and easier to test.



Zalety drugiej wersji kalkulatora:

Wersja druga kalkulatora ma mniej konstrukcji warunkowych, co może sprawić, że kod jest bardziej czytelny i łatwiejszy do zrozumienia.

Oddziela operacje od historii w bardziej modułowy sposób, co może ułatwić zarządzanie i utrzymanie kodu.

Używanie funkcji pomocniczych: Wykorzystanie funkcji pomocniczych, takich jak add, subtract, itp., może uczynić kod bardziej zorganizowanym i łatwiejszym do testowania.


 */