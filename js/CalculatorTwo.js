

export class CalculatorTwo {
    constructor() {
    
        this.startElement = document.querySelector(".buttonStart");
        this.random1 = document.querySelector('.random-1')
        this.random2 = document.querySelector('.random-2')
        this.operators = ['+', '-', '*', '/']
        
        this.operations= {
            '+': this.add,
            '-': this.subtract,
            '*': this.multiply,
            '/': this.divide,
        }
        this.res = []
        this.result = document.querySelector('.result')
        this.circle = document.querySelector('.circle')
        this.circle2 = document.querySelector('.circle2')
        this.score = document.querySelector('.main__heading span')
        this.number = 0
        this.operatorCheck = document.querySelectorAll('.userCheck')
        this.operatorCheckActive = document.querySelectorAll('.userCheck.active-btn')
        this.operationsSection = document.querySelector(".main__operations");
        this.randomOperatorIndex = null
        this.resultsSection = document.querySelector(".main__results");
        this.actions = ['+', '-', '*', '/', '**'];
        this.calculateActions = ['add', 'subtract', 'multiply', 'divide', 'power']
        this.operatorType = document.querySelector('.operatorType')
        this.num1Input = document.querySelector('.number1')
        this.num2Input = document.querySelector('.number2')
        this.powerInput = document.querySelector('.powerNumber')
        this.history = [];
        this.operationHistory = []
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
      
    }

    chooseRandom(element) {
        console.log(element)
   
  let el;
     let object; 
   el=element
       object = element

        if(typeof element === 'number'){
          el=Math.floor(Math.random() * element);
            return el
        } else if(typeof element === 'object') {
         
        
            object =  Math.floor(Math.random() * element.length);
            return object
      
    }}


         add(a, b, randomElement) {
            randomElement = ''
           let result
            result = ''
           result = a + b;
           this.result.innerText = result
       
            };
  subtract(a, b, randomElement) {
    randomElement = ''
    let result; 
    result = ''
    result = (a - b);
    this.result.innerText = result
    }
multiply(a, b, randomElement) {
    randomElement = ''
    let result; 
    result = ''
    result = a * b;
    this.result.innerText = result
    }
    divide(a, b, randomElement) {
        randomElement = ''
        let result; 
        result = ''
           result = a / b;
           this.result.innerText = result
    }

  checkUserResult(randomElement) {


  
     let currentScore = 0;
    this.operatorCheck.forEach(function(el){

        el.addEventListener('click', function(el2){
            const elementToMove = el2.target;
            const elem4 = el2.target.id
            var destination = document.querySelector(".circle");
    
         if (elementToMove && destination) {
            const clone = elementToMove.cloneNode(true)
            elementToMove.parentNode.appendChild(clone);
            clone.parentNode.removeChild(clone);
            destination.appendChild(clone);
            if(String(randomElement)===String(elem4)){
        alert('aqua')
     
        this.number += 1

        this.score.innerText = this.number

        this.generateRandomOperation(this.random1, this.random2, this.operators, randomElement)
    
       }
    }

     
       
       
    }.bind(this))
    
    }.bind(this))
    
}


    generateRandomOperation(num1, num2, array, randomElement) {

       num1.innerText = ''
       num2.innerText = ''
       console.log(randomElement)
       randomElement = ''

        this.randomOperatorIndex = []
        console.log(this.randomOperatorIndex)
      
        this.circle.innerText = ''
        const randomNumber1 = this.chooseRandom(10)
       
        num1.innerText = randomNumber1 

        const randomNumber2 = this.chooseRandom(10)
        num2.innerText = randomNumber2
        
        this.randomOperatorIndex = this.chooseRandom(array)
   console.log(this.randomOperatorIndex)
        const randomOperator = array[this.randomOperatorIndex]
         
        if(randomOperator === '+') {
            this.add(randomNumber1, randomNumber2, randomElement)
        } else if(randomOperator === '-'){
            this.subtract(randomNumber1, randomNumber2, randomElement)
        } else if(randomOperator === '*') {
            this.multiply(randomNumber1, randomNumber2, randomElement)
        } else if(randomOperator === '/') {
            this.divide(randomNumber1, randomNumber2, randomElement)
        }

        this.checkUserResult(randomOperator)
     
        // this.res.push(randomNumber1, randomNumber2, randomOperator)

        // this.showResult(randomNumber1,randomNumber2,randomOperator)


      
        // const result = this.randomOperator(randomNumber1, randomNumber2);
       
        // const operationFunc = this.add(randomNumber1, randomNumber2);
        // console.log(operationFunc)
  
        // let resultArray = []

        // return resultArray = []
      
        // this.result.innerText =  this.performOperation(randomNumber1, randomNumber2, randomElement)

    }

    createUl(amount) {
        for (let i = 0; i < amount; i++) {
            const ulElem = document.createElement("ul");
            ulElem.classList.add("operations__list");
            this.operationsSection.appendChild(ulElem);
            this.createLi(2, ulElem)
        }
    }

    createLi(amount, ulElem) {
        for (let j = 0; j < amount; j++) {
            const liElem = document.createElement("li");
            liElem.classList.add("operations__element");
            ulElem.appendChild(liElem);
        }
    }

    putTextToButton(arrayContainer, arrayText) {
        const containerButtons = document.querySelectorAll(`${arrayContainer}`)
        containerButtons.forEach(function (el, index) {
            if (index < arrayText.length) {
                el.innerText = arrayText[index]
                el.classList.add('operations__element--last')
                el.classList.add('operations__element')
                el.setAttribute('id', arrayText[index])
            }
        })
    }

    createButton(arrayContainer, array) {
        const containerElements = document.querySelectorAll(`${arrayContainer}`)
        containerElements.forEach(function (el, index) {
            if (index < array.length) {
                el.classList.add(`${array[index]}`)
            }
            const button = document.createElement('button')
            button.classList.add('operations__button')
            el.appendChild(button)
        })
        this.putTextToButton('.operations__button', array)
    }

    createContentOfOperations(array) {
        this.createUl(this.calculateActions.length)
        this.createButton('.operations__list', array)
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
        if (!(isNaN(val1)) && !(isNaN(val2))) {
            return true
        } else {
            return alert('podaj liczbę')
        }
    }

    addToHistory(num1, num2, action, result) {
        return this.history.push(num1 + ' ' + action + ' ' + num2 + ' ' + '=' + ' ' + result);
    }

    result(num1, num2, operator) {
        if(num1) {
          num1 = parseInt(num1)  
        }else alert('pass the number 1')
        
        if(num2) {
         num2 = parseInt(num2)   
        }else alert('pass the number 2')
        
        let result;

        switch (operator) {
            case '+':
                return result = num1 + num2;
            case '-':
                return result = num1 - num2;
            case '*':
                return result = num1 * num2;
            case '/':
                if (num2 !== 0) {
                    return result = num1 / num2;
                } else {
                    return alert("Division by zero is not allowed.")
                }
            default:
                return "Invalid operator";
        }

    }

    historyResult(num1, num2, action) {
        let historyResult;
        historyResult = parseFloat(num1) + action + parseFloat(num2) + ' = ' + this.result(num1, num2, action)
        this.history.push(historyResult)
        const history = document.querySelector(".main__history")
        history.innerText = `Lista poprzednich operacji: \n` + this.getHistoryAsString()
        return historyResult
    }

    setActiveInput(...params) {
        this.clearActiveInputs()
        params.forEach(function (el) {
            el.style.backgroundColor = 'rgb(231, 98, 98)'
        })
    }

    clearActiveInputs() {
        const inputs = document.querySelectorAll('input')
        inputs.forEach(function (el) {
            el.style.backgroundColor = ''
        })
    }



    // add(num1, num2, action, type) {

    //     this.clearActiveInputs()
    //     const addParent = document.querySelector(`#${type}`).parentElement
    //     const li = addParent.querySelectorAll('li')
    //     const arrayli = [...li]
    //     this.operationAddHistory.push(this.result(num1, num2, '+'))
    //     const pairedArray = [];

    //     for (let i = 0; i < this.operationAddHistory.length; i++) {
    //         pairedArray.push({ item: this.operationAddHistory[i], value: arrayli[i] })
    //         pairedArray.forEach(function (el) {
    //             if (el && el.value !== undefined) {
    //                 el.value.innerText = el.item
    //             } else {
    //                 alert(`choose another operation without ${action}`)
    //                 const showResult = document.querySelector(`.${type}`)
    //                 showResult.remove()
    //             }
    //         })
    //     }

    //     this.historyResult(num1, num2, '+')
  
    // }


    // subtract(num1, num2, action, type) {

    //     this.clearActiveInputs() 
    //     const addParent = document.querySelector(`#${type}`).parentElement
    //     const li = addParent.querySelectorAll('li')
    //     const arrayli = [...li]
    //     this.operationSubtractHistory.push(this.result(num1, num2, '-'))

    //     const pairedArray = [];

    //     for (let i = 0; i < this.operationSubtractHistory.length; i++) {
    //         pairedArray.push({ item: this.operationSubtractHistory[i], value: arrayli[i] })
    //         pairedArray.forEach(function (el) {

    //             if (el && el.value !== undefined) {
    //                 el.value.innerText = el.item
    //             } else {
    //                 alert(`choose another operation without ${action}`)
    //                 const showResult = document.querySelector(`.${type}`)
    //                 showResult.remove()
    //             }
    //         })
    //     }

    //     this.historyResult(num1, num2, '-')
    // }

    // multiply(num1, num2, action, type) {

    //     this.clearActiveInputs() ///
    //     const addParent = document.querySelector(`#${type}`).parentElement
    //     const li = addParent.querySelectorAll('li')
    //     const arrayli = [...li]
    //     this.operationMultiplyHistory.push(this.result(num1, num2, '*'))
    //     const pairedArray = [];

    //     for (let i = 0; i < this.operationMultiplyHistory.length; i++) {
    //         pairedArray.push({ item: this.operationMultiplyHistory[i], value: arrayli[i] })
    //         pairedArray.forEach(function (el) {

    //             if (el && el.value !== undefined) {
    //                 el.value.innerText = el.item
    //             } else {
    //                 alert(`choose another operation without ${action}`)
    //                 const showResult = document.querySelector(`.${type}`)
    //                 showResult.remove()
    //             }
    //         })
    //     }

    //     this.historyResult(num1, num2, '*')
    // }

    // divide(num1, num2, action, type) {

    //     this.clearActiveInputs() 
    //     const addParent = document.querySelector(`#${type}`).parentElement
    //     const li = addParent.querySelectorAll('li')
    //     const arrayli = [...li]
    //     this.operationDivideHistory.push(this.result(num1, num2, '/'))
    //     const pairedArray = [];

    //     for (let i = 0; i < this.operationDivideHistory.length; i++) {
    //         pairedArray.push({ item: this.operationDivideHistory[i], value: arrayli[i] })
    //         pairedArray.forEach(function (el) {

    //             if (el && el.value !== undefined) {
    //                 el.value.innerText = el.item
    //             } else {
    //                 alert(`choose another operation without ${action}`)
    //                 const showResult = document.querySelector(`.${type}`)
    //                 showResult.remove()
    //             }
    //         })
    //     }

    //     this.historyResult(num1, num2, '/')

    // }

    power(num1, num2, powerNumber, action, type) {
        this.clearActiveInputs() 
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
        operationResult = parseFloat(num1) + action + parseFloat(powerNumber) + ' = ' + result
        this.history.push(operationResult)
        const history = document.querySelector(".main__history")
        history.innerText = `Lista poprzednich operacji: \n` + this.getHistoryAsString()
        return operationResult

    }

    start(calc) {

        let action, isNumber, result, greeting, greetingContent

        

       this.generateRandomOperation(this.random1, this.random2, this.operators)

        do {

            const operations = ['+', '-', '*', '/', '**']
            this.operatorType.addEventListener('input', function (event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                }
                const input = this.operatorType

                if (input.value !== '') {

                    switch (input.value) {

                        case '+': this.setActiveInput(this.num1Input, this.num2Input)
                            break;
                        case '-': this.setActiveInput(this.num1Input, this.num2Input)
                            break;
                        case '*': this.setActiveInput(this.num1Input, this.num2Input)
                            break;
                        case '/': this.setActiveInput(this.num1Input, this.num2Input);
                            break;
                        case '**': this.setActiveInput(this.num1Input, this.powerInput);
                            break

                    }
                }
            }.bind(this))

            const buttonSubmit = document.querySelector('.main__buttonSubmit')
            buttonSubmit.addEventListener('click', function (event) {
                event.preventDefault()
                const inputsToSetActivity = [this.num1Input, this.num2Input, this.powerInput]
                inputsToSetActivity.forEach(function (el) {
                    el.style.backgroundColor = ''
                })
                const action = document.querySelector('.operatorType').value

                let val1 = document.querySelector('.number1').value
                let val2 = document.querySelector('.number2').value
                let powerNumber = document.querySelector('.powerNumber').value

                isNumber = this.isCorrectNumber(val1, val2)

                if (isNumber && operations.includes((action))) {
                    let operator, type;
                    switch (action) {
                        case '+': if (isNumber) {
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
            }.bind(this))

        } while ((calc.isCorrectAction(action))) {

        };
    }
}