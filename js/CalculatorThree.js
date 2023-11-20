export class CalculatorThree {
    constructor() {
        this.number = 0
        this.number1 = document.querySelector('.operation__number1')
        this.number2 = document.querySelector('.operation__number2')
        this.operators = ['+', '-', '*', '/']
    }


    chooseRandom(element) {
        let number;
        number = Math.floor(Math.random() * element);
        return number

    }

    checkUserAnswer(operator) {
        const operatorCheck = document.querySelectorAll('.userCheck')
        const score = document.querySelector('.heading__result')

        operatorCheck.forEach(function (el) {
            el.addEventListener('click', function (el) {
                if (el.target.id === operator) {
                    alert('+1')
                    this.number += 1
                    score.innerText = this.number
                    operator = null
                    this.render()
                    return true
                }
            }.bind(this))
        }.bind(this))
    }



    showOperation(operator, num1, num2) {

        console.log(operator, num1, num2)
        const operations = {
            '+': add,
            '-': subtract,
            '*': multiply,
            '/': divide
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

        const result = operations[operator](num1, num2)
        const resultElement = document.querySelector('.operation__result')
        resultElement.innerText = result
        if (result) {
            this.checkUserAnswer(operator)
        }

    }

    render() {
        let randomOperator;
        randomOperator = Math.floor(Math.random() * this.operators.length);

        this.number1.innerText = ''
        this.number2.innerText = ''

        const randomNumber1 = this.chooseRandom(10)
        this.number1.innerText = randomNumber1

        const randomNumber2 = this.chooseRandom(10)
        this.number2.innerText = randomNumber2

        this.showOperation(this.operators[randomOperator], randomNumber1, randomNumber2)
    }
}