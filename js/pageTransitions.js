
export function pageTransitions (btns) {
   
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
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
}


