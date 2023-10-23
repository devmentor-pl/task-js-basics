const operatorCheckActive = document.querySelector('.userCheck.active-btn')

export function addActive(btns) {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function (btn) {
            const allActive = document.querySelectorAll('.active-btn')
              allActive.forEach(function(el){
                console.log(el)
                el.classList.remove('active-btn')
            })
            console.log(btn.target)
            btn.target.classList.add('active-btn')
            // const pozostałe = document.querySelectorAll('.userCheck:not(.active-btn)')
            // console.log(pozostałe)
          
       

            // let currentBtn = document.querySelectorAll('.active-btn')

            // currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            // this.className += ' active-btn'
        })
        
    }

            pageTransitions(operatorCheckActive)

}



export function pageTransitions (btns) {
   
console.log(btns)
          
            
            // let currentBtn = document.querySelectorAll('.active-btn')

            // currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            //this.className += ' active-btn'
}

    // allSections.addEventListener('click', (e) => {
    //     const id = e.target.dataset.id;
    //     console.log(id)
        
    //     if (id) {
          
    //         btns.forEach((btn) => {
    //             btn.classList.remove('active')
    //         })
    //         e.target.classList.add('active')

    //         sections.forEach((section) => {
    //             section.classList.remove('active')
    //         })
    //         const element = document.getElementById(id)
    //         element.classList.add('active')
    //     }
    // })



