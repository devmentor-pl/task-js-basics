function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
}

Calculator.prototype.changeNumber = function (num) {
    return parseInt(num);
}

function checkNumber(num){
    if(typeof num === 'number'){
        return num;
    }
    return false;
}

Calculator.prototype.add = function(num1, num2) {
    let x;
    if(checkNumber(num1) && checkNumber(num2)){
        x = num1+num2
    }
    console.log(x);
    const op = '+';
    const equal= '=';
    this.history.push(num1+op+num2+equal+x);
    
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}

Calculator.prototype.subtract = function(num1,num2){
    let x;
    if(typeof num1 && typeof num2 === 'number'){
        x = num1-num2;
    }
    console.log(x);
    const op = '-';
    const equal= '=';
    this.history.push(num1+op+num2+equal+x);
}

Calculator.prototype.multi = function(num1,num2){
    let x;
    if(typeof num1 && typeof num2 === 'number'){
        x = num1*num2;
    }
    console.log(x);
    const op = '*';
    const equal= '=';
    this.history.push(num1+op+num2+equal+x);
}

Calculator.prototype.divi = function(num1,num2){
    let x;

    if(typeof num1 && typeof num2 === 'number'){
        x = num1/num2;
    }
    console.log(x);
    const op = '/';
    const equal= '=';
    this.history.push(num1+op+num2+equal+x);
}

Calculator.prototype.expo = function(num1,num2){
    let x=1;
    let i =0;
    if(typeof num1 && typeof num2 === 'number'){
        while(i<num2) {
            x *=num1;
            i++;
        }
    }
    console.log(x);
    const op = '^';
    const equal= '=';
    this.history.push(num1+op+num2+equal+x);
}


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

        if (action === '+') {
           calc.add(calc.changeNumber(number1), calc.changeNumber(number2));
        }

        if (action === '-'){
            calc.subtract(calc.changeNumber(number1), calc.changeNumber(number2));
        }

        if (action === '*'){
            calc.multi(calc.changeNumber(number1), calc.changeNumber(number2));
        }

        if (action === '/'){
            calc.divi(calc.changeNumber(number1), calc.changeNumber(number2));
        }

        if (action === '^'){
            calc.expo(calc.changeNumber(number1), calc.changeNumber(number2));
        }
    }
} while (calc.isCorrectAction(action));

console.log(calc);