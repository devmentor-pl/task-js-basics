const main = document.querySelector('.main')

const mainDivs = main.querySelectorAll('div')

const array = [...mainDivs];
const myArray = [1,2,3,4,5]
const divsId = (el) => {
    for (let i = 0; i < el.length; i++) {
        const element = el[i];
        element.id = `element_${i + 1}`;
      }
}

divsId(array)
let result = []

function getRandomElementFromArray(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomElement = arr[randomIndex]
    return randomElement;
  }
  

  let action;
do {
    promptContent = 'Podaj jaką operację chcesz wykonać (+,-,*, /,^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';

    action = prompt(promptContent)
    const randomElement = getRandomElementFromArray(myArray);
     result.push(randomElement)
} while (  result.length >10)
console.log(result)


var prompt = document.getElementByClassName("prompt");
var choice = prompt("What is your choice? CHOICE1, CHOICE2, or CHOICE3?").toUpperCase();
prompt.innerHTML = choice;

function fight()  {
  var intro = prompt("You are a hero who saved your town from a dragon attack years ago. You had fun murdering that dragon, but sadly no dragon has attacked since. Just when all hope is lo, you hear the sirens ring through the city. You know what that means. Do you PREPARE, or IGNORE THE SIRENS?").toUpperCase();
  switch(intro)  {
    case 'PREPARE':
      if(intro === "PREPARE") {
        prompt("You decided to " + intro + ". You need to choose what you will do. Keep in mind, the more activities you do, the less energy you have! You only have 3 days to prepare! What do you do? Do you SEARCH ARMOR STAND, SEARCH WEAPON STAND, GO TO MERCHANT, FIGHT DRAGON, TRAIN, or SLEEP?").toUpperCase();
      } 
  }
}
