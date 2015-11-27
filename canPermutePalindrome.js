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

console.log(canPermutePalindrome('as'));