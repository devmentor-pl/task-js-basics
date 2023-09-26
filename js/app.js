
import { Calculator } from "./Calculator.js";
import { Timer } from "./timer.js";

const init = () => {
    const calc = new Calculator();
    calc.run(calc)

    const timer = new Timer()
    timer.run(timer)
}

document.addEventListener('DOMContentLoaded', init);

// modal.addEventListener('click', (event) => {
//   dialog.showModal();
// //   text.textContent = '';
  
// });

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


 

      
     
      

      
      
      
      
      
      


