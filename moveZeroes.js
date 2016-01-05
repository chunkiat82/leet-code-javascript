// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function(nums) {
    var index = 0;
    
    nums.forEach(value => {
    	if (value !== 0){
    		nums[index] = value;
    		index += 1;
    	}
    	
    });

    while (index < nums.length){
    	nums[index] = 0;
    	index += 1;
    }

    return nums;
};

//very interesting solution
var moveZeroesOneLoop = function(nums) {
    var zeroes = 0;    
    for (var i = 0; i<nums.length; i++ ){
    	if (nums[i] === 0){
    		zeroes += 1;
    	} else {    	
    		// most interesting part is i - zeroes, its about the gap	
    		nums[i - zeroes] = nums[i];
        	if ( zeroes >= 1) nums[i] = 0;
    	}
    }

    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

console.log(moveZeroesOneLoop([0, 1, 0, 3, 12]));