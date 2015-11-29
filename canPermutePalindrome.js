// Given a string, determine if a permutation of the string could form a palindrome.

// For example,

// "code" -> False, "aab" -> True, "carerac" -> True.

/**
 * @param {string} s
 * @return {boolean}
 */
const canPermutePalindrome = (s) => {
    if (s.length === 1) return true;
    
    const bucket = {};

    s.split('').forEach(char => {
        if (bucket[char] === undefined){
            bucket[char] = 1;
        }else{
            bucket[char] += 1;
        }
    });

    let oddFound = false;
    let valid = true;

    Object.keys(bucket).forEach(key => {
        if (bucket[key] % 2 === 1){
            if (oddFound){
                valid = false;
            }else{
                oddFound = true;
            }
        }
    });

    return valid;
};

console.log(canPermutePalindrome('aas'));

const canPermutePalindrome2 = (s) => {
    if (s.length === 1) return true;
    
    const bucket = {};

    s.split('').forEach(char => {
        if (bucket[char] === undefined){
            bucket[char] = true;
        }else{
            delete bucket[char];
        }
    });

    let keysLength = Object.keys(bucket).length;
    
    return keysLength === 1 || keysLength === 0;
};

console.log(canPermutePalindrome2('aas'));
