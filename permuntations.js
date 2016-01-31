// Given a collection of distinct numbers, return all possible permutations.

// For example,
// [1,2,3] have the following permutations:
// [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1].

/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var permute = function(nums) {

    var final = [];

    function nextPermute(nums, p) {

        if (p === nums.length - 1) {                        
            final.push(nums.slice());
            console.log(final);
        } else {
            for (var i = p; i < nums.length; i++) {                
                console.log("p="+p);
                console.log("i="+i);
                console.log('forward');
                swap(nums, i, p);         
                nextPermute(nums, p + 1);
                console.log("p="+p);
                console.log("i="+i);
                console.log('backward');
                swap(nums, i, p);
            }
        }
    }

    function swap(copyNums, indexA, indexB) {        
        var x = copyNums[indexA];
        copyNums[indexA] = copyNums[indexB];
        copyNums[indexB] = x;
        console.log("nums="+copyNums);
    }

    nextPermute(nums, 0);

    return final;
};

console.log(permute([5, 4, 6, 2]));


// [
//     [5, 4, 6, 2],
//     [5, 4, 2, 6],
//     [5, 6, 4, 2],
//     [5, 6, 2, 4],
//     [5, 2, 4, 6],
//     [5, 2, 6, 4],
//     [4, 5, 6, 2],
//     [4, 5, 2, 6],
//     [4, 6, 5, 2],
//     [4, 6, 2, 5],
//     [4, 2, 5, 6],
//     [4, 2, 6, 5],
//     [6, 5, 4, 2],
//     [6, 5, 2, 4],
//     [6, 4, 5, 2],
//     [6, 4, 2, 5],
//     [6, 2, 5, 4],
//     [6, 2, 4, 5],
//     [2, 5, 4, 6],
//     [2, 5, 6, 4],
//     [2, 4, 5, 6],
//     [2, 4, 6, 5],
//     [2, 6, 5, 4],
//     [2, 6, 4, 5]
// ]
