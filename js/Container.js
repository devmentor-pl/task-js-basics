
export function createContainer() {
    const container = document.querySelector(".results");

    for (let i = 0; i < 5; i++) {
        const outerDiv = document.createElement("ul");
        outerDiv.classList.add("results__list");

        for (let j = 0; j < 3; j++) {
            const innerDiv = document.createElement("li");
            innerDiv.classList.add("results__element");
            outerDiv.appendChild(innerDiv);
        }
        container.appendChild(outerDiv);
    }
}

export function putText(array) {

    const list = document.querySelectorAll('.results__list')
    list.forEach(function (el) {
        // const div = document.createElement('li')
        //     el.appendChild(div)
            const div = document.createElement('button')
            div.classList.add('buttonList')
            el.appendChild(div)
//  })
//         const texts = document.querySelectorAll('.results__list li:last-child')
        const texts = document.querySelectorAll('.buttonList')
        console.log(texts)
        texts.forEach(function (el, index) {
            console.log(el, index)
            if (index < array.length) {
                // el.textContent = array[index]
                el.innerText = array[index]
                el.classList.add('results__element--last')
                el.classList.add('results__element')
                el.setAttribute('id', array[index])
            }
        })
   
}
    )

}








