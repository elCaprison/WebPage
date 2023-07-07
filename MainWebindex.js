
let timerbtn = document.getElementById("timerBtn");
let rockBtn = document.getElementById("rockBtn");
let snakeBtn = document.getElementById("snakeBtn");
let TicTacToebtn = document.getElementById("ticBtn");
let pingpongBtnbtn = document.getElementById("pingpongBtn");

timerbtn.addEventListener("click", () =>{
    console.log("Timer project Started");
    window.location.href = "TimerWebpage.html";
})

rockBtn.addEventListener("click", () =>{
    console.log("rock paper scissors game started");
    window.location.href = "RockPaperScissors.html";
})

snakeBtn.addEventListener("click", () =>{
    console.log("snake game started");
    window.location.href = "snakegameweb.html";
})


TicTacToebtn.addEventListener("click", () =>{
    console.log("tictactoe game Started");
    window.location.href = "tictactoe.html";
})

pingpongBtnbtn.addEventListener("click", () =>{
    console.log("pingpong game started");
    window.location.href = "pingponggame.html";
})


