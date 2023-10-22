
import { Calculator } from "./Calculator.js";
import { CalculatorTwo } from "./CalculatorTwo.js";
import { Timer } from "./Timer.js";
import './dialogClose.js'


const init = () => {
    // const calc = new Calculator();
    // calc.run(calc)

    const calc2 = new CalculatorTwo();
    calc2.start(calc2)

    const timer = new Timer()
    timer.run(timer)
}

document.addEventListener('DOMContentLoaded', init);

// const random1 = document.querySelector('.random-1')
// const randomNumber1 = Math.floor(Math.random() * 10);
// random1.innerText = randomNumber1 

// const random2 = document.querySelector('.random-2')
// const randomNumber2 = Math.floor(Math.random() * 10);
// random2.innerText =  randomNumber2

// const result = document.querySelector('.result')
// let operators= ['+', '-', '*', "/"]
// var randomIndex = Math.floor(Math.random() * operators.length);
// var randomElement = operators[randomIndex];

// // Display the random element
// console.log(randomElement);

// function performOperation(a, b, op) {
//     if (op === "+") {
//         return a + b;
//     } else if (op === "-") {
//         return a - b;
//     } else if (op === "*") {
//         return a * b;
//     } else if (op === "/") {
//         return a / b;
//     } else {
//         return "Invalid operator";
//     }
// }
// result.innerText =  performOperation(randomNumber1, randomNumber2, randomElement)

// const operatorCheck = document.querySelectorAll('.userCheck')
// operatorCheck.forEach(function(el){
//     el.addEventListener('click', function(el2){
// console.log(randomElement)
//         const elementToMove = el2.target;
//         const elem4 = el2.target.id
//         console.log(elem4)
//     console.log(el2.target.id)
//     var destination = document.querySelector(".circle");

//      if (elementToMove && destination) {
//         alert('rr')
//         // Remove the element from its current parent
//         const clone = elementToMove.cloneNode(true)
       
//         elementToMove.parentNode.appendChild(clone);
//         clone.parentNode.removeChild(clone);
//         // Append the element to the destination
//         destination.appendChild(clone);
  
//     }

//    if(String(randomElement)===String(elem4)){
//     alert('aqua')

//    }
   
// })

// })













 

      
     
      

      
      
      
      
      
      


