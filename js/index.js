class CountdownTimer {

    constructor({targetDate, selector}) {
        
        this.targetDate = targetDate;
        this.selector = document.querySelector(selector);         
        this.days = document.querySelector('[data-value="days"]');
        this.hours = document.querySelector('[data-value="hours"]');
        this.mins = document.querySelector('[data-value="mins"]');
        this.secs = document.querySelector('[data-value="secs"]');        
        this.timer = this.timer.bind(this);       
    }   

         timer () {
    
        const time =   this.targetDate - Date.now();
        
        let daysValue = Math.floor(time / (1000 * 60 * 60 * 24));
        let hoursValue = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minsValue = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        let secsValue =  Math.floor((time % (1000 * 60)) / 1000);
                     
        this.days.textContent = daysValue;
        this.hours.textContent = hoursValue;
        this.mins.textContent = minsValue;
        this.secs.textContent = secsValue;            
        }
        
        onStartTimer() {
                          
            if (this.targetDate > Date.now()) {
                
                setInterval(this.timer, 1000);
                setTimeout(this.onVisibleField, 1000);
                document.querySelector('.title').textContent = "You have time"
                             
             } else {
                document.querySelector('.title').textContent = "You are late"                
            }
    }
    
      onVisibleField() {
        document.querySelector('[data-value="days"]').classList.add("visible");
        document.querySelector('[data-value="hours"]').classList.add("visible");
        document.querySelector('[data-value="mins"]').classList.add("visible");
        document.querySelector('[data-value="secs"]').classList.add("visible");
          
    }
    
}
 
const timer1 = new CountdownTimer({  
    targetDate: new Date('Aug 08, 2021, 11:59'),
    selector: '#timer-1'
});

timer1.onStartTimer()
