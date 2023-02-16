// Your solution goes here 


function playGuessingGame(numToGuess, totalGuesses) {
    let numOfGuesses = 0;
    let userGuessedNum;
    if(totalGuesses == undefined) {
        totalGuesses = 10;
    }

    userGuessedNum = prompt("Enter a number between 1 and 100.");
    while(numOfGuesses < totalGuesses) {
        
        if(userGuessedNum == null) {
            console.log("here");
            return 0;
        }
        
        if(userGuessedNum == numToGuess) {
            numOfGuesses++;
            break;
        }
        
        if(userGuessedNum < numToGuess) {
            userGuessedNum = prompt(userGuessedNum + " is too small. Guess a larger number.");
            numOfGuesses++;
        }   
        
        if(userGuessedNum > numToGuess) {
            userGuessedNum = prompt(userGuessedNum + " is too large. Guess a smaller number.");
            numOfGuesses++;
        }  
        
        if(isNaN(userGuessedNum) || userGuessedNum == ""){
            userGuessedNum = prompt("Please enter a number.");
        }
        //numOfGuesses++;
    }

    if(numOfGuesses >= totalGuesses && userGuessedNum != numToGuess)
        return 0;
    else
        return numOfGuesses;
}