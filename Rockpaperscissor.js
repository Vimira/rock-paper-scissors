const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') 
      return userInput
      else 
        return 'what is so hard to understand about rock, paper, scissors?'
    }
  
  const getComputerChoice = ()=> {
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
  const determineWinner = (userChoice,computerChoice)=> {
    if(userChoice === computerChoice)
      return 'Tie!'
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
          return 'You won!'
  }
  
  const playGame = (userChoice, computerChoice) =>{
    userChoice = getUserChoice('bi');
    computerChoice = getComputerChoice()
    console.log(userChoice + '!')
    console.log (computerChoice + '!')
  }
  playGame()