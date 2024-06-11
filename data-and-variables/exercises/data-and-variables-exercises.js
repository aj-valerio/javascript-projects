// Declare and assign the variables below
let spaceShuttleName = "Determination";
let shuttleSpeedMPH = Number(17500);
let distanceToMarsKm = Number(225000000);
let distanceToMoonKm = Number(38400);
const milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttleName);
console.log(typeof shuttleSpeedMPH);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKm);

// Calculate a space mission below
let hoursToMars = (distanceToMarsKm * milesPerKm) / shuttleSpeedMPH;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(spaceShuttleName + " will reach Mars in " + daysToMars + " days.");

// Calculate a trip to the moon below
let hoursToMoon = (distanceToMoonKm * milesPerKm) / shuttleSpeedMPH;
let daysToMoon = hoursToMoon / 24

// Print the results of the trip to the moon below
console.log(spaceShuttleName + " will reach the Moon in " + daysToMoon + " days.");