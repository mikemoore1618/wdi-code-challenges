const encode = (text, encoded) => {
    let a = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let encoded_letter = a[(a.indexOf(text[0])+ 13) % 26]

    encoded = (!encoded) ? '' : encoded
    encoded = encoded + encoded_letter
    text = text.slice(1)
    return (text === '') ? encoded : encode(text, encoded)
}

console.log(encode('hello'))