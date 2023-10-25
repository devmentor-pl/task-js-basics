
const sections = document.querySelectorAll('.section')
const start = document.querySelector('.header__main__start')
const header = document.querySelector('header')
const main = document.querySelector('.main')
const mainHome = document.querySelector('.icons__home')


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