// Related to question Excel Sheet Column Title

// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
// Credits:
// Special thanks to @ts for adding this problem and creating all test cases.

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var input  = s.split('');
    var total = input.length;
    var column = 0;
    for (var i = 0; i<input.length; i++){
    	var alpha = input[input.length - i - 1];
		column = column + (Math.pow(26, i) * (alphabets.indexOf(alpha)+ 1));	
    }
    
    return column;
};

console.log(titleToNumber('A'));