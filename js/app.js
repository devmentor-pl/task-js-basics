
import { Calculator } from "./Calculator.js";
import { Timer } from "./Timer.js";
import './dialogClose.js'

const init = () => {
    const calc = new Calculator();
    calc.run(calc)

    const timer = new Timer()
    timer.run(timer)
}

document.addEventListener('DOMContentLoaded', init);










 

      
     
      

      
      
      
      
      
      


