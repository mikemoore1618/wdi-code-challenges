function swap(arr, a, b) {c
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
    return arr
  }
  
  var cards = [9, 4, 6, 1, 2, 8, 7, 5, 3]
  
  // arr[i] = 9
  // arr[i + 1] = 4
  
  
  function insertionSort(arr) {
    // for(let i = 0; i < arr.length; i ++) {
    //   while(arr[i + 1] < arr[i]) {
    //     swap(arr, i, i + 1)
    //   }
    // }
  
    // for(let i = 0; i < arr.length; i ++) {
    //   let j = i
    //   while(j >= 0) {
    //     if(arr[j] < arr[j - 1]) {
    //       swap(arr, j, j - 1)
    //     } else {
    //       j --
    //     }
    //   }
    // }
  
    // for(i=0; i < arr.length; i++) {
    //   for(j=i; j>= 0; j--) {
    //     if (arr[j] < arr[j - 1]) {
    //       swap(arr, arr[j], arr[j - 1])
    //     }
    //   }
    // }
  
  
    for(let i = 1; i < arr.length; i ++) {
      let temp = arr[i]
      let j = i - 1
      while(j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j]
        j --
      }
      arr[j + 1] = temp
    }
  
    return arr
  }