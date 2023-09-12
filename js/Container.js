


export function createDivs() {
    const container = document.querySelector(".container"); // Assuming you have a container div in your HTML
   
    for (let i = 0; i < 5; i++) {
        const outerDiv = document.createElement("div");
        outerDiv.classList.add("outer-div"); // Optional: Add a CSS class for styling
        

        for (let j = 0; j < 3; j++) {
            const innerDiv = document.createElement("div");
            innerDiv.classList.add("inner-div"); // Optional: Add a CSS class for styling
            outerDiv.appendChild(innerDiv);
        }

        container.appendChild(outerDiv);
    }
}

// Call the function to create the divs when needed

// export function createText() {
//       const list = document.querySelectorAll('.outer-div')
   
     
//       console.log(list)
// const newDibs = list.forEach(function(el){
//   const div = document.createElement('div')
//   div.classList.add('divclas')
  
// const li =  el.appendChild(div)

// return  li
  
  
// })



// }

// export function putText(tekst) {
//     const divsClas = document.querySelectorAll('.divclas')
//         divsClas.forEach(function(el, index){
//             console.log(el, index)
//         if(index < tekst.length) {
//             el.textContent = tekst[index]
//         }
           
//         })
    
//     }










