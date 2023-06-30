import Validation from "./Validation/Validation.js";

function parseParams(num1, num2) {
  const number1 = Number(num1);
  const number2 = Number(num2);

  Validation.setValue(number1).isNumberType();
  Validation.setValue(number2).isNumberType();

  return [number1, number2];
}

export { parseParams };
