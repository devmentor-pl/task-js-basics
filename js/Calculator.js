

export class Calculator {
    constructor() {

        this.startElement = document.querySelector(".header__buttonStart");
        this.operationsSection = document.querySelector(".main__operations");
        this.resultsSection = document.querySelector(".main__results");
        this.actions = ['+', '-', '*', '/', '**'];
        this.calculateActions = ['add', 'subtract', 'multiply', 'divide', 'power']
        this.history = [];
        this.operationAddHistory = []
        this.operationSubtractHistory = []
        this.operationMultiplyHistory = []
        this.operationDivideHistory = []
        this.operationPowerHistory = []
        this.addLi = []
        this.interval = null;
    }

    run(calc) {
        this.startElement.addEventListener("click", () => this.start(calc));
        this.createContentOfOperations(this.calculateActions)
    }

    createContentOfOperations(array) {
        for (let i = 0; i < 5; i++) {
            const outerDiv = document.createElement("ul");
            outerDiv.classList.add("operations__list");

            for (let j = 0; j < 2; j++) {
                const innerDiv = document.createElement("li");
                innerDiv.classList.add("operations__element");
                outerDiv.appendChild(innerDiv);
            }
            this.operationsSection.appendChild(outerDiv);
        }

        const resultsList = document.querySelectorAll('.operations__list')
        resultsList.forEach(function (el, index) {
            if (index < array.length) {
                el.classList.add(`${array[index]}`)
            }
            const div = document.createElement('button')
            div.classList.add('operations__button')
            el.appendChild(div)

            const buttons = document.querySelectorAll('.operations__button')
            buttons.forEach(function (el, index) {
                if (index < array.length) {
                    el.innerText = array[index]
                    el.classList.add('operations__element--last')
                    el.classList.add('operations__element')
                    el.setAttribute('id', array[index])
                }
            })
        })
    }

    isCorrectName(greeting) {
        const name = document.querySelector('.main__heading');
        name.innerText = `Hi ${greeting}!`
        return name
    }

    isCorrectAction(action) {
        return this.actions.includes(action);
    }

    getHistoryAsString() {
        return this.history.join('\n');
    }

    isCorrectNumber(val1, val2) {
        let num1, num2
        num1= Number(val1)
        num2 = Number(val2)
     
        if (!(isNaN(val1)) && !(isNaN(val2)))  {
            return true
        } else {
            return alert('podaj liczbę')
        }
    }

    addToHistory(num1, num2, action, result) {
        return this.history.push(num1 + ' ' + action + ' ' + num2 + ' ' + '=' + ' ' + result);
    }

    add(num1, num2, action, type) {
       
        let result;
        result = parseInt(num1) + parseInt(num2)

        const addParent = document.querySelector(`#${type}`).parentElement
        const li = addParent.querySelectorAll('li')
        const arrayli = [...li]
        this.operationAddHistory.push(result)
        const pairedArray = [];

        for (let i = 0; i < this.operationAddHistory.length; i++) {
            pairedArray.push({ item: this.operationAddHistory[i], value: arrayli[i] })
            pairedArray.forEach(function (el) {
                if (el && el.value !== undefined) {
                    el.value.innerText = el.item
                } else {
                    alert(`choose another operation without ${action}`)
                    const showResult = document.querySelector(`.${type}`)
                    showResult.remove()
                }
            })
        }

        let operationResult
        operationResult = parseFloat(num1) + action + parseFloat(num2) + ' = ' + result
        this.history.push(operationResult)
        const history = document.querySelector(".main__history")
        history.innerText = `Lista poprzednich operacji: \n` + this.getHistoryAsString()
        return operationResult

    }

    subtract(num1, num2, action, type) {

        let result;
        result = parseInt(num1) - parseInt(num2)


        const addParent = document.querySelector(`#${type}`).parentElement
        const li = addParent.querySelectorAll('li')
        const arrayli = [...li]
        this.operationSubtractHistory.push(result)

        const pairedArray = [];

        for (let i = 0; i < this.operationSubtractHistory.length; i++) {
            pairedArray.push({ item: this.operationSubtractHistory[i], value: arrayli[i] })
            pairedArray.forEach(function (el) {

                if (el && el.value !== undefined) {
                    el.value.innerText = el.item
                } else {
                    alert(`choose another operation without ${action}`)
                    const showResult = document.querySelector(`.${type}`)
                    showResult.remove()
                }
            })
        }

        let operationResult
        operationResult = parseFloat(num1) + action + parseFloat(num2) + ' = ' + result

        this.history.push(operationResult)
        const history = document.querySelector(".main__history")
        history.innerText = `Lista poprzednich operacji: \n'` + this.getHistoryAsString()
        return operationResult

    }


    multiply(num1, num2, action, type) {

        let result;
        result = parseInt(num1) + parseInt(num2)

        const addParent = document.querySelector(`#${type}`).parentElement
        const li = addParent.querySelectorAll('li')
        const arrayli = [...li]
        this.operationMultiplyHistory.push(result)

        const pairedArray = [];

        for (let i = 0; i < this.operationMultiplyHistory.length; i++) {
            pairedArray.push({ item: this.operationMultiplyHistory[i], value: arrayli[i] })
            pairedArray.forEach(function (el) {

                if (el && el.value !== undefined) {
                    el.value.innerText = el.item
                } else {
                    alert(`choose another operation without ${action}`)
                    const showResult = document.querySelector(`.${type}`)
                    showResult.remove()
                }
            })
        }

        let operationResult
        operationResult = parseFloat(num1) + action + parseFloat(num2) + ' = ' + result

        this.history.push(operationResult)
        const history = document.querySelector(".main__history")
        history.innerText = `Lista poprzednich operacji: \n` + this.getHistoryAsString()
        return operationResult

    }


    divide(num1, num2, action, type) {

        let result;
        result = parseInt(num1) / parseInt(num2)


        const addParent = document.querySelector(`#${type}`).parentElement
        const li = addParent.querySelectorAll('li')
        const arrayli = [...li]
        this.operationDivideHistory.push(result)

        const pairedArray = [];

        for (let i = 0; i < this.operationDivideHistory.length; i++) {
            pairedArray.push({ item: this.operationDivideHistory[i], value: arrayli[i] })
            pairedArray.forEach(function (el) {

                if (el && el.value !== undefined) {
                    el.value.innerText = el.item
                } else {
                    alert(`choose another operation without ${action}`)
                    const showResult = document.querySelector(`.${type}`)
                    showResult.remove()
                }
            })
        }

        let operationResult
        operationResult = parseFloat(num1) + action + parseFloat(num2) + ' = ' + result

        this.history.push(operationResult)
        const history = document.querySelector(".main__history")
        history.innerText = `Lista poprzednich operacji: \n` + this.getHistoryAsString()
        return operationResult

    }

    power(num1, num2, powerNumber, action, type) {


        let result2;

        this.num1 = num1
        this.powerNumber = powerNumber
        let result
        let i;

        if (powerNumber == 0) {
            return 1;
        } else {
            let temp = num1;
            for (i = 0; i < powerNumber - 1; i++) {
                num1 = num1 * temp;

                result = num1

            }
        }

        const addParent = document.querySelector(`#${type}`).parentElement
        const li = addParent.querySelectorAll('li')
        const arrayli = [...li]
        this.operationPowerHistory.push(result)

        const pairedArray = [];

        for (let i = 0; i < this.operationPowerHistory.length; i++) {
            pairedArray.push({ item: this.operationPowerHistory[i], value: arrayli[i] })
            pairedArray.forEach(function (el) {

                if (el && el.value !== undefined) {
                    el.value.innerText = el.item
                } else {
                    alert(`choose another operation without ${action}`)
                    const showResult = document.querySelector(`.${type}`)
                    showResult.remove()
                }
            })
        }

        let operationResult
        operationResult = parseFloat(num1) + action + parseFloat(num2) + ' = ' + result2

        this.history.push(operationResult)
        const history = document.querySelector(".main__history")
        history.innerText = `Lista poprzednich operacji: \n` + this.getHistoryAsString()
        return operationResult


    }

    start(calc) {

        let action, isNumber, result, greeting, greetingContent

        greetingContent = 'Please write your name'
        greeting = prompt(greetingContent)
        if (greeting) {
            calc.isCorrectName(greeting)
        }

        this.resultsSection.setAttribute('style', 'display:block')
        this.operationsSection.setAttribute('style', 'display:block')

        do {
           
          
            const operations = ['+', '-', '*', '/', '**']
            const buttonSubmit = document.querySelector('.main__buttonSubmit')
            buttonSubmit.addEventListener('click', (event) => {
                event.preventDefault()
                const action = document.querySelector('.operations--type').value

                let val1 = document.querySelector('.number1').value
                let val2 = document.querySelector('.number2').value
                let powerNumber = document.querySelector('.powerNumber').value
               
                isNumber = this.isCorrectNumber(val1, val2)
             
                if (operations.includes((action))) {
                     let operator,type;
                    switch (action) {
                        case '+': if(isNumber){
                            result = calc.add(val1, val2, operator = '+', type = 'add')
                        };
                            break;
                        case '-': if (isNumber) {
                            result = calc.subtract(val1, val2, operator = '-', type = 'subtract')
                        };
                            break;
                        case '*': if (isNumber) {
                            result = calc.multiply(val1, val2, operator = '*', type = 'multiply')
                        };
                            break;
                        case '/': if (isNumber) {
                            result = calc.divide(val1, val2, operator = '/', type = 'divide')
                        };
                            break
                        case '**': if (isNumber) {

                            result = calc.power(val1, val2, powerNumber, operator = '**', type = 'power')
                        };

                    }
                } else {
                    alert(`${action} is not in the array.`);
                }
            })

        } while (calc.isCorrectAction(action));
    }
}






