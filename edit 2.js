const getUserChoice = (userInput) =>{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') 
  return userInput
  else 
  return 'What is so hard to understand about rock, paper, scissors?'
} 

const getComputerChoice = () => {
  num = Math.floor(Math.random() *3)
  switch (num) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner= (userChoice, computerChoice)=>{
  if (userChoice === computerChoice)
    return 'tied!'
  if (userChoice === 'rock')
    if(computerChoice === 'paper')
      return 'Computer Wins!'
        else
        return 'You Win!'
    if(userChoice === 'paper')
      if(computerChoice === 'scissors')
      return 'Computer Wins!'
      else
      return 'You Win!'
    if(userChoice === 'scissors')
      if(computerChoice === 'rock')
      return 'Computer Wins!'
      else
      return 'You Win!'
    if (userChoice !== 'rock' || userChoice!== 'paper' || userChoice !== 'scissors' );
    return 'Try again'
}
const playGame = () => {
  const userChoice = getUserChoice('ro');// enter selection
  const computerChoice = getComputerChoice();
  console.log(userChoice);
    if (userChoice === 'rock' || userChoice=== 'paper' || userChoice === 'scissors' )
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
    else if (userChoice !== 'rock' || userChoice!== 'paper' || userChoice !== 'scissors');
    console.log('What game are you playing?')
  else 
  console.log('error')
}
playGame()