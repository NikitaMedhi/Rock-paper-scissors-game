let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const genCompChoice = () => {
    const options =["rock", "paper", "scissor"];
    const randInd = Math.floor(Math.random()*3);
    return options[randInd];
};

const drawGame = () => {
    msg.innerText="Draw! Play again";
    msg.style.backgroundColor = "#FF4C4C";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText =`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose :( ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}



const playGame = (userChoice) => {    

    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //draw
        drawGame();
    } else {
        let userWin = true;
        if(userChoice==="rock"){
            //comp has paper or sci
            userWin = compChoice==="paper" ? false : true;
        } else if(userChoice==="paper") {
            //comp has rock or sci
            userWin = compChoice==="scissor" ? false : true;
        } else {
            //comp has rock or paper
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner (userWin,userChoice,compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    } );
});