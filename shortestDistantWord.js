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
    const index1 = words.indexOf(word1);
    const index2 = words.indexOf(word2);
    for (var i=0;i<words.length){
    	if (i == -1)
    }
    return Math.abs(index1-index2);
};

console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice"));
