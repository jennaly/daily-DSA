// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


//given a string
//return a string of "(" and ")"s 
//for a letter that occurs only once in the string, print "("
//for a letter that occurs more than once in the string, print ")"

//only letters? any special characters or symbols? => only letters and marks
//does case matter? a string with "Yy" prints "))"? => case does not matter; "Yy" prints "))"
//string will never be empty? => yes

//iterate through letters in the string
//for each letter, check if it appears in more than one index in the string
//by checking if .indexOf() - a method that returns the index of the FIRST instance/match of the letter - is equal to .lastIndexOf() - a method that returns the index of the LAST instance/match of the letter in the string
//if .indexOf() === .lastIndexOf(), the letter appears only once in the string, therefore, return "("
//if .indexOf() !== .lastIndexOf(), the letter appears more than once in the string, therefore, return ")"
//map values to new array
//return the new array as a string

function duplicateEncode(word){
  const lowerCasedLetters = word.toLowerCase().split("");
  return lowerCasedLetters.map(letter => lowerCasedLetters.indexOf(letter) === lowerCasedLetters.lastIndexOf(letter) ? "(" : ")").join("")
}


  
  console.log(checkDuplicates("din"))      // =>  "((("
  console.log(checkDuplicates("recede"))   // =>  "()()()"
  console.log(checkDuplicates("Success"))  // =>  ")())())"
  console.log(checkDuplicates("(( @"))     // =>  "))((" 
  
//refactored for readability

function duplicateEncode(word) {
  return word 
    .toLowerCase()
    .split("")
    .map (function (letter) {
      return letter.indexOf() === letter.lastIndexOf() ? "(" : ")"
    }) 
    .join("");
}
  