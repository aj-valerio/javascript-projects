let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function(){return Math.round(Math.random()*10)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function(){return Math.round(Math.random()*10)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function(){return Math.round(Math.random()*10)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function(){return Math.round(Math.random()*10)}
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function(){return Math.round(Math.random()*10)}
};

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

//    move = function(){return Math.round(Math.random()*10)};

// Create an array to hold the animal objects.

let animalCrewArray = [superChimpOne, salamander, superChimpTwo, dog, waterBear];

// Print out the relevant information about each animal.
crewReports = function(crewMember){
   console.log(`${crewMember.name} is a ${crewMember.species}. They are ${crewMember.age} years old and ${crewMember.mass} kilograms. Their ID is ${crewMember.astronautID}.`);
};

crewReports(salamander);

// Start an animal race!

fitnessTest = function(array){
   results = [];
   for (i = 0; i < array.length; i++){
      steps = 0;
      turns = 0;
      while (steps < 20){
         steps = steps + array[i].move();
         turns = turns + 1;
      }
      results[i] = `${array[i].name} took ${turns} turns to take 20 steps.`;  
   }
   return results;
}
console.log(fitnessTest(animalCrewArray));