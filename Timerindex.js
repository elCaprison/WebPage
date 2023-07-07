const Start = document.getElementById("Start-btn")
const Pause = document.getElementById("Pause-btn")
const Reset = document.getElementById("Reset-btn")
const timerDisplay = document.getElementById("timer");

let sec = 0;
let min = 0;
let hour = 0;
let paused = true;
let interValid;

Start.addEventListener("click", () => {
    if(paused){
        interValid = setInterval(UpdateTime, 1000)
    }
});

Pause.addEventListener("click", () => {
    clearInterval(interValid);
    
})

Reset.addEventListener("click", () => {
    clearInterval(interValid);
    hour = 0;
    min = 0;
    sec = 0;
    timerDisplay.textContent = `0${hour}:0${min}:0${sec}`;
})

function UpdateTime(){
    sec += 1;

    if(sec >= 60){
        sec = 0;
        min += 1;
    }else if(min >= 60){
        sec = 0;
        min = 0;
        hour+=1;
    }
    
    timerDisplay.textContent = `${hour}:${min}:${sec}`;

}