//this is an example of how the bubble soret works

var myArray = [4, 2, 1, 9, 5]

function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

swap(myArray, 0, 3)

 myArray

 function bubbleSort(arr) {
   //move down array in sequence of increasing index position
   for(let i = arr.length - 1; i >= 0; i--) {
     for (let j = 0; j < i; j++) {
       if(arr[j] > arr[j + 1]) {
       swap(arr, j, j + 1)
     }
   }
 }
   return arr
 }

bubbleSort(myArray)

 //two nested loops, for outer loop use i as incrementor for inner loop use j as incrementor