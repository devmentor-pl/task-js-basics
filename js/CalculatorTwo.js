

export class CalculatorTwo {
    constructor() {

        this.startElement = document.querySelector(".header__main__start");
        this.number1 = document.querySelector('.operation__number1')
        this.number2 = document.querySelector('.operation__number2')
        this.operators = ['+', '-', '*', '/']
        // this.operations= {
        //     '+': function() {
        //         return this.add
        //     },
        //     '-': this.subtract,
        //     '*': this.multiply,
        //     '/': this.divide,
        // }
      

        // this.operations= {
        //     '+': this.add,
        //     '-': this.subtract,
        //     '*': this.multiply,
        //     '/': this.divide,
        // }
        this.generateRandomOperation = this.generateRandomOperation.bind(this);
        this.resultElement = document.querySelector('.operation__result')
        
        this.circle = document.querySelector('.circle')
        this.operator = document.querySelector('.operation__operator')
        this.score = document.querySelector('.heading__result')
        this.number = 0
        this.operatorCheck = document.querySelectorAll('.userCheck')
        this.operatorCheckActive = document.querySelector('.userCheck.active-btn')
    }

    run(calc) {
        this.startElement.addEventListener("click", () => this.start(calc));
    }

    chooseRandom(element) {
        let number;
        number = Math.floor(Math.random() * element);
        return number
     
    }


    // add = (a, b, randomOperator) => {
     
    //     let result
    //     result = ''
    //     result = a + b;
    //     this.resultElement.innerText = result
     

    //     this.operatorCheck.forEach(function (el) {
    //         el.addEventListener('click', function (elel) {
    //             elel.stopPropagation()
    //             console.log(typeof elel.target.id)
    //             if (Number(elel.target.id) === randomOperator) {
    //                 alert('+1')
    //                 this.number += 1
    //                 this.score.innerText = this.number
    //                 randomOperator = null
    //                 this.generateRandomOperation(this.number1, this.number2, this.operators)
    //             }
    //         }.bind(this))
    //     }.bind(this))
    // }
    // subtract(a, b, randomOperator) {

    //     let result;
    //     result = ''
    //     result = (a - b);
    //     this.resultElement.innerText = result
    //     this.operatorCheck.forEach(function (el) {
    //         el.addEventListener('click', function (elel) {
    //             elel.stopPropagation()
    //             console.log(typeof elel.target.id)
    //             if (Number(elel.target.id) === randomOperator) {
    //                 alert('+1')
    //                 this.number += 1
    //                 this.score.innerText = this.number
    //                 randomOperator = null
    //                 this.generateRandomOperation(this.number1, this.number2, this.operators)
    //             }
    //         }.bind(this))
    //     }.bind(this))



    // }
    // multiply(a, b, randomOperator) {

    //     let result;
    //     result = ''
    //     result = a * b;
    //     this.resultElement.innerText = result
    //     this.operatorCheck.forEach(function (el) {
    //         console.log(this.operatorCheck)
    //         el.addEventListener('click', function (elel) {
    //             elel.stopPropagation()
    //             console.log(typeof elel.target.id)
    //             if (Number(elel.target.id) === randomOperator) {
    //                 alert('+1')
    //                 this.number += 1
    //                 this.score.innerText = this.number
    //                 randomOperator = null
    //                 this.generateRandomOperation(this.number1, this.number2, this.operators)
    //             }
    //         }.bind(this))
    //     }.bind(this))



    //     this.result.innerText = result
    // }
    // divide(a, b, randomOperator) {

    //     let result;
    //     result = ''
    //     result = a / b;
      
    //     this.resultElement.innerText = result
    //     this.operatorCheck.forEach(function (el) {
    //         el.addEventListener('click', function (elel) {
    //             console.log(typeof elel.target.id)
    //             if (Number(elel.target.id) === randomOperator) {
    //                 alert('+1')
    //                 this.number += 1
    //                 this.score.innerText = this.number
    //                 randomOperator = null
    //                 this.generateRandomOperation(this.number1, this.number2, this.operators)
    //             }
    //         }.bind(this))
    //     }.bind(this))



    //     this.result.innerText = result
    // }

    // checkUserResult(randomElement) {

    //     const elementToMove = document.querySelector('.active-btn')
    //     if (elementToMove) {
    //         const el4 = elementToMove.id
    //         return el4
    //     }

    //     var destination = document.querySelector(".circle");

    //     if (elementToMove && destination) {
    //         const clone = elementToMove.cloneNode(true)
    //         elementToMove.parentNode.appendChild(clone);
    //         clone.parentNode.removeChild(clone);
    //         destination.appendChild(clone);
    //         if (String(randomElement) === String(el4)) {
    //             alert('aqua')

    //             this.number += 1

    //             this.score.innerText = this.number

    //             this.generateRandomOperation(this.number1, this.number2, this.randomElement(this.operators))

    //         }
    //     }

    //     let currentScore = 0;
    //     // this.operatorCheck.forEach(function(el){

    //     //     el.addEventListener('click', function(el2){
    //     //         const elementToMove = el2.target;
    //     //         const elem4 = el2.target.id
    //     //         var destination = document.querySelector(".circle");

    //     //      if (elementToMove && destination) {
    //     //         const clone = elementToMove.cloneNode(true)
    //     //         elementToMove.parentNode.appendChild(clone);
    //     //         clone.parentNode.removeChild(clone);
    //     //         destination.appendChild(clone);
    //     //         if(String(randomElement)===String(elem4)){
    //     //     alert('aqua')

    //     //     this.number += 1

    //     //     this.score.innerText = this.number

    //     //     this.generateRandomOperation(this.random1, this.random2, this.operators, randomElement)

    //     //    }
    //     // }




    //     // }.bind(this))

    //     // }.bind(this))

    // }


    generateRandomOperation(num1, num2, array) {

        let randomOperator;
        randomOperator = Math.floor(Math.random() * array.length);

        num1.innerText = ''
        num2.innerText = ''

        const randomNumber1 = this.chooseRandom(10)
        num1.innerText = randomNumber1

        const randomNumber2 = this.chooseRandom(10)
        num2.innerText = randomNumber2
        const operations= {
            0 : add,
            1 : subtract,
            2 : multiply,
            3 : divide
        }

        function add(a, b) {
            return a + b
        }
    
        function subtract(a, b) {
            return a - b;
        }
    
        function multiply(a, b) {
            return a * b;
        }
    
        function divide(a, b) {
            return a / b;
        }

        function getResult(){
        
          const result = operations[randomOperator](randomNumber1, randomNumber2)
          const resultElement = document.querySelector('.operation__result')
          resultElement.innerText = result   
          const operatorCheck = document.querySelectorAll('.userCheck')
          let number = 0
          const score = document.querySelector('.heading__result')
          operatorCheck.forEach(function (el) {
                el.addEventListener('click', function (el) {
                    el.stopPropagation()
                    if (Number(el.target.id) === randomOperator) {
                        alert('+1')
                        number += 1
                        score.innerText = number
                        randomOperator = null
                        return true
                    }
                }.bind(this))
            }.bind(this))
      }
      getResult()

}


start() {
    this.generateRandomOperation(this.number1, this.number2, this.operators)
}

}