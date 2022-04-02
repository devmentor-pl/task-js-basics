function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action);
}

Calculator.prototype.addHistory = function (operation) {
    this.history.push(operation)
}
Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
}

Calculator.prototype.operation = function (num1, num2, action) {
    console.log('operation')

    // 1. zamień wartości przekazane przez parametr na typ number
    const number1 = parseFloat(num1)
    const number2 = parseFloat(num2)

    // 2. sprawdź czy są one poprawne
    console.log('--- check numbers ---')
    console.log('number 1 =', number1, !isNaN(number1))
    console.log('number 2 =', number2, !isNaN(number2))

    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    if (!isNaN(number1) && !isNaN(number2)) {
        let result = null
        let operation = null
        switch(action) {
            case '+':
                result = number1 + number2
                operation = number1 + '+' + number2 + '=' + result
                console.log(operation)
                this.addHistory(operation)  
                break
            case '-':
                result = number1 - number2
                operation = number1 + '-' + number2 + '=' + result
                console.log(operation)
                this.addHistory(operation)  
                break
            case '*':
                result = number1 * number2
                operation = number1 + 'x' + number2 + '=' + result
                console.log(operation)
                this.addHistory(operation)  
                break
            case '/':
                if(number2 === 0) {
                    console.log('You can not divide by 0')
                    this.addHistory('You can not divide by 0') 
                    break
                }
                result = number1 / number2
                operation = number1 + '/' + number2 + '=' + result
                console.log(operation)
                this.addHistory(operation)  
                break
            case '^':
                if(number2 < 0) {
                    console.log('You can not exponentiation for minus exponent')
                    return
                }
                result = 1     
                for(let i=1; i<=number2; i++) {
                    result *= number1
                } 
                const exponentiation = number1 + '^' + number2 + '=' + result
                console.log(exponentiation)
                this.addHistory(exponentiation)   
                break
            default:
                console.log("there isn't such operation")
                break
        }     
    } else {
        console.log('Operation not correct')
    }
}
// Calculator.prototype.add = function (num1, num2) {
//     console.log('add')

//     // 1. zamień wartości przekazane przez parametr na typ number
//     const number1 = parseFloat(num1)
//     const number2 = parseFloat(num2)

//     // 2. sprawdź czy są one poprawne
//     console.log('--- check numbers ---')
//     console.log('number 1 =', number1, !isNaN(number1))
//     console.log('number 2 =', number2, !isNaN(number2))

//     // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
//     if (!isNaN(number1) && !isNaN(number2)) {
//         const result = number1 + number2
//         const added = number1 + '+' + number2 + '=' + result
//         console.log(added)
//         // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
//         this.addHistory(added)        
//     } else {
//         console.log('Operation add not correct')
//     }
// }
// Calculator.prototype.subtract = function (num1, num2) {
//     console.log('subtract')

//     const number1 = parseFloat(num1)
//     const number2 = parseFloat(num2)

//     console.log('--- check numbers ---')
//     console.log('number 1 =', number1, !isNaN(number1))
//     console.log('number 2 =', number2, !isNaN(number2))

//     if (!isNaN(number1) && !isNaN(number2)) {
//         const result = number1 - number2
//         const subtract = number1 + '-' + number2 + '=' + result
//         console.log(subtract)
//         this.addHistory(subtract)        
//     } else {
//         console.log('Operation subtract not correct')
//     }
// }
// Calculator.prototype.times = function (num1, num2) {
//     console.log('times')

//     const number1 = parseFloat(num1)
//     const number2 = parseFloat(num2)

//     console.log('--- check numbers ---')
//     console.log('number 1 =', number1, !isNaN(number1))
//     console.log('number 2 =', number2, !isNaN(number2))

//     if (!isNaN(number1) && !isNaN(number2)) {
//         const result = number1 * number2
//         const times = number1 + '*' + number2 + '=' + result
//         console.log(times)
//         this.addHistory(times)        
//     } else {
//         console.log('Operation times not correct')
//     }
// }
// Calculator.prototype.divided = function (num1, num2) {
//     console.log('divided')

//     const number1 = parseFloat(num1)
//     const number2 = parseFloat(num2)

//     console.log('--- check numbers ---')
//     console.log('number 1 =', number1, !isNaN(number1))
//     console.log('number 2 =', number2, !isNaN(number2))

//     if (!isNaN(number1) && !isNaN(number2)) {
//         if(number2 === 0) {
//             console.log('You can not divided by 0')
//             return
//         }
//         const result = number1 / number2
//         const divided = number1 + '/' + number2 + '=' + result
//         console.log(divided)
//         this.addHistory(divided)        
//     } else {
//         console.log('Operation divided not correct')
//     }
// }
// Calculator.prototype.exponentiation = function (num1, num2) {
//     console.log('exponentiation')

//     const number1 = parseFloat(num1)
//     const number2 = parseFloat(num2)

//     console.log('--- check numbers ---')
//     console.log('number 1 =', number1, !isNaN(number1))
//     console.log('number 2 =', number2, !isNaN(number2))

//     if (!isNaN(number1) && !isNaN(number2)) {
//         if(number2 < 0) {
//             console.log('You can not exponentiation for minus exponent')
//             return
//         }
//         let result = 1     
//         for(let i=1; i<=number2; i++) {
//             result *= number1
//         } 
//         const exponentiation = number1 + '^' + number2 + '=' + result
//         console.log(exponentiation)
//         this.addHistory(exponentiation)  
//     } else {
//         console.log('Operation exponentiation not correct')
//     }
// }

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if (isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        calc.operation(number1, number2, action);

        // if (action === '+') {
        //     calc.add(number1, number2);
        // }
        // if (action === '-') {
        //     calc.subtract(number1, number2);
        // }
        // if (action === '*') {
        //     calc.times(number1, number2);
        // }
        // if (action === '/') {
        //     calc.divided(number1, number2);
        // }
        // if (action === '^') {
        //     calc.exponentiation(number1, number2);
        // }
    }

} while (calc.isCorrectAction(action));