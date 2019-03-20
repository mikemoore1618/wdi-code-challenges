// The Caesar Cipher
// From Wikipedia:

// In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. The method is named after Julius Caesar, who used it in his private correspondence.
// We're going to implement a simple Caesar Cipher called ROT13 ("rotate by 13 places"). The transformation can be represented by aligning two alphabets, like so:

// Plain:    abcdefghijklmnopqrstuvwxyz
// Cipher:   nopqrstuvwxyzabcdefghijklm
// ROT13 is its own inverse; that is, to undo ROT13, the same algorithm is applied, so the same action can be used for encoding and decoding. The algorithm provides virtually no cryptographic security, and is often cited as a canonical example of weak encryption. ROT13 is used in online forums as a means of hiding spoilers, punchlines, puzzle solutions, and offensive materials from the casual glance.

// Example usage of ROT13:

// encode("hello")
// => "uryyb"

//MY ATTEMPT

// create array of all letters of the alphabet

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//console.log index position of alphabet

// console.log(alphabet[4]);

// write funtion to move index position - 13 (if 'a' it would be +13)

for (i = 0; i < 26; i++) {
    if (i < 13) {
      console.log(`${alphabet[i + 13]}`)
    } else {
      console.log(`${alphabet[i - 13]}`)
  }}

// alphabet.forEach(i => {
//     console.log(i)
// })

// before logging letter, move index position forward by 13

function encode(text) {

}






///////ZACS ANSWER



function encode(text) {
    let chars = text.split('')
    let a = "abcdefghijklmnopqrstuvwqyz".split('')
    let encoded = []

    chars.forEach(l => {
        let encoded_index = (a.indexOf(l) + 13) % 26
        let encoded_letter = a[encoded_index]
        encoded.push(encoded_letter)
    })
    return encoded.join('')
}

