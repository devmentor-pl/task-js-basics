function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.add = function(num1, num2) {
    const num1Par = parseInt(num1); //parseFloat() jest używane do konwersji na liczby zmiennoprzecinkowe. 
    const num2Par = parseInt(num2); //parseInt() jest używane do konwersji na liczby całkowite. 

    let result;

    result = num1Par + num2Par;
    this.history.push(num1Par + " + " + num2Par + " = " + result);
    return result;

    

};

Calculator.prototype.substract = function (num1, num2) {
    const num1Par = parseInt(num1); 
    const num2Par = parseInt(num2); 

    let result;
    if (typeof num1Parsed === "number" && typeof num2Parsed === "number") 
    result = num1Par - num2Par;
    this.history.push(num1Par + " - " + num2Par + " = " + result);
    return result;

};

Calculator.prototype.multiply = function(num1, num2) {

    let result;

    result = num1 * num2;
    this.history.push(num1 + " * " + num2 + " = " + result);
    return result;

};

Calculator.prototype.divide = function(num1, num2) {
    let result;

    result = num1 / num2;
    this.history.push(num1Par + " / " + num2Par + " = " + result);
    console.log(this.history);
    return result;

};

Calculator.prototype.power = function(num1, num2) {

    let result = 1;

    for (let i = 1; i <= num2Par; i++) {
        result = result * num1Par;
    }
    this.history.push(num1Par + " ^ " + num2Par + " = " + result);
    return result;
    
};

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if (Number.isNaN(number1) || Number.isNaN(number2)) {
            alert("To nie liczba!");
        } else {
			if (action === "+") {
				calc.add(number1, number2);
			} else if (action === "-") {
				calc.subtract(number1, number2);
			} else if (action === "*") {
				calc.multiply(number1, number2);
			} else if (action === "/") {
				calc.divide(number1, number2);
			} else if (action === "^") {
				calc.power(number1, number2);
			}
		}
	}
} while (calc.isCorrectAction(action));

