const factor = (num) => {
    let result = 1

    while(num > 1) {
        result *= num
        num --
    }
    return result
} 
console.log(factor(3))





//  RECURSIVE




const factor = (num, count) => {
    count = (count != undefined) ? count : count = 1
    return (num === 0) ? count : factor(num - 1, count * num)
}

console.log(factor(3))