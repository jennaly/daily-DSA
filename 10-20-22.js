// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)
// repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
// repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
// repeats([5, 10, 19, 13, 10, 13]),24)

//given an array of numbers, two numbers occur once, the rest occur twice. 
//return the sum of the numbers that occur only once.

//return the sum as a number? => yes
//return instead of console.log? => yes
//every number in the array is number type? => yes

//iterate through elements in the array
//check to see the element at the current index has a lastIndexOf value other than its indexOf value (index of the first instance of the element)
//if it does, it occurs twice
//if it doesn't, it occurs once
//reduce their sums

function repeats(numbers) {
   let occurOnce = numbers.filter(num => numbers.indexOf(num) === numbers.lastIndexOf(num))
   return occurOnce.reduce((a,b) => a + b, 0)
}

//one-liner
function repeats(numbers) {
    return numbers.filter(num => numbers.indexOf(num) === numbers.lastIndexOf(num)).reduce((a,b) => a + b, 0)
}
