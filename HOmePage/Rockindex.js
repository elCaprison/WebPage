const RockBtn = document.getElementById("rock-Btn");
const paperBtn = document.getElementById("paper-Btn");
const scissorsBtn = document.getElementById("scissors-Btn");
const playeroption = null;
const aiLabel = document.getElementById("Computer");
const playerLabel = document.getElementById("Player");
const winnerLabel = document.getElementById("winner");


let playerwinCount = 0;
let aiwincount = 0;

///order:           0         1         2
const options = ["paper", "scissors", "rock"];

////create a function that makes logics for each object

RockBtn.addEventListener("click", () => {
    let generatenumber = Math.floor(Math.random() * options.length);
    let aianswer = options[generatenumber]; ///random option
    let playerAnswer = "rock"; ///Rock

    if(playerAnswer == options[2] && aianswer == options[2]){
        console.log("Draw, Both parties submitted the same element!");
        aiLabel.textContent = `(${aiwincount})Computer: ${aianswer}`;
        playerLabel.textContent = `(${playerwinCount})Player: ${playerAnswer}`;
        winnerLabel.textContent = "Winner: Draw";

    }else if(playerAnswer == options[2] && aianswer == options[0]){
        console.log("Player Losses, Paper beats rock");
        aiwincount += 1;
        aiLabel.textContent = `(${aiwincount})Computer: ${aianswer}`;
        playerLabel.textContent = `(${playerwinCount})Player: ${playerAnswer}`;
        winnerLabel.textContent = "Winner: Computer";


    }else if(playerAnswer == options[2] && aianswer == options[1]){
        console.log("Player wins, Rock beats " + options[1]);
        playerwinCount += 1;
        aiLabel.textContent = `(${aiwincount})Computer: ${aianswer}`;
        playerLabel.textContent = `(${playerwinCount})Player: ${playerAnswer}`;
        winnerLabel.textContent = "Winner: Player";
    }

    console.log(`Player choose ${RockBtn.value} (Ai: ${options[generatenumber]})`);
})

paperBtn.addEventListener("click", () => {
    let generatenumber = Math.floor(Math.random() * options.length);
    let aianswer = options[generatenumber]; ///random option
    let playerAnswer = "paper"; ///Rock
    ///// 0 is paper, 1 is scissors, 2 is rock
    if(playerAnswer == options[0] && aianswer == options[0]){
        console.log("Draw, Both parties submitted the same element!");
        aiLabel.textContent = `(${aiwincount})Computer: ${aianswer}`;
        playerLabel.textContent = `(${playerwinCount})Player: ${playerAnswer}`;
        winnerLabel.textContent = "Winner: Draw";

    }else if(playerAnswer == options[0] && aianswer == options[1]){
        console.log("Player Losses, Scissors cuts paper");
        aiwincount += 1;
        aiLabel.textContent = `(${aiwincount})Computer: ${aianswer}`;
        playerLabel.textContent = `(${playerwinCount})Player: ${playerAnswer}`;
        winnerLabel.textContent = "Winner: Computer";

    }else if(playerAnswer == options[0] && aianswer == options[2]){
        console.log("Player wins, Paper beats " + options[2]);
        playerwinCount += 1;
        aiLabel.textContent = `(${aiwincount})Computer: ${aianswer}`;
        playerLabel.textContent = `(${playerwinCount})Player: ${playerAnswer}`;
        winnerLabel.textContent = "Winner: Player";
    }

    console.log(`Player choose ${paperBtn.value} (Ai: ${options[generatenumber]})`);
});

scissorsBtn.addEventListener("click", () =>{
    let generatenumber = Math.floor(Math.random() * options.length);
    let aianswer = options[generatenumber]; ///random option
    let playerAnswer = options[1]; ///Rock
    ///// 0 is paper, 1 is scissors, 2 is rock

    if(playerAnswer == options[1] && aianswer == options[1]){
        console.log("Draw, Both parties submitted the same element!");
        aiLabel.textContent = `(${aiwincount})Computer:  ${aianswer}`;
        playerLabel.textContent = `(${playerwinCount})Player: ${playerAnswer}`;
        winnerLabel.textContent = "Winner: Draw";
        playerAnswer += 0;

    }else if(playerAnswer == options[1] && aianswer == options[0]){
        console.log("Player Wins, Scissors cuts paper");
        playerwinCount +=1;
        aiLabel.textContent = `(${aiwincount})Computer: ${aianswer}`;
        playerLabel.textContent = `(${playerwinCount})Player: ${playerAnswer}`;
        winnerLabel.textContent = "Winner: Player";
        


    }else if(playerAnswer == options[1] && aianswer == options[2]){
        console.log("Player loses, rock obilerates scissors")
        aiwincount += 1;
        aiLabel.textContent = `(${aiwincount})Computer:  ${aianswer}`;
        playerLabel.textContent = `(${playerwinCount})Player: ${playerAnswer}`;
        winnerLabel.textContent = "Winner: Computer";
        
    }

    console.log(`Player choose ${paperBtn.value} (Ai: ${options[generatenumber]})`);
})