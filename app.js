// at first user and computer score are 0 //
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelectorAll("#msg");
const userScoreCount = document.querySelector("#user-score");
const compScoreCount = document.querySelector("#comp-score");


// here we going to use Math.random function who select choice randomly from 0 to 2 bcoz we store our option in array so it become index now. So, we going to multiply it with 3, and we use Math.floor to remove all decimal numbers . 
const genCompChoice = () => {
    //rock , paper , scissor//
    const option = ["rock" , "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
}

//here we show winner message
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        //if user win then increase in userScore number//
        userScore++;
        userScoreCount.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        //if comp win then increase in compScore number//
        compScore++;
        compScoreCount.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

//here we show gamedraw message
const gameDraw = () => {
    console.log("Game Draw, Play Again!");
    msg.innerText = "Game Draw, Select Again!";
    msg.style.backgroundColor = "#081b31";

};

//here we write playGame function which help computer to pick some random choice and then when user select one choice then this function also combine both selection and  decide who will WIN//
const playGame = (userChoice) => {
    //generate computer choice//
    const compChoice = genCompChoice();

    // now we using if else method to decide who win and when game draw
    if (userChoice === compChoice ) {
        //game draw function call//
        gameDraw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //computer choice will be Paper OR Scissor.
            userWin = compChoice === "paper" ? false : true ;
        }
        else if (userChoice === "paper") {
            //computer choice will be Rock OR Scissor.
            userWin = compChoice === "scissor" ? false : true ;
        }
        else {
            //computer choice will be Rock OR Paper.
            userWin = compChoice === "rock" ? false : true ;
        }
        //call showWinner function and decide//
        showWinner(userWin, userChoice, compChoice);
    };
};

// here for each choice that user clicked, will pass to playGame function and playGame function will decide who WIN// 
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); 

        playGame (userChoice);
    });   
}); 
