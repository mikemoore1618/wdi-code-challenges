//  ITERATIVE WAY

function fibonacci(n) {
    if (n < 2) return n

    let sequence = [0, 1]
    for(let i = 2; i < n; i++) {
        sequence.push(sequence[i - 2] + sequence[i - 1])
        }
    return sequence[n - 1]
    
  }
  
  console.log(fibonacci(3))


//   RECURSIVE WAY

function fibonacci(n) {
    return (n < 2) ? n : fibonacci(n- 1) + fibonacci(n - 2);
  }
// the ? is checking to see if its truthy

  console.log(fibonacci(3))


  //    TAIL END WAY!!!

  const fib = (n, a = 1, b = 0) =>  (n === 0) ? b : fib(n - 1, a + b, a)

  console.log(fibonacci(50))