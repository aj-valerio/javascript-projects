const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"

let isValidName = function (name){
  if (name.toUpperCase().slice(0,1) === "A"){
    return true;
  }
};

let validName = getValidInput("Enter a name: ", isValidName);

// TODO 2: write a validator 
// that ensures input is a vowel

let isVowelName = function (name){
  if (name.toUpperCase().slice(0,1) === "A" || 
  name.toUpperCase().slice(0,1) === "E" ||
  name.toUpperCase().slice(0,1) === "I" ||
  name.toUpperCase().slice(0,1) === "O" ||
  name.toUpperCase().slice(0,1) === "U"){
    return true;
  }
};

let validVowelName = getValidInput("Enter a name: ", isVowelName);

// Be sure to test your code!
