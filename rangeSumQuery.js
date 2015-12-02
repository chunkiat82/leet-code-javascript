// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

// Example:
// Given nums = [-2, 0, 3, -5, 2, -1]

// sumRange(0, 2) -> 1
// sumRange(2, 5) -> -1
// sumRange(0, 5) -> -3
// Note:
// You may assume that the array does not change.
// There are many calls to sumRange function.

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    var upToSums = this.upToSums = [];

    var sumTillNow = 0;
    nums.forEach(num=>{
    	sumTillNow+=num;
    	upToSums[upToSums.length]=sumTillNow;
    });
    console.log(upToSums);
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {

	var upToSums = this.upToSums;

	if (i<0 || j>upToSums.length) return -1;

  	return i === 0 ?  upToSums[j] : upToSums[j] - upToSums[i-1];
};

var numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(2, 5));

/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */