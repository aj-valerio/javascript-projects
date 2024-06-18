let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split());
console.log(str.split('e')); //Not only splits the phrase at every e, also removes those 'e's
console.log(str.split(" "));
console.log(str.split(''));

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(" "));
console.log(arr.join(''));

//3) Do split or join change the original string/array?

str.split('e');
arr.join("a");
console.log(str);
console.log(arr);
  //No, neither split nor join change the original output.

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold);
cargoHold = cargoHold.split(",").sort().join(",");
console.log(cargoHold);
