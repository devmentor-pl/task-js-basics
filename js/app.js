
import { Calculator } from "./Calculator.js";
import { Timer } from "./Timer.js";

const init = () => {
    const calc = new Calculator();
    calc.run(calc)

    const timer = new Timer()
    timer.run(timer)
}

document.addEventListener('DOMContentLoaded', init);


const dialog = document.getElementById("modal");


function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}





 

      
     
      

      
      
      
      
      
      


