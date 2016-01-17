// Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

// Example 1:
// Given nums = [1, -1, 5, -2, 3], k = 3,
// return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)

// Example 2:
// Given nums = [-2, -1, 2, 1], k = 1,
// return 2. (because the subarray [-1, 2] sums to 1 and is the longest)

// Follow Up:
// Can you do it in O(n) time?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {

    var foundCount = 0;

    function countArray(nums, k) {
        
        var sum = 0;
        var count = 0;  
        nums.forEach(num => {
            count++;
            sum += num;
            if (sum === k){
                foundCount = count;
            }       
        });
        
    }
    while (nums.length > foundCount ){
        countArray(nums, k);
        nums.shift();
    }
    
    return foundCount;
};


console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3));

console.log(maxSubArrayLen([-2, -1, 2, 1], 1));

// its about storing the sum in the first pass