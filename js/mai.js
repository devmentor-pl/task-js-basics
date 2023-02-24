const a = prompt('Podaj 1-szą liczbę');

const b = prompt('podaj 2-gą liczbę');

const add = function(num1,num2) {
    debugger
    num1 = parseInt(a);
    num2 = parseInt(b);

    // num1 = a
    // num2 = b
    // condition(a,b);

    if((isNaN(num1)) || (isNaN(num2))){
        // console.log('błąd');
        // prompt('Nie podałeś liczby!')
        return 'Nie podałeś liczby!'
    }
    else if((typeof num1 === 'number') && (typeof num2 === 'number')){
        // prompt(num1 + num2)
        return num1 + num2
        // return prompt(num1 + num2);
        // console.log('ok');
    }    
}

const condition = function(number1,number2) {
    debugger
    number1 = parseInt(a);
    number2 = parseInt(b);
    // const result = number1 + number2
    // return number1,number2
    return result
}

// info()
const info = function() {
    // add();
    // console.log(add());
    // add();
    // condition()
    console.log(condition());
}
info()

// console.log(add());