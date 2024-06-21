const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let str2 = str.slice(0,3);
str2 = str.slice(3) + str2;
console.log(str2);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`When the first three letters of ${str} are moved to the end, the result is ${str2}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let info = input.question("Enter number of letters to be moved to end of word: ");
let str3 = str.slice(0,info);
str3 = str.slice(info) + str3;
console.log(str3);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let str4;
if (str.length < info){
    str4 = str.slice(0,3);
    str4 = str.slice(3) + str4;
    console.log(str4);
    console.log(`Error: word length is shorter than number entered; default to 3 letters.`);
}