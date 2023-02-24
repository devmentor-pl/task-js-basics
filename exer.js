
// TO JEST PRAWIDŁOWE WYWOŁANIE FUNKCJI
const sign = "+"
const l = sign.split();
console.log(l);
l = l.parseInt(l);
console.log(l);

// const a = prompt('Podaj 1-szą liczbę');

// const b = prompt('podaj 2-gą liczbę');

// const choice = prompt("podaj coś");


const subtract = function(n1,n2) {
    console.log(n1 - n2)
    return n1 - n2;
}
const converter = function(num1,num2){
    // debugger

    num1 = parseInt(a);
    num2 = parseInt(b);
    
    console.log(typeof num1);
    console.log(typeof num2);
    
    if(isNaN(num1) || isNaN(num2)){
        console.log('błąd');
    }

    else if(typeof num1 === 'number' && typeof num2 === 'number'){
        
        result(num1,num2)

    }


}

const add = function(nb1,nb2){
    
    console.log(nb1 + nb2);
    return nb1 + nb2
    
    // result(n1,n2);
    // console.log(nb1 + nb2);
    // return nb1 + nb2

}
const result = function(v1,v2) {

    // converter(v1,v2);
    console.log(typeof v1);
    console.log(typeof v2);

    // console.log(v1);
    // console.log(v2);

    // console.log(choice);

    // switch(choice){
    //     case '+':
    //         add(v1,v2);
    //         break;
    //     case "-":
    //         subtract(v1,v2)
    //         break;
    //     default:
    //         console.log('inny znak');
    // }
    // console.log(v1,v2);
    
}
// result()
// add()
// converter()
// converter()
// const condition = function() {

//     console.log(choice);

//     switch(choice){
//         case '+':
//             add(v1,v2);
//             break;
//         case "-":
//             subtract(v1,v2)
//             break;
//         default:
//             console.log('inny znak');
//     }
// }

// converter()
// add()



