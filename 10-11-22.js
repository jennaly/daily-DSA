// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//given a number 
//print "Fizz" when the number is divisible by 3, print "Buzz" when divisible by 5, print "FizzBuzz" when divisible by both
//what to print if the number is not divisible by 3 or 5? 
//by print, console.log? 
//typeof input == number ?
//5 => Buzz
//15 => FizzBuzz
//9 => Fizz

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0)  {
        //print fizz
        console.log("FizzBuzz");
      } else if (i % 5 === 0) {
        //print buzz
        console.log("Buzz");
      } else if (i % 3 === 0) {
        //print fizzbuzz
        console.log("Fizz")
      } else {
        //print current index
        console.log(i)
      }
    }
}

console.log(fizzBuzz(5)) //1,2,3,4,5 => 1,2, Fizz, 4, Buzz
console.log(fizzBuzz(15)) //1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 => 1,2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
console.log(fizzBuzz(9)) //1,2,3,4,5,6,7,8,9 => 1,2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz