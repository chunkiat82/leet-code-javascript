// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if (s === undefined || t === undefined) return false;

    var sArray = s.split('');
    var tArray = t.split('');
    if (sArray.length !== tArray.length) return false;

    var bucket = {};

    for (var i=0; i<sArray.length; i++){
        var temp1 = sArray[i];
        var temp2 = tArray[i];

        if (temp1 !== temp2){
            if (bucket[temp1]) {
                bucket[temp1] += 1;
            } else{
                bucket[temp1] = 1;
            }

            if (bucket[temp2]) {
                bucket[temp2] -= 1;             
            } else {
                bucket[temp2] = -1;
            }
        }
    }

    var anagram = true;

    Object.keys(bucket).every(key=>{
        return anagram = bucket[key] === 0;        
    }) 

    return anagram;

};

console.log(isAnagram("anagram", "nagaram"));