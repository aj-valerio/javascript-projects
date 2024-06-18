let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
num = 234567;
let numStr = String(num);
console.log(numStr.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
num = 23.4567
console.log((numStr.length) - 1);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

let numStrLength
{
    if ((numStr.indexOf(".")) >= -1) {
        numStrLength = (numStr.length - 1);
    } else
        numStrLength = (numStr.length);
}
console.log(numStrLength);