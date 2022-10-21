// Given an array of digital numbers, 
// return a new array of length number containing the last even numbers from the original array 
// (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

//given an array of numbers and a number x
//return a new array of the last x even numbers from the original array

//number type? => yes
//x is also a number? => yes
//always a minimum of x numbers of even numbers in the array? => yes
//return output numbers in an array? in relative order => yes

//initialize output array
//iterate through o.g. array from the last index
//for each element in the array, check if the element is even
//if it is, push(unshift) it to the output array to preserve relative order
//exit condition: output.length == x 

function getLastEven (numbers, x) {
    let output = [];

    for (let i = numbers.length; i >= 0; i--) {
        if (numbers[i] % 2 === 0) {
            output.unshift(numbers[i]);
            if (output.length == x) {
                return output
            }
        }
    }
}


//another way:
//return an array with only even numbers, 
//and extracting the last x numbers from the array

function getLastEven (numbers, x) {
    return evenNumbers = numbers.filter(num => num % 2 === 0).slice(-x) //array of even numbers
}

//one liner
const getLastEven = (numbers, x) => numbers.filter(num => num % 2 === 0).slice(-x)


console.log(getLastEven([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) 
// => [4, 6, 8]

console.log(getLastEven([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
// => [-8, 26]

console.log(getLastEven([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)) 
//=> [6]
