
export function createContainer(array) {
    console.log(array)
    const container = document.querySelector(".operations");

    for (let i = 0; i < 5; i++) {
        const outerDiv = document.createElement("ul");
        outerDiv.classList.add("operations__list");

        for (let j = 0; j < 2; j++) {
            const innerDiv = document.createElement("li");
            innerDiv.classList.add("operations__element");
            outerDiv.appendChild(innerDiv);
        }
        container.appendChild(outerDiv);
    }

    const resultsList = document.querySelectorAll('.operations__list')
    resultsList.forEach(function(el,index) {
        if(index < array.length) {
            el.classList.add(`${array[index]}`)
        }
    })

    console.log(resultsList)
}

export function putText(array) {

    const list = document.querySelectorAll('.operations__list')
    list.forEach(function (el) {
    
            const div = document.createElement('button')
            div.classList.add('buttonList')
            el.appendChild(div)

        const texts = document.querySelectorAll('.buttonList')
        console.log(texts)
        texts.forEach(function (el, index) {
            console.log(el, index)
            if (index < array.length) {
             
                el.innerText = array[index]
                el.classList.add('operations__element--last')
                el.classList.add('operations__element')
                el.setAttribute('id', array[index])
            }
        })
   
}
    )

}








