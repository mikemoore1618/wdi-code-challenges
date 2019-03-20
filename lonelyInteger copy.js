const lonelyInteger = (array) => {
    // Write logic here.

    // Zac's Solution
    let lonelyInteger;
    const count = {};

    // Iterate over the array and find how many times each element occurs;
    array.forEach(el => {
        if (count.hasOwnProperty(el)) {
            // If the element exists in our count, increase the count by 1.
            count[el] += 1;
        } else {
            // Else, create the element as a key in the count object.
            count[el] = 1;
        }
    })

    // Find key in the count object with a value of 1.
    for (let element in count) {
        if (count[element] === 1) {
            lonelyInteger = element;
        }
    }


    return lonelyInteger;
};

module.exports = lonelyInteger;
