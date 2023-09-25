export class Timer {
    constructor() {
        this.seconds = 0;
        this.interval = null;

        this.timerElement = document.getElementById("timer");
        this.startElement = document.querySelector(".buttonStart");
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
   
    if(stop===null){
        this.stop()
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



