// Invert a binary tree.

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// to
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    function reversePrint(node){
    	if (!node && typeof node !== 'object' || node instanceof Array) {
	    	return;
	    }
	    if (node.left === node.right === null){
	    	return;
	    }
	    reversePrint(node.left);
	    reversePrint(node.right);
	    var temp = node.right;
	    if (node.left) node.right = node.left;
	    if (temp) node.left = temp;
    }

    reversePrint(root);
    
    return root;
};
var testNode = { val : 4 ,  left : { val : 2 , left : { val: 1 }  , right: { val: 3 } }, right : { val : 7 , left : { val: 6 }  , right: { val: 9 } }}
console.log(invertTree(testNode));