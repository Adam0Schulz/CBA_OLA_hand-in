
// Exercise no. 1. - function that outputs given name with parameters being first name and last name
function outputName(firstname, lastname) {
    const result = firstname + ' ' + lastname
    console.log(result)
    return result
}

outputName("Adam", "Schulz")

// Exercise no. 2. - function that calculates the area of a rectangle
function calcRectangle(sideA, sideB) {
    return sideA * sideB
}

console.log(calcRectangle(5, 10))

// Exercise no. 3. - function that takes speed and time as params and calculates and return the distance
// Params - speed in km/h, time in hours
function calcDistance(speed, time) {
    const result = speed * time
    console.log(`You have travelled ${result} km`)
    return result
}


// Exercise no. 4. - create an object called calculator with name of the owner 
//                  and modify your code so the 3 previous functionare attached to the object
const calculator = {
    ownerName: 'Adam',
    outputName: (first, last) => outputName(first, last),
    calcRectangle: (a, b) => calcRectangle(a, b),
    calcDistance: (s, t) => calcDistance(s, t)
}

console.log('exercise: 3 - ', calculator.outputName('Adam', 'Schulz'))
console.log('exercise: 3 - ', calculator.calcRectangle(4, 5))
console.log('exercise: 3 - ', calculator.calcDistance(50, 5))
