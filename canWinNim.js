"use strict";
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    
    if (n <= 3 ) return true;
    if (n === 4) return false;
    
    return canWinNim(n-1) || canWinNim(n-2) || canWinNim(n-3);
};

console.log(canWinNim(7));

