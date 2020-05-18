//ALL GLOBAL VARIABLES 
var options = [
    "Foot",
    "Cockroach",
    "Nuclear bomb",
    "Nuclear bomb",
    "Foot",
    "Cockroach",
    "Foot",
    "Nuclear bomb",
    "Cockroach",
];
//managing your and Fez Score
var userScore = 0;
var fezScore = 0;

//initiaze user choice
var userChoice;
    
//randomly select fezchoice
var fezChoice = options[Math.floor(Math.random()* options.length)];

//ALL DOM VARIABLES
// take input from 3 buttons
var btnFoot = document.getElementById("foot");
var btnCockRoach = document.getElementById("cockroach");
var btnBomb = document.getElementById("nuclearBomb");

//Result Display
var result = document.getElementById("result");

//user and fezdisplay
var userDisplay = document.getElementById("userDisplay");
var fezDisplay = document.getElementById("fezDisplay");

//selectiong players scoresDisplay
var p1S = document.getElementById("p1S");
var p2S = document.getElementById("p2S");


//Selecting the reset Button
var resetButton = document.getElementById("reset");
var playButtons = document.getElementsByClassName("playButtons");

//Event Listners
    btnFoot.addEventListener("click",function(){
        userChoice = options[0];
        userDisplay.textContent = "You : " + options[0];
        fezChoice = options[Math.floor(Math.random()* options.length)];
        compareResults(userChoice, fezChoice);
        fezDisplay.textContent = "Fez : " +fezChoice;
        });
    
    btnCockRoach.addEventListener("click",function(){
        userChoice = options[1];
        userDisplay.textContent = "You : " + options[1];
        fezChoice = options[Math.floor(Math.random()* options.length)];
        compareResults(userChoice, fezChoice);
        fezDisplay.textContent = "Fez : " +fezChoice;
        });

    btnBomb.addEventListener("click",function(){
        userChoice = options[2];
        userDisplay.textContent = "You : " + options[2];
        fezChoice = options[Math.floor(Math.random()* options.length)];
        compareResults(userChoice, fezChoice);
        fezDisplay.textContent = "Fez : " +fezChoice;
        });

// Processing

    // compare the value and give out result

    function compareResults(x,y){
        if(x === y){
            result.textContent = " You Tied! :| " ;
        }else if(x === "Foot" && y === "Cockroach"){
            result.textContent = " You Win! :) " ;
            userScore += 1;
            p1S.textContent = userScore;
        }else if(x === "Foot" && y === "Nuclear bomb"){
            result.textContent = "You Lose! :)" ;
            fezScore += 1;
            p2S.textContent = fezScore;
        }else if(x === "Cockroach" && y === "Foot"){
            result.textContent = "You Lose! :)" ;
            fezScore += 1;
            p2S.textContent = fezScore;
        }else if(x === "Cockroach" && y === "Nuclear bomb"){
            result.textContent = "You Win! :)" ;
            userScore += 1;
            p1S.textContent = userScore;
        }else if(x === "Nuclear bomb" && y === "Foot"){
            result.textContent = "You Win! :)" ;
            userScore += 1;
            p1S.textContent = userScore;
        }else if(x === "Nuclear bomb" && y === "Cockroach"){
            result.textContent = "You Lose! :)" ;
            fezScore += 1;
            p2S.textContent = fezScore;
        }
    }
   
    resetButton.addEventListener("click",reset);
    
    function reset(){
        userScore = 0;
        fezScore = 0; 
        p1S.textContent = "0";
        p2S.textContent = "0";
        result.textContent = "Ready To Play...";
        userDisplay.textContent = "You : Ready Fez..."
        fezDisplay.textContent = "Fez : Ready..."
    }

