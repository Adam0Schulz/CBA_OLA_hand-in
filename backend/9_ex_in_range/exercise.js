// Create a function that takes 3 numbers as 3 parameters. The first parameter is the
// number to check. The 2nd and 3rd parameter is a range (from and to). If the first
// parameter is within the range of the range it should return true and false if not.

const isInRange = (target, lowerLimit, upperLimit) => lowerLimit < target && target < upperLimit;

console.log(isInRange(5, 4, 10));
console.log(isInRange(2, 6, 10));
    
