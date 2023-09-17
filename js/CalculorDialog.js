export class CalculatorDialog {
    constructor() {
        this.actions = ['+', '-', '*', '/', '^'];
        this.history = [];
        this.addHistory = []
        this.addLi = []
        this.interval = null;

        this.startElement = document.querySelector("#modal");


    }
    run(calc) {
        this.startElement.addEventListener("click", () => this.start(calc));
    }

    isCorrectName(greeting) {
        console.log('correct')
        const name = document.querySelector('.heading--name');
        name.textContent = greeting
        return name
    }

    isCorrectAction(action) {
        return this.actions.includes(action);
    }
    getHistoryAsString() {
        return this.addHistory.join('\n');
    }

    checkValue(val1, val2) {
        if (!(isNaN(val1)) && !(isNaN(val2))) {
            return true
        } else {
            return false
        }
    }

    addToHistory(num1, num2, action, result) {


        return this.history.push(num1 + ' ' + action + ' ' + num2 + ' ' + '=' + ' ' + result);
    }

    putAdd(array) {
        const addParent = document.querySelector(`#add`).parentElement
        const li = addParent.querySelectorAll('li')
        li.forEach(function (el, index) {
            console.log(el, index)
            if (index < array.length) {
                // el.textContent = array[index]
                el.innerText = array[index]

            }
        })
    }

    add(num1, num2, action) {

        // 1. zamień wartości przekazane przez parametr na typ number
        // 2. sprawdź czy są one poprawne
        // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
        // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
        let result;
        result = num1 + num2

        const addParent = document.querySelector(`#add`).parentElement
        const li = addParent.querySelectorAll('li')
        const arrayli = [...li]
        console.log(arrayli)

        this.addHistory.push(result)

        const pairedArray = [];
        console.log(pairedArray)


        for (let i = 0; i < this.addHistory.length; i++) {
            pairedArray.push({ item: this.addHistory[i], value: arrayli[i] })
            pairedArray.forEach(function (el) {
                console.log(el)
                if (el && el.value !== undefined) {
                    el.value.innerText = el.item
                } else {
                    alert('choose another ')
                }


            })
        }

        //   const elementsWithNullInnerText = arrayli.filter(element => element.innerText === '');
        //   if(!elementsWithNullInnerText) {
        //     arrayli.setAttribute('style', 'display:none')
        //   }





        console.log(pairedArray)
        console.log(this.addHistory)

        // Display the paired elements
        pairedArray.forEach((pair, index) => {
            console.log(`Pair ${index + 1}: Item: ${pair.item}, Value: ${pair.value}`);
        });

        //      this.addHistory.forEach(function (el, index,result) {
        //         console.log(el, index)
        //         const li = addParent.querySelectorAll(`li`)
        // const getIndex = index
        //         li.forEach(function(el2, index){
        //           if(el.index === el2.index){
        //             el2.innerText = result
        //           }
        //         })

        //             // el.textContent = array[index]



        //     })

        return this.addToHistory(num1, num2, action, result);


    }
    subtract() {
        alert('subtract')
        return num1 - num2;
    }
    multiply(num1, num2, action) {
        alert('multi')
        let result;

        result = num1 * num2
        return this.history.push(num1 + ' ' + action + ' ' + num2 + ' ' + '=' + ' ' + result);
    }
    divide() {
        alert('divide')
    }
    power() {
        alert('power')
    }

    start(calc) {
        let action, promptContent, isCorrectAction, number1, number2, isNumber, val1, val2, result, greeting, greetingContent
        //   greetingContent = 'Please write your name'
        //    greeting = prompt(greetingContent)
        //     if(greeting) {
        // calc.isCorrectName(greeting)
        //     }

        do {
            // promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
            // promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
            // promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();
            const operations = ['+', '-', '*', '/', '^']

            const buttonSubmit = document.querySelector('.buttonSubmit')
            buttonSubmit.addEventListener('click', (event) => {
                const action = document.querySelector('.operations').value
                const val1 = document.querySelector('.number1').value
                const val2 = document.querySelector('.number2').value
                isNumber = calc.checkValue(val1, val2)

                if (operations.includes((action))) {
                    console.log(`${action} is in the array.`);
                    switch (action) {
                        case '+': if (isNumber) {
                            result = calc.add(val1, val2, '+')
                        };
                            break;
                        case '-': if (isNumber) {
                            result = calc.subtract(val1, val2, '-')
                        };
                            break;
                        case '*': if (isNumber) {
                            result = calc.multiply(val1, val2, '*')
                        };
                            break;
                        case '/': if (isNumber) {
                            result = calc.divide(val1, val2, '/')
                        };
                            break
                        case '^': if (isNumber) { result = calc.power() };
    
                    }
                } else {
                    console.log(`${action} is not in the array.`);
                }

            })
            // action = prompt(promptContent);
            isCorrectAction = calc.isCorrectAction(action);
            if (isCorrectAction) {
                number1 = prompt('Podaj liczbę nr 1');
                number2 = prompt('Podaj liczbę nr 2');
                val1 = parseInt(number1)
                val2 = parseInt(number2)
                isNumber = calc.checkValue(val1, val2)
                switch (action) {
                    case '+': if (isNumber) {
                        result = calc.add(val1, val2, '+')
                    };
                        break;
                    case '-': if (isNumber) {
                        result = calc.subtract(val1, val2, '-')
                    };
                        break;
                    case '*': if (isNumber) {
                        result = calc.multiply(val1, val2, '*')
                    };
                        break;
                    case '/': if (isNumber) {
                        result = calc.divide(val1, val2, '/')
                    };
                        break
                    case '^': if (isNumber) { result = calc.power() };

                }
                // const result = operations[action](n1, n2);

            }

        } while (calc.isCorrectAction(action));


    }

}





// const calc = new Calculator();
// console.dir(calc)
let action, promptContent, isCorrectAction, number1, number2;
function rusha() {


}
