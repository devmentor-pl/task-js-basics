

export class CalculatorTwo {
    constructor() {
    
        this.startElement = document.querySelector(".header__main__start");
        this.random1 = document.querySelector('.random-1')
        this.random2 = document.querySelector('.random-2')
        this.operators = ['+', '-', '*', '/']
        
        // this.operations= {
        //     '+': this.add,
        //     '-': this.subtract,
        //     '*': this.multiply,
        //     '/': this.divide,
        // }
     
        this.result = document.querySelector('.result')
        this.circle = document.querySelector('.circle')
        this.circle2 = document.querySelector('.circle2')
        this.score = document.querySelector('.main__heading span')
        this.number = 0
        this.operatorCheck = document.querySelectorAll('.userCheck')
        this.operatorCheckActive = document.querySelector('.userCheck.active-btn')
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


         add(a, b, randomOperator) {
            console.log(typeof randomOperator)
           let result
            result = ''
           result = a + b;
           this.result.innerText = result
           console.log(this.operatorCheckActive)

this.operatorCheck.forEach(function(el){
    el.addEventListener('click', function(elel){
        elel.stopPropagation()
        console.log(typeof elel.target.id)
                if(Number(elel.target.id) === randomOperator) {
                  alert('+1')
                    this.number += 1
                    this.score.innerText = this.number
                    randomOperator=null
                    this.generateRandomOperation(this.random1, this.random2, this.operators)
                  }
    }.bind(this))
}.bind(this))
     }

    

            
  subtract(a, b, randomOperator) {

    let result; 
    result = ''
    result = (a - b);    
        this.result.innerText = result
        this.operatorCheck.forEach(function(el){
            el.addEventListener('click', function(elel){
                elel.stopPropagation()
                console.log(typeof elel.target.id)
                        if(Number(elel.target.id) === randomOperator) {
                          alert('+1')
                            this.number += 1
                            this.score.innerText = this.number
                            randomOperator=null
                            this.generateRandomOperation(this.random1, this.random2, this.operators)
                          }
            }.bind(this))
        }.bind(this))
 


    }
multiply(a, b, randomOperator) {

    let result; 
    result = ''
    result = a * b;
    this.result.innerText = result
    this.operatorCheck.forEach(function(el){
        console.log(this.operatorCheck)
        el.addEventListener('click', function(elel){
            elel.stopPropagation()
            console.log(typeof elel.target.id)
                    if(Number(elel.target.id) === randomOperator) {
                      alert('+1')
                        this.number += 1
                        this.score.innerText = this.number
                        randomOperator=null
                        this.generateRandomOperation(this.random1, this.random2, this.operators)
                      }
        }.bind(this))
    }.bind(this))
 
 

this.result.innerText = result
    }
    divide(a, b, randomOperator) {
   
        let result; 
        result = ''
           result = a / b;
           this.result.innerText = result
           this.operatorCheck.forEach(function(el){
            el.addEventListener('click', function(elel){
                console.log(typeof elel.target.id)
                        if(Number(elel.target.id) === randomOperator) {
                          alert('+1')
                            this.number += 1
                            this.score.innerText = this.number
                            randomOperator=null
                            this.generateRandomOperation(this.random1, this.random2, this.operators)
                          }
            }.bind(this))
        }.bind(this))
         
       
    
this.result.innerText = result
    }

  checkUserResult(randomElement) {

    const elementToMove = document.querySelector('.active-btn')
    if(elementToMove) {
        const el4 = elementToMove.id 
        return el4
    }
   
    var destination = document.querySelector(".circle");

       if (elementToMove && destination) {
            const clone = elementToMove.cloneNode(true)
            elementToMove.parentNode.appendChild(clone);
            clone.parentNode.removeChild(clone);
            destination.appendChild(clone);
            if(String(randomElement)===String(el4)){
        alert('aqua')
     
        this.number += 1

        this.score.innerText = this.number

        this.generateRandomOperation(this.random1, this.random2, this.randomElement(this.operators))
    
       }
    }
  
     let currentScore = 0;
    // this.operatorCheck.forEach(function(el){

    //     el.addEventListener('click', function(el2){
    //         const elementToMove = el2.target;
    //         const elem4 = el2.target.id
    //         var destination = document.querySelector(".circle");
    
    //      if (elementToMove && destination) {
    //         const clone = elementToMove.cloneNode(true)
    //         elementToMove.parentNode.appendChild(clone);
    //         clone.parentNode.removeChild(clone);
    //         destination.appendChild(clone);
    //         if(String(randomElement)===String(elem4)){
    //     alert('aqua')
     
    //     this.number += 1

    //     this.score.innerText = this.number

    //     this.generateRandomOperation(this.random1, this.random2, this.operators, randomElement)
    
    //    }
    // }

     
       
       
    // }.bind(this))
    
    // }.bind(this))
    
}


    generateRandomOperation(num1, num2, randomOperator) {

     randomOperator = []
     let array = this.operators
     randomOperator = array
    randomOperator =  Math.floor(Math.random() * array.length);
        num1.innerText = ''
       num2.innerText = ''
    
  

        this.randomOperatorIndex = []
        console.log(this.randomOperatorIndex)
      
        this.circle.innerText = ''
        const randomNumber1 = this.chooseRandom(10)
       
        num1.innerText = randomNumber1 

        const randomNumber2 = this.chooseRandom(10)
        num2.innerText = randomNumber2
        
        // this.randomOperatorIndex = this.chooseRandom(array)
        // console.log(this.randomOperatorIndex)
        // const randomOperator = array[this.randomOperatorIndex]
         
        if(randomOperator === 0) {
            this.add(randomNumber1, randomNumber2, randomOperator)
             
        } else if(randomOperator === 1){
            this.subtract(randomNumber1, randomNumber2, randomOperator)
        
       
        } else if(randomOperator === 2) {
            this.multiply(randomNumber1, randomNumber2, randomOperator)
        
        } else if(randomOperator === 3) {
            this.divide(randomNumber1, randomNumber2, randomOperator)
         
        }

      

        // this.checkUserResult(randomOperator)
     
        // this.res.push(randomNumber1, randomNumber2, randomOperator)

        // this.showResult(randomNumber1,randomNumber2,randomOperator)


      
        // const result = this.randomOperator(randomNumber1, randomNumber2);
       
        // const operationFunc = this.add(randomNumber1, randomNumber2);
        // console.log(operationFunc)
  
        // let resultArray = []

        // return resultArray = []
      
        // this.result.innerText =  this.performOperation(randomNumber1, randomNumber2, randomElement)

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



  

    start(calc) {

        let action, isNumber, result, greeting, greetingContent

        

       this.generateRandomOperation(this.random1, this.random2, this.operators)

        // do {

        //     const operations = ['+', '-', '*', '/', '**']
        //     this.operatorType.addEventListener('input', function (event) {
        //         if (event.key === 'Enter') {
        //             event.preventDefault();
        //         }
        //         const input = this.operatorType

        //         if (input.value !== '') {

        //             switch (input.value) {

        //                 case '+': this.setActiveInput(this.num1Input, this.num2Input)
        //                     break;
        //                 case '-': this.setActiveInput(this.num1Input, this.num2Input)
        //                     break;
        //                 case '*': this.setActiveInput(this.num1Input, this.num2Input)
        //                     break;
        //                 case '/': this.setActiveInput(this.num1Input, this.num2Input);
        //                     break;
        //                 case '**': this.setActiveInput(this.num1Input, this.powerInput);
        //                     break

        //             }
        //         }
        //     }.bind(this))

        //     const buttonSubmit = document.querySelector('.main__buttonSubmit')
        //     buttonSubmit.addEventListener('click', function (event) {
        //         event.preventDefault()
        //         const inputsToSetActivity = [this.num1Input, this.num2Input, this.powerInput]
        //         inputsToSetActivity.forEach(function (el) {
        //             el.style.backgroundColor = ''
        //         })
        //         const action = document.querySelector('.operatorType').value

        //         let val1 = document.querySelector('.number1').value
        //         let val2 = document.querySelector('.number2').value
        //         let powerNumber = document.querySelector('.powerNumber').value

        //         isNumber = this.isCorrectNumber(val1, val2)

        //         if (isNumber && operations.includes((action))) {
        //             let operator, type;
        //             switch (action) {
        //                 case '+': if (isNumber) {
        //                     result = calc.add(val1, val2, operator = '+', type = 'add')
        //                 };
        //                     break;
        //                 case '-': if (isNumber) {
        //                     result = calc.subtract(val1, val2, operator = '-', type = 'subtract')
        //                 };
        //                     break;
        //                 case '*': if (isNumber) {
        //                     result = calc.multiply(val1, val2, operator = '*', type = 'multiply')
        //                 };
        //                     break;
        //                 case '/': if (isNumber) {
        //                     result = calc.divide(val1, val2, operator = '/', type = 'divide')
        //                 };
        //                     break
        //                 case '**': if (isNumber) {

        //                     result = calc.power(val1, val2, powerNumber, operator = '**', type = 'power')
        //                 };

        //             }
        //         } else {
        //             alert(`${action} is not in the array.`);
        //         }
        //     }.bind(this))

        // } while ((calc.isCorrectAction(action))) {

        // };
    }
}