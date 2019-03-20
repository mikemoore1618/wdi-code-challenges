
// Using the JavaScript language, have the function questionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return true, otherwise it should return false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

// console.log(questionMarks("aa6?9"))
// // false

// console.log(questionMarks("acc?7??sss?3rr1??????5"))
// // true
// from coderbyte.com





///////////MY ATTEMPT////////

function questionMarks(str) {
//check to see if there are exactly 3 question marks between every pair of 2 numbers that add up to 10

//divide string into array of characters
  str.split('').forEach(function(char){
//run through each char in array

//check to see if char is a number
    isNaN(char)
//if yes return true
//otherwise return false
//if theyre arent any 2 numbers that add up to 10 return false as well

  })

}
////////////////////////////////////////////////////





//////PHILLIPES ANSWER///////////
function questionMarks(str) {
    var checksFor10 = false
    // loop through the whole string
    for(var i = 0; i < str.length; i += 1) {
      // if we find a leftSide operator:
      if(Number(str[i])) {
        var leftSide = Number(str[i])
        var rightSide;
        var questionMarkCount = 0
        for(var j = i + 1; j < str.length; j += 1) {
          if(str[j] === "?") questionMarkCount += 1
          if(Number(str[j])) {
            rightSide = Number(str[j])
            break;
          }
        }
        // 'arrb6???4xxbl5??e?ee5'
        if(leftSide + rightSide === 10) checksFor10 = true
        if(questionMarkCount === 3 && leftSide + rightSide === 10) {
          continue;
        } else if(questionMarkCount === 3 && leftSide + rightSide !== 10) {
          return false
        } else if(questionMarkCount !== 3 && leftSide + rightSide === 10) {
          return false
        }
      }
    }
    return checksFor10
  }
  
  console.log(questionMarks('arrb6???4xxbl5??e?ee5'))