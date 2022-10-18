// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix (integers) {
    const nums = integers.map(int => Number(int));
    return nums.reduce((prev, num) => prev + num, 0);
}

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

//given an array of integers, integers can be strings or numbers
//return the sum of all of the values in the array

//return the sum as a number? => yes
//array will never be empty? => yes
//elements do not consist of special characters or symbols? => yes
//return instead of console.log? => yes

//create a new array consisting of only numbers
//iterate through given array, execute a callback that applies Number() to each element
//map the transformed values to a new array
//apply .reduce on the new array
