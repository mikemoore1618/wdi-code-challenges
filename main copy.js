//function sayHello() {
//    console.log("Hi There!")
//}

//function area() {
//    console.log(height * width)
//}

// function area(height, width) {
//     console.log(height * width)
// }
//in console type:
// area(20, 100)
// and get:
// 2000
// undefined

// function area(height, width) {
//     return height * width
// }

//console.log gives us a value but we cant use it, is just for testing
//return allows us to use it

// var areaOfMyHouse = area(200, 300)
// now call in console: areaOfMyHouse

//function to find diameter of circle
// function diameter(radius) {
//     return 2 * radius
// }

// //function to find circumference of circle
// function circumference(radius) {
//     return Math.PI * (2 * radius)
// }

// //or, using above diameter function
// function circumference(radius) {
//     return Math.PI * diameter(radius)
// }

//scope: what can be seen

//var me = "mike"
//the variable "me" is in the global scope of what browswer concole can see

//function greet(){
//     var me = "mike"
// }
//variable me is not only visible inside this function
// it is in local scope

//local copes can see outside, global scopes cannot see inside

//function bakePastry(people) {
 //   var sugar = 8 * people
//}
//example of when you would want this, 
//if you wanted to define how my people with out it affecting the global

//create function to find if 2 numbers are even
//https://css-tricks.com/snippets/javascript/check-if-number-is-evenodd/
//value%2 == 0
// function areBothEven(n1, n2){
//     //check if n1 / 2 has NO remainder
//     //and if n2 / 2 has no remainder
//     if (n1 % 2 === 0) && (n2 % 2 === 0) 
// }
    // {
    // //this is actually uneccessarry, 
    //if its returning a true or false thing 
    //(boolean) you dont need if then
    // //     return true
    // // } else {
    // //     return false
    // }

//    LAB EXERCISE  
//https://gist.github.com/philuchansky/520f4538273ac12108e97b895c266446
// 1.
// function maxOfTwoNumbers(x, y) {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
//   }
  
//   console.log(maxOfTwoNumbers(3, 9));
  
  // 2.
// var maxOfThreeNumbers = function (x, y, z) {
//     if ((x >= y) && (x >= z)) {
//       return x;
//     } else if(y >= z) {
//       return y;
//     } else { 
//       return z;
//   }
// }
  // also works:
  //var maxOfThreeNumbers = function (x, y, z) {
  //    Math.max(x, y, z)
//}

//   console.log(maxOfThreeNumbers(3, 9, 8));

//https://stackoverflow.com/questions/5488028/how-do-i-check-for-vowels-in-javascript//
//.3
// function isCharAVowel(char) {
//     return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false;
//     }

//.4 
// var sumArray = function([a, b, c]) {
//     return a + b + c
// }

// or: var sumArray = function(arr) {
//     var i = 0
//     var total = 0
//     while(i < arr.length) {
//         total = total + arr[i]
//         i++
//     }
//     return total
// }

//.5
// funtion multiplyArray([a, b, c]) {
//     return a * b * c
// }

// // funtion multiplyArray(arr) {
// //     var i = 0
// //     var total = 1
// //     while(i < arr.length) {
// //         total = total * arr[i]
// //         i++
// //     }
// //     return total
// // }
// }

//.6 reverse letters in a string, make "hello" say "olleh" for example

// function reverseString (str) {
//     var newString = ""
//     for(var i = str.length - 1; i >= 0; i -- ) {
//         newString = newString + str[i]
//     }
//     return newString
// }

//.7 longest word length ["the, "cow", "jumped", "over", "the", "moon"]

// var longestWordLength = function(words) {
//     var longestWordyet = words[0]
//     for(var i = 0; i <  words.length; i += 1){
//         //if the word were on is longer than longestWordYet
//         if (words[i].length > longestWordyet.length) {
//             longestWordYet = words[i]
//         }
//     }
//     return longestWordyet.length
// }

//8.
// ["the, "cow", "jumped", "over", "the", "moon"]
// ["jumped", "over", "moon"]

// function stringsLongerThan (words, num) {
//     //create a place to store results
//     var newArray = {
//         //loop through our array of words
//         var i = 0
//         while(i < words.length) {
//             //if word were on is longer than provided number
//             if(words[i].length > num)
//             //add that word to our results array
//             newArray.push(words[i])
//         }
//         i ++
//     }
//     //when loop is done, spit out results
//     return newArray
// }
