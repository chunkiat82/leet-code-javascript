// Given an array of integers, find if the array contains any duplicates. 
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	var map = {};
	var found = false;
	nums.every(num=>{
		if (map[num]){
			return found = true;
		}else {			
			map[num] = true;
			return !found;			
		}		
	})
	return found;
};

console.log(containsDuplicate([0]));
console.log(containsDuplicate([3,3]));