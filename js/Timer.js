export class Timer {
    constructor() {
        this.seconds = 0;
        this.interval = null;

        this.timerElement = document.getElementById("timer");
        this.startElement = document.querySelector(".heading__buttonStart");
        document.getElementById("start").addEventListener("click", () => this.start());
 
        document.getElementById("reset").addEventListener("click", () => this.reset());
    }

    run() {
        this.startElement.addEventListener("click", () => this.start());
    }

    start() {
        if (!this.interval) {
            this.interval = setInterval(() => this.updateTimer(),1000);
        }
  
   
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
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
        const calculatorForm = document.querySelector('.results__dialog')
        const timer = document.querySelector('#timer')
        const greeting = document.querySelector('.main-heading')
   
        var span = document.getElementsByClassName("close")[0];
      
   
    if(stop===null){
        this.stop()
        calculatorForm.remove()
        timer.setAttribute('style', 'position:absolute; top:50%; left:50%')
             const modal = document.getElementById("myModal");
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
          }
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

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }



