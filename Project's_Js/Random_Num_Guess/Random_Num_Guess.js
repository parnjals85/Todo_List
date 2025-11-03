 let randomnumber = parseInt(Math.random() * 10 +1);

 const submit = document.querySelector("#subt");   // Submmit Button click
 const userinput = document.querySelector("#guessField");  // Take User Value
 const guessslot = document.querySelector(".guesses");    // Guess Number Display 
 const remaining = document.querySelector(".lastResult");  // Reaminging chnaces to Guess number
 const LowOrHi = document.querySelector(".lowOrHi");    // Indicate User they are close to random num or not
 const startOver = document.querySelector(".resultParas");  // New game

let prevguess = [];   // User Preveious Guesses start with empty arry;
let numguess =  1 ; // Start with random number should be One ;

let playgame = true ;   // User start the Game 

if(playgame){
    submit.addEventListener('click' , function(e){
           e.preventDefault();
           const guess = parseInt(userinput.value);
            validateGuess(guess);
    })
}

// Check user Put Valid Number To Guess Or Not

function validateGuess(guess){
    if(isNaN(guess)){            // Check the Number Is Number Or Not
        alert("Plesase Enter the Valid Number !")
    }else if(guess < 1){             // Check the Guess the Number Is not Less then 1;
        alert("Please Enter the Number Is More then 0!")
    }else if(guess > 100){        // Check the Guess the Number Is not Higher then 100;
        alert("Plese Enter the Number Less Then 100!")
    }else{
        prevguess.push(guess);    // Added the User Previous Guess in array
        if(numguess === 10){        // User allow to 10 time guess the Number if not the msg dis below
             displyguess(guess);
             displaymessage(`Game Over The Random Number is ${randomnumber}`);
             endgame();
             }else{
                displyguess(guess);  
                checkguess(guess);
             }
    }
}
// ✅ Compare user guess with random number
function checkguess(guess){       // Confusion the User like 
  if(guess === randomnumber){
    displaymessage(`Yeah You Guessed Right ${randomnumber}`);
    endgame();
  }else if(guess < randomnumber){
    displaymessage(`Number Is too Low`);
  }else if(guess > randomnumber){
     displaymessage(`Number is Too High`);
  }
}

// Display Message And Update Ui
function displyguess(guess){    // user guess value store in guess then validate with random number and 
  userinput.value = '';  // if true then result or then after increase ohk 
  guessslot.innerHTML += `${guess} , `;
  numguess++;
  remaining.innerHTML = `${10 - numguess}` // remaining chances is for the game
}


function displaymessage(message){
  LowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
   userinput.value = '';
   userinput.setAttribute('disabled' , '');  
    const p = document.createElement('P');
    p.id('newGame')
    p.classList.add('button')
    p.style.cursor('pointer')
    p.style.color('blue')
    p.innerHTML = `<h3>Start New Game</h3>`
    startOver.appendChild(p);
    playgame = false;
    newGame();
   // for taking key we add empty string otherwise they throw error
} 
function newGame(){
    const newbt = document.querySelector('#newGame');
    newbt.addEventListener('click' , function(e){
        randomnumber = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        numguess = 1;
        guessslot.innerHTML = '';
        remaining.innerHTML = `${10 - numguess} `;
        userinput.removeAttribute('disabled');
         startOver.removeChild(p);
         playgame = true;
    })
}