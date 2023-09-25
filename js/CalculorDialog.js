export class CalculatorDialog {
    constructor() {
        this.actions = ['+', '-', '*', '/', '^'];
        this.history = [];
        this.operationAddHistory = []
        this.operationSubtractHistory = []
        this.addLi = []
        this.interval = null;

        this.startElement = document.querySelector(".buttonStart");


    }
    run(calc) {
   
        this.startElement.addEventListener("click", () => this.start(calc));
    }

    isCorrectName(greeting) {
        const name = document.querySelector('.main__heading');
        name.innerText = `Hello ${greeting}!`
        return name
    }

    isCorrectAction(action) {
        return this.actions.includes(action);
    }
    getHistoryAsString() {
        return this.history.join('\n');
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
          
                if(el && el.value !== undefined) {
                    el.value.innerText = el.item 
                } else {
                     alert(`choose another operation without ${action}`)
                        const showResult = document.querySelector(`.${type}`)
                         showResult.remove() 
                    }

                 
            })
       }
            
        

        let operationResult 
        operationResult = parseFloat(num1) + action +  parseFloat(num2) + ' = ' + result

        this.history.push(operationResult)
        
        num1=''
        num2=''
        const history = document.querySelector(".results__history")
        history.innerText = `Lista poprzednich operacji: \n'` + this.getHistoryAsString()
       
        return operationResult

    }

    subtract(num1, num2, action, type) {
        alert('subtract')
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
                  
                        if(el && el.value !== undefined) {
                            el.value.innerText = el.item 
                        } else {
                             alert(`choose another operation without ${action}`)
                                const showResult = document.querySelector(`.${type}`)
                                 showResult.remove() 
                            }
                    })
                }
        
                let operationResult 
                operationResult = parseFloat(num1) + action +  parseFloat(num2) + ' = ' + result
        
                this.history.push(operationResult)
                const history = document.querySelector(".results__history")
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
                  
                        if(el && el.value !== undefined) {
                            el.value.innerText = el.item 
                        } else {
                             alert(`choose another operation without ${action}`)
                                const showResult = document.querySelector(`.${type}`)
                                 showResult.remove() 
                            }
                    })
                }
        
                let operationResult 
                operationResult = parseFloat(num1) + action +  parseFloat(num2) + ' = ' + result
        
                this.history.push(operationResult)
            
                return operationResult
        
            }
        

    divide(num1, num2, action, type) {

        let result;
         result = parseInt(num1) / parseInt(num2)
        
       
        const addParent = document.querySelector(`#${type}`).parentElement
        const li = addParent.querySelectorAll('li')
        const arrayli = [...li]
        this.operationHistory.push(result)

        const pairedArray = [];
     
        for (let i = 0; i < this.operationHistory.length; i++) {
            pairedArray.push({ item: this.operationHistory[i], value: arrayli[i] })
            pairedArray.forEach(function (el) {
          
                if(el && el.value !== undefined) {
                    el.value.innerText = el.item 
                } else {
                     alert(`choose another operation without ${action}`)
                        const showResult = document.querySelector(`.${type}`)
                         showResult.remove() 
                    }
            })
        }

        let operationResult 
        operationResult = parseFloat(num1) + action +  parseFloat(num2) + ' = ' + operationResult

        this.history.push(operationResult)
    
        return operationResult

    }

    power(num1, powerNumber, ) {

        num1 = number1
       
        this.num1 = num1
        this.powerNumber = powerNumber
    
        let powerResult
    
        if (powerNumber == 0){
                    return 1;
                }
                let temp = num1;
               
                for (i = 0; i < powerNumber - 1; i++){
                    num1 = num1 * temp;
                }
                powerResult = parseFloat(this.num1) + ' ** ' +  parseFloat(powerNumber) + ' = ' + num1
        
            this.history.push(powerResult)     
            
            return powerResult
    }
    

  

    start(calc) {
  
        let action,isCorrectAction, number1, number2, isNumber, val1, val2, result, greeting, greetingContent
        //   greetingContent = 'Please write your name'
        //    greeting = prompt(greetingContent)
        //     if(greeting) {
        //     calc.isCorrectName(greeting)}
      


        do {
             const history = document.querySelector(".results__history")
                history.innerText = `Lista poprzednich operacji: \n'` + calc.getHistoryAsString()
                console.log(this.history)
            const operations = ['+', '-', '*', '/', '^']

            const buttonSubmit = document.querySelector('.buttonSubmit')
            buttonSubmit.addEventListener('click', (event) => {
            

            event.preventDefault()
                const action = document.querySelector('.operations--type').value
            
                let val1 = document.querySelector('.number1').value
            
                let val2 = document.querySelector('.number2').value
            
                let powerNumber = document.querySelector('.powerNumber').value
                let type,operator
                isNumber = calc.checkValue(val1, val2)
              
                if (operations.includes((action))) {
                    console.log(`${action} is in the array.`);
                    switch (action) {
                        case '+': if (isNumber) {
                             result = calc.add(val1, val2,operator='+', type='add')
                        };
                            break;
                        case '-': if (isNumber) {
                            result = calc.subtract(val1, val2, operator='-', type='subtract')
                        };
                            break;
                        case '*': if (isNumber) {
                            result = calc.multiply(val1, val2, operator='*', type='multiply')
                        };
                            break;
                        case '/': if (isNumber) {
                            result = calc.divide(val1, val2, operator='/', type='divide')
                        };
                            break
                        case '^': if (isNumber) { 

                            result = calc.power(val1, powerNumber, operator='^', type='power' ) 
                        };
    
                    }
                } else {
                    console.log(`${action} is not in the array.`);
                }

            })
           
           
        } while (calc.isCorrectAction(action));
    }
}






