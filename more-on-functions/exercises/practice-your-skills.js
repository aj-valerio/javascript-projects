//Create an anonymous function and set it equal to a variable.

let tripleOrPirate = function(entry1) {
    if (typeof entry1 === "number") {
        return entry1 * 3;
    } else if (typeof entry1 === "string") {
        return "ARRR";
    }else {
        return entry1;
    }
};

console.log(tripleOrPirate(17000));

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = [ 'Elocution', 21, 'Clean teeth', 100 ]

let tripleOrPirateMapped = arr.map(tripleOrPirate);

console.log(arr);
console.log(tripleOrPirateMapped);