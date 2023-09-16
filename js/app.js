
import { Calculator } from "./Calculator.js";
import { createContainer } from "./Container.js";
import { putText } from "./Container.js";
import { Timer } from "./timer.js";

const calculateActions = ['add', 'minus', 'multiply', 'divide', 'power']

createContainer()
putText(calculateActions)




    const calc = new Calculator();
 calc.run(calc)

    const timer = new Timer();
    timer.run(timer)


