let userScore = 0;
let compScore = 0;
 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector( "#msg");

const userTurn =document.querySelector("#user-score");
const compTurn= document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options  = ['rock', 'paper','scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame =() =>{
    console.log("Game was draw.");
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner =(userWin, userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userTurn.innerText = userScore;
        // console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        // console.log("You lose!");
        compScore++;
        compTurn.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};



const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice );
    // generate comp choice
    const compChoice = genCompChoice();
    console.log('computer choice= ', compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else{
        let userWin = false;
        if (userChoice === "rock"){
            // scissor,paper
            userWin = compChoice === "paper" ? true : false;
        }
        else if (userChoice === "paper"){
            // scissor,rock
            userWin = compChoice === "scissors" ?  true : false ;
        }else{
            // rock,paper
            userWin = compChoice==="rock"? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
