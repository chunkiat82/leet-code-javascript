// iGiven an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

// For example, given nums = [3, 5, 2, 1, 6, 4], one possible answer is [1, 6, 2, 5, 3, 4].

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    nums.sort();
    // remove the last element and splice into the array
    // do until we go through all even indexes
    var index = 1;

    while (index < nums.length-1){
    	var last = nums.pop();
    	nums.splice(index,0,last);
    	index= index+2;
    }

};
var numsInput = [3, 5, 2, 1, 6, 4];

numsInput = [1,6,8,9,3];

wiggleSort(numsInput);

console.log(numsInput);