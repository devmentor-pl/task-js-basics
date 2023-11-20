const operatorCheckActive = document.querySelector('.userCheck.active-btn')
const allSections = document.querySelector('.main-content')
const sections = document.querySelectorAll('.section')
const start = document.querySelector('.header__main__start')
const header = document.querySelector('header')
const main = document.querySelector('.main')
const mainHome = document.querySelector('.icons__home')

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






export function forwardPage() {
  
  
    start.addEventListener('click', (e) => {
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            main.classList.add('active')
        })

        mainHome.addEventListener('click', (e) => {
            alert('click')
            main.classList.remove('active')
           header.classList.add('active')
        })


}




