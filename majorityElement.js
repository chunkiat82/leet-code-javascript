// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Credits:
// Special thanks to @ts for adding this problem and creating all test cases.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    if (nums.length === 1) {
        return nums[0];
    }
    
    var majority = {};
    var winner = null;
    nums.forEach(function(num){
        if(majority[num] === undefined){
            majority[num] = 1;
        }else{
            majority[num] += 1;
        }
        
        if (majority[num] >= (nums.length/2)){
            if (winner === null){
                winner = num;
            }else{
                winner = winner < majority[num] ?  num : winner;
            }
        }
    });
    
    return winner;
};

console.log(majorityElement([3,2,3]));