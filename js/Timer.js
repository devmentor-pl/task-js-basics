export class Timer {
    constructor() {
        this.seconds = 0;
        this.interval = null;
        this.resultTime = ''
        this.timerElement = document.getElementById("timer");
        this.startElement = document.querySelector(".buttonStart");
    }

    run() {
        console.log('timer')
        this.startElement.addEventListener("click", () => this.start());
    }

    start() {
        if (!this.interval) {
            this.interval = setInterval(() => this.updateTimer(), 1000);
        }
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
        this.resultTime = this.timerElement.textContent 
    
         const modal = document.querySelector("dialog");
            modal.showModal()
            modal.style.display = "block"
           const mainResult = document.querySelector('.modal__timer')
            mainResult.innerText = this.resultTime
        
         

          
    
        message=message

    }

    reset() {
        this.stop();
        this.seconds = 0;
        this.updateTimer();
    }

    updateTimer() {

        const minutes = Math.floor(this.seconds / 60);
        const seconds = this.seconds % 60;
       this.timerElement.textContent =
            this.pad(minutes, 2) + ":" +
            this.pad(seconds, 2);
        this.seconds++;
        const stop = document.querySelector(".operations ul")
        const timer = document.querySelector('#timer')

        if (stop === null) {
            this.stop('Show Time')
            timer.setAttribute('style', 'position:absolute; top:50%; left:50%')
      
           
        }
    }

    pad(num, size) {
        let s = num.toString();
        while (s.length < size) {
            s = "0" + s;
        }
        return s;
    }
}

export default Timer




