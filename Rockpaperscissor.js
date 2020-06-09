function getUserChoice(userInput){ 
  userInput = userInput.toLowerCase();}
 
function getComputerChoice() {
 num = Math.floor(Math.random() * 3)
 switch (num){
   case 0: 
 return 'paper';
   case 1:
 return 'rock';
   case 2:
 return 'scissors';
 }
}
function determineWinner (userChoice,computerChoice) {
 if(userChoice === computerChoice)
   return 'Tie!';
 if(userChoice === 'rock')
   if(computerChoice === 'paper')
     return 'Computer wins!'
     else 
       return 'You won!'
 if (userChoice === 'paper')
   if(computerChoice === 'scissors')
     return 'Computer wins!'
     else
       return 'You won!'
 if (userChoice === 'scissors')
   if(computerChoice === 'rock')
     return 'Computer wins!'
     else
       return 'You won!';
 if (userChoice !=='rock' && userChoice !== 'paper' && userChoice !== 'scissors')
   return 'Invalid answer. Try again'
}

function playGame (userChoice, computerChoice) {
 userChoice = getUserChoice('papr'); //enter in your response here 
 computerChoice = getComputerChoice()
     if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors'){
       console.log('You threw ' + (userChoice) + '! The computer threw ' + (computerChoice) + '!')
       console.log(determineWinner(userChoice,computerChoice));}
     if  (userChoice !=='rock' && userChoice !== 'paper' && userChoice !== 'scissors'){
       return determineWinner(userChoice, computerChoice)};
}

playGame()
