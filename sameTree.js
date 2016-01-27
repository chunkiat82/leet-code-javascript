// Given two binary trees, write a function to check if they are equal or not.

// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

	if (p === null && q === null ) return true;
	if (p === null || q === null ) return false;

	if (!isSameTree(p.left, q.left)) {		
		return false;
	}

	if (!isSameTree(p.right, q.right)) {		
		return false;
	}

	if (p.val === q.val) {		
		return true;
	}
	else {		
		return false;
	}
	
};

var isSameTree1 = function(p, q) {

	if (p === null && q === null ) return true;
	if (p === null || q === null ) return false;
	
	return (p.val===q.val) && isSameTree1(p.left,q.left) && isSameTree1(p.right,q.right);
};

// var p = { val : 4 ,  left : { val : 2 , left : { val: 1 , left : null, right: null}  , right: { val: 3 , left : null, right: null} }, right : { val : 7 , left : { val: 6 , left : null, right: null}  , right: { val: 9 , left : null, right: null} }};
// var q = { val : 4 ,  left : { val : 2 , left : { val: 1 , left : null, right: null}  , right: { val: 3 , left : null, right: null} }, right : { val : 7 , left : { val: 6 , left : null, right: null}  , right: { val: 9 , left : null, right: null} }};

var p = { val : 4 ,  left : { val : 2 , left : null, right: null }, right : { val : 7, left : null , right: null }};
var q = { val : 4 ,  left : { val : 2 , left : null, right: null }, right : { val : 7 , left : null , right: null }};

// var p = { val : 4 ,  left : null , right : null};
// var q = { val : 4 ,  left : null , right : null};


console.time('isSameTree');
console.log(isSameTree(p,q));
console.timeEnd('isSameTree');
console.time('isSameTree1');
console.log(isSameTree1(p,q));
console.timeEnd('isSameTree1');