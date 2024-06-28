function reverse(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}

console.log(reverse("LaunchCode"));

let practiceV = function(str){
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
};

console.log(practiceV("Greetings How are you"));