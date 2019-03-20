
// add all nums in arr

const addArray= (arr, sum) => {
    sum = (!sum) ? 0 : sum
    let newAdd = arr.shift()
    sum = sum + newAdd
    return (arr.length === 0) ? sum : addArray(arr, sum)
  }
  
  console.log(addArray([3,400, 2, 3, 4,1]))


  //add all numbs in bwteen 
  const inBetween = (num1, num2, answer) => {
    answer = (!answer) ? [] : answer
    answer.push(num1+1)
    return (num1+2 === num2) ? answer : inBetween(num1 + 1, num2, answer)
    }
    
    console.log(inBetween(2, 9))