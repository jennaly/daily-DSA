// Task
// Given an array/list of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.

// arr=[3,1,2]            n=2    ==> return 2 
// arr=[15,20,7,10,4,3]   n=3    ==> return 7 
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
// arr=[2,1,3,3,1,2],     n=3    ==> return 2 

//given an array of integers and a number N
//return the N smallest element in the array

//are the elements in the array of number type? => yes
//is N of number type? => yes
//will N always be in the range of the length of the array? => yes
//will there be duplicates? => yes

//([0,2,4,6,8],3) => 6

//sort the elements in place, in ascending order
//return the element at index N - 1 (array indexes start at 0)

function nthSmallest(arr, pos){
    //your code here
    return arr.sort((a,b) => a - b)[pos - 1]
  }