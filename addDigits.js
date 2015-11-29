// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

/**
 * 
 * @param {number} num
 * @return {number}
 */

const addDigits = function(num) {
    const numString = String(num);

    let total = 0;
    numString.split('').forEach((i) => {
        total += parseInt(i);
    });

    if (total < 10) {
        return total;
    } else {
        return addDigits(total);
    }
};

console.log(addDigits(11031982));
