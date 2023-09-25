
import { Calculator } from "./Calculator.js";
import { CalculatorDialog } from "./CalculorDialog.js";
import { createContainer } from "./Container.js";
import { putText } from "./Container.js";
import { Timer } from "./timer.js";

const calculateActions = ['add', 'minus', 'multiply', 'divide', 'power']

createContainer(calculateActions)
putText(calculateActions)



 const calc = new CalculatorDialog();
calc.run(calc)

const timer = new Timer()
timer.run(timer)


const dialog = document.getElementById('dialog');
const text = document.getElementById('text');
const jsbutton = document.getElementById('jsbutton');
const modal = document.querySelector('.buttonStart');
const reset = document.getElementById('reset');

modal.addEventListener('click', (event) => {
  dialog.showModal();
//   text.textContent = '';
  
});

// jsbutton.addEventListener('click', (event) => {
//   dialog.close();
//   text.innerHTML += '"JS close" closed the dialog.<br/>';
// });


// dialog.addEventListener('cancel', (event) => {
//   text.innerHTML += 'cance event happened<br/>';
// });

// dialog.addEventListener('close', (event) => {
//   text.innerHTML += 'close event happened<br/>';
// });


 

      
     
      

      
      
      
      
      
      


