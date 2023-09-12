
import { Calculator } from "./Calculator.js";
import { createDivs } from "./Container.js";
import { createText } from "./Container.js";
import { putText } from "./Container.js";
const text = ['add', 'minus', 'multiply', 'divide', 'power']

createDivs()
createText()
putText(text)

let action, promptContent, isCorrectAction, number1, number2;

const buttonStart = document.querySelector('.buttonStart')
buttonStart.addEventListener('click', function(el) {
    const calc = new Calculator();
    do { 
        promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
        promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
        promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();
    
        action = prompt(promptContent);
        isCorrectAction = calc.isCorrectAction(action);
        if(isCorrectAction) {
            number1 = prompt('Podaj liczbę nr 1');
            number2 = prompt('Podaj liczbę nr 2');
    
            if(action === '+') {
                calc.add(number1, number2);
            }
        }
        
    } while(calc.isCorrectAction(action));

   
})