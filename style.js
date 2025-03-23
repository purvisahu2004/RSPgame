let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score")
const genComputerchoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame = ()=>{
    console.log("game was draw.");
    msg.innerHTML = "Game Draw, Play again.";
    msg.style.backgroundColor = "yellow";
};
const showwinner = (userwin , userchoice , compChoice) =>{
    if(userwin){
        userScore++;
        userScorepara.innerHTML = userScore;
        console.log("you win!");
        msg.innerHTML = `You win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorepara.innerHTML = compScore;
      
        msg.innerHTML = `You lose!  ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor ="red";
    }
}
const playGame = (userchoice)=>{
          console.log("user choice = ", userchoice); 
          const compChoice = genComputerchoice();
          

          if (userchoice=== compChoice){
                 drawGame()
          }
          else{
            let userwin = true;
            if(userchoice === "rock"){
                userwin = compChoice ==="paper" ? false: true;

            }
            else if(userchoice === "paper"){
                 userwin = compChoice === "scissors" ? false : true;
            }
            else{
               userwin= compChoice === "rock"? false:true;
            }
              showwinner(userwin , userchoice,compChoice);
          }
}
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click" ,() =>{
          const userchoice = choice.getAttribute("id")
          console.log("next game");
          playGame(userchoice)
    });
});
