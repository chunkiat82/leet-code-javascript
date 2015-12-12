// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

// For example,
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = “coding”, word2 = “practice”, return 3.
// Given word1 = "makes", word2 = "coding", return 1.

// Note:
// You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const shortestDistance = function(words, word1, word2) {
	var index = -1;
	var distance = Number.MAX_SAFE_INTEGER;
    words.forEach((word,i)=>{
    	if (word === word1 || word === word2){
    		if (index != -1 && words[index] !== word){
    			// console.log(index);
    			// console.log(words[index]);
    			// console.log(word);
    			distance = Math.min(distance, i - index)	
    		}
    		index = i;
    	}    	
    })
    return distance;    
};

// console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice"));
// console.log(shortestDistance(["a","c","b","a"],"a","b"));
console.log(shortestDistance(["a","a","c","b"],"a","b"));