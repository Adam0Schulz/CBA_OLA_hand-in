// Create a function, findLargest, that takes 4 numbers as 4 parameters and returns
// the largest of the 4 numbers.


// made it so that it can accept multiple params not just 4 as in the assignment
const findLargest = (...numbers) => {
    console.log(
        numbers.reduce((a,b) => 
            b > a ? b : a
        )
    )
}

findLargest(34,6,2,6);