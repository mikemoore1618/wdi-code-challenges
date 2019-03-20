// Zac's Solution
function encode(text) {
    let chars = text.split('');
    let a = "abcdefghijklmnopqrstuvwxyz".split('');
    let encoded = [];

    chars.forEach(l => {
        let encoded_index = (a.indexOf(l) + 13) % 26;
        let encoded_letter = a[encoded_index];
        encoded.push(encoded_letter)
    })

    return encoded.join('');
}

// Jack's Solution
// function encode(str) {
//   let message = []
//   for (let i = 0; i < str.length; i++) {
//     let firstChange = str.charCodeAt(i)
//     if ((firstChange <= 109 && firstChange >= 97) || (firstChange >= 65 && firstChange < 78)) {
//       firstChange += 13;
//       let secondChange = String.fromCharCode(firstChange)
//       message.push(secondChange)
//     } else if ((firstChange > 109 && firstChange <= 122) || (firstChange >= 78 && firstChange <= 102)) {
//       firstChange -= 13
//       let secondChange = String.fromCharCode(firstChange)
//       message.push(secondChange)
//     }
//   }
//   return message.join('')
// }

// Alex's Solution
// function encode(str) {
//   const firstAlphabet = 'abcdefghijklm'.split('');
//   const secondAlphabet = 'nopqrstuvwxyz'.split('');

//   var newArray = []

//   for (var i = 0; i < str.length; i++) {
//     if (firstAlphabet.includes(str[i])) {
//       var index = firstAlphabet.indexOf(str[i])
//       newArray.push(secondAlphabet[index])
//     } else if (secondAlphabet.includes(str[i])) {
//       var index = secondAlphabet.indexOf(str[i])
//       newArray.push(firstAlphabet[index])
//     } else if (!firstAlphabet.includes(str[i]) && !secondAlphabet.includes(str[i])) {
//       newArray.push(str[i])
//     } else {
//       continue
//     }

//   }

//   return newArray.join('')

// }

console.log(encode("hello"));