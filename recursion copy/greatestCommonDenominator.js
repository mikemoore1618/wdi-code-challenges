// RECURSIVE


const gcd = (a, b) => {
    return (!b) ? a : gcd(b, a % b)
}

console.log(gcd(336, 360))