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
var maxSubArrayLenNSQ = function(nums, k) {

    var foundCount = 0;

    var sum = [];
    var total = 0;

    function countArray(nums, k) {
                
        var count = 0;  
        nums.forEach((num, index) => {
            count++;
            if (index > 0){
                if (sum[index] === undefined){                    
                    sum[index] = sum[index-1] + num;                        
                }else{
                    sum[index] = sum[index-1] + num; 
                }
            }else{                
                if (sum[index] === undefined){                    
                    sum[index] = num;                    
                }else{
                    sum[index] = num;
                }                      
            }
            

            if (sum[index] === k){
                if (foundCount < count){
                    foundCount = count;    
                }                
            }       
        });
        
    }
    while (nums.length > foundCount ){
        countArray(nums, k);        
        nums.shift();

    }
    console.log('----------------------------------------');    
    return foundCount;
};

var maxSubArrayLen = function(nums, k) {

    if (nums === null || nums.length === 0)
        return 0;

    var n = nums.length;
    for (var j = 1; j < n; j++){        
        nums[j] += nums[j - 1];
    }

    var map = {};

    map[0] = -1; // add this fake entry to make sum from 0 to j consistent

    var max = 0;
    for (var i = 0; i < n; i++) {
        if (map[nums[i] - k] !== undefined){         
            max = Math.max(max, i - map[(nums[i] - k)]);
        }
        if (map[nums[i]] === undefined) {
            // keep only 1st duplicate as we want first index as left as possible
            map[nums[i]]=i;
        }
    }

    return max;
    
};



//console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3));

console.log(maxSubArrayLen([-2, -1, 2, 1], 1));

// its about storing the sum in the first pass