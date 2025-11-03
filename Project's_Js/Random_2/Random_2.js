let randomnumber = parseInt(Math.random() * 100 +1);

const userinput = document.querySelector('#number');
const submit = document.querySelector('#submit');
const remaining = document.querySelector('#remaining');
const low = document.querySelector('.low')

let playgame = true;
let numguess = 1;
if(playgame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value)
       validate(guess);
    })
}
function validate(guess){
   if(isNaN(guess)){
    alert('Please Enter the Valid Value');
   }else if(guess < 1){
    alert("Please Enter the Value Which Is Greater then One")
   }else if(guess > 100){
     alert("Please Enter the Value Which Is Less then 100")
   }else if(numguess === 11){
    //    displayguess(guess);
    //    displaymessage(`Game Over The Random Number is ${randomnumber}`)
check(guess);   
}
}
// function check(guess){
//        if(guess === randomnumber){
//         displaymessage(`Yeah`)
//        }else if(guess > randomnumber){
//         displaymessage(`Number is Low`)
//        }else if(guess < randomnumber){
//         displayguess(`Number is too hight`)
//        }
// }

function check(guess) {
  if (guess === randomnumber) {
    displaymessage(`🎉 Correct! You guessed it in ${numguess} tries!`);
  } else if (numguess === 10) {
    displaymessage(`💀 Game Over! The number was ${randomnumber
    }`);
  } else if (guess > randomnumber) {
    displaymessage(`📉 Too high! Try again.`);
    displayguess();
  } else if (guess < randomnumber) {
    displaymessage(`📈 Too low! Try again.`);
    displayguess();
  }
}


function displayguess(guess){
   userinput.value = '';
   numguess++;
   remaining.innerHTML = `(${10 - numguess +1})`;
}

function displaymessage(message){
    low.innerHTML = `<h2>${message}</h2>`
}