// ▪ Using if else and loops, create a javascript application that will
// 1. Randomly select a number between 1 and 100.
// 2. Ask the user for a quess (between 1 and 100)
// 3. Let the user know if the quess is higher or lower than the randomly selected
// number, and ask for a new quess, if the quess was not correct.
// 4. Let the user know that they guessed correctly and how many guesses they used,
// if the guess correctly.
// 5. You can use this extension to show an html document easily through
// VSCode: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

const readline = require('readline');

// Create an interface to read lines from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask the user for input and validate it as a number
const askForNumber = (query) => {
  return new Promise((resolve) => {
    rl.question(query, (input) => {
      const num = parseFloat(input);
      // Validate if the input is a number
      if (isNaN(num)) {
        console.log("That's not a valid number. Please try again.");
        resolve(askForNumber(query));
      } else {
        resolve(num);
      }
    });
  });
};

// Function to generate a random number between 1 and 100
const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

// Main function to run the guessing game
async function startGame() {
  const randomNumber = getRandomNumber();
  let guess = null;

  console.log("I'm thinking of a number between 1 and 100. Try to guess it!");

  // Loop until the user guesses the correct number
  while (guess !== randomNumber) {
    guess = await askForNumber("Please enter your guess: ");
    
    if (guess > randomNumber) {
      console.log("Lower!");
    } else if (guess < randomNumber) {
      console.log("Higher!");
    } else {
      console.log("Bullseye! You guessed it!");
    }
  }

  // Close the readline interface when the game is over
  rl.close();
}

// Start the game
startGame();


