// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

//given an array of integers
//return the average of the integers in the array, rounded down

//will integers be number type? => yes  
//will array ever be empty? => no
//if array.length == 1, return the only number? => yes
//return average as a number? => yes

//iterate through int array
//longer way: initialize a variable for the sum, increment it by every element in the int array
//fewer lines of code: use .reduce to get the sum of all the integers in the array
//return the sum divided the length of the array, rounded down with Math.floor()

function getAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return Math.floor(sum / grades.length)
}

//refactor: remove increment(counter)
function getAverage(grades) {
    let sum = 0;
    for (let grade of grades) {
        sum += grade
    }
    return Math.floor(sum / grades.length)
}

//refactor: use reduce to get the sum of grades
function getAverage(grades) {
    let sum = grades.reduce((previous, grade) => previous + grade, 0);
    return Math.floor (sum / grades.length )
}

//refactor: one-liner
//the one above has better readability 
function getAverage(grades) {
    return Math.floor((grades.reduce((previous, grade) => previous + grade, 0)) / grades.length)
}

