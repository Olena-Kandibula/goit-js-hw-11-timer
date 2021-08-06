class CountdownTimer {

    constructor({targetDate, selector}) {
        
        this.targetDate = targetDate;
        this.selector = document.querySelector(selector);
        this.timerId = null;
        this.days = document.querySelector('[data-value="days"]');
        this.hours = document.querySelector('[data-value="hours"]');
        this.mins = document.querySelector('[data-value="mins"]');
        this.secs = document.querySelector('[data-value="secs"]');
        this.values = document.querySelectorAll('[data-value]');
        this.timer = this.timer.bind(this);
        this.onVisibleField = this.onVisibleField.bind(this);
        this.offVisibleField = this.offVisibleField.bind(this);
               
    }
    
    timer() {
        
        const time = this.targetDate - Date.now();
        if (this.targetDate > Date.now()) {
            let daysValue = Math.floor(time / (1000 * 60 * 60 * 24));
            let hoursValue = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minsValue = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            let secsValue = Math.floor((time % (1000 * 60)) / 1000);
         
            this.days.textContent = daysValue;
            this.hours.textContent = hoursValue;
            this.mins.textContent = minsValue;
            this.secs.textContent = secsValue;
            // console.log(secsValue); 

            document.querySelector('.title').textContent = "You have time"
            setTimeout(this.onVisibleField, 1000);

        } else {
            clearInterval(this.timerId);
            document.querySelector('.title').textContent = "You are late"
            setTimeout(this.offVisibleField, 1000);
        }
    }
    
    onStartTimer() {       
        this.timerId = setInterval(this.timer, 1000);        
    }
    
      onVisibleField() {        
        this.values.forEach((value) => {
            value.classList.add("visible")           
         })      
    }

    offVisibleField() {
        this.values.forEach((value) => {
            value.classList.remove("visible")           
        })    
    }
    
}
 
const timer1 = new CountdownTimer({  
    targetDate: new Date('Aug 08, 2021, 11:59'),
    selector: '#timer-1'
});

timer1.onStartTimer()
