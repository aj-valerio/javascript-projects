function randomFromArray(arr){
  let element = Math.trunc(Math.random()*arr.length);
  return arr[element];
  //Your code here to select a random element from the array passed to the function.
}

//TODO: Export the randomFromArray function.

module.exports = randomFromArray;
