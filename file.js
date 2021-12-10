

// Randomly returns a value of Rock, Paper, or Scissors
function computerPlay() {
    const choice = Math.floor(Math.random()*100)
        if (choice >= 67) {
            return 'scissors'
        }
        else if (choice >= 33 && choice <= 66) {
            return 'rock'
        }
        else
            return 'paper'
}


function gameRound(playerSelection, computerSelection) {
    
    //Tie game
    if (playerSelection === computerSelection) {
        return 'Tie game!'
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Rock covered by paper!'
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock breaks scissors!'
    } 

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Paper cut by scissors!'
    } 
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper covers rock!'
    } 

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors cut the paper!'
    } 
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Scissors crushed by rock!'
    } 
}


function playerPrompt() {
    return prompt('Choose Rock, Paper, or Scissors?');
}

function game() {

    for (let i = 0; i < 5; i++) {
        console.log(gameRound(playerPrompt(), computerPlay()))
        console.log("games played =  " + i);   
    }
}

game();