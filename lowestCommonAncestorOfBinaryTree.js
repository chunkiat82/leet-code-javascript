// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
//
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var createTree = require('./createTree');
var prettyPrint = require('./prettyPrint');

// deep recursion first
var lowestCommonAncestor = function(root, a, b) {

    var selected;

    function recursiveFind(node, p, q) {

        if (node === null) return undefined;

        if (node.val === p.val || node.val === q.val) {
            if (selected === undefined) {
                if (node.val === p.val) selected = p;
                if (node.val === q.val) selected = q;
            }
            return node;
        }

        var leftVal = recursiveFind(node.left, p, q);
        var rightVal = recursiveFind(node.right, p, q);

        if (leftVal && rightVal) {
            if (leftVal.val === p.val && rightVal.val === q.val) {
                selected = node;
            } else if (leftVal.val < selected.val) {
                selected = leftVal;
            }
        }

        return selected;

    }

    if (a.val > b.val) {
        recursiveFind(root, b, a);
    } else {
        recursiveFind(root, a, b);
    }

    return selected;
};

var nodes = [41, 37, 44, 24, 39, 42, 48, 1, 35, 38, 40, null, 43, 46, 49, 0, 2, 30, 36, null, null, null, null, null, null, 45, 47, null, null, null, null, null, 4, 29, 32, null, null, null, null, null, null, 3, 9, 26, null, 31, 34, null, null, 7, 11, 25, 27, null, null, 33, null, 6, 8, 10, 16, null, null, null, 28, null, null, 5, null, null, null, null, null, 15, 19, null, null, null, null, 12, null, 18, 20, null, 13, 17, null, null, 22, null, 14, null, null, 21, 23];

var testNode1 = {
    val: 2,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: null
}
var testNode10 = {
    val: 2,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    },
}
var testNode = {
    val: 6,
    left: {
        val: 2,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: {
                val: 3,
                left: null,
                right: null
            },
            right: {
                val: 5,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 8,
        left: {
            val: 7,
            left: null,
            right: null
        },
        right: {
            val: 9,
            left: null,
            right: null
        }
    }
}
var testNodes = [6, 2, 8, 0, 4 , 7, 9, null, null, 3, 5];

// prettyPrint(createTree(nodes));

var lowestCommonAncestor1 = function(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
};

// prettyPrint(lowestCommonAncestor1(nodes, {val: 42 , right:null, left:null},  {val: 48 , right:null, left:null}).val);
//
// console.log(lowestCommonAncestor(testNode, {val: 2 , right:null, left:null},  {val: 8 , right:null, left:null}).val);
// console.log(lowestCommonAncestor(testNode, {val: 2 , right:null, left:null},  {val: 4 , right:null, left:null}).val);
// console.log(lowestCommonAncestor(testNode1, {val: 1 , right:null, left:null},  {val: 2, right:null, left:null}).val);
// console.log(lowestCommonAncestor(testNode10, {val: 1 , right:null, left:null},  {val: 3, right:null, left:null}).val);
// console.log(lowestCommonAncestor(testNode10, {val: 3 , right:null, left:null},  {val: 1, right:null, left:null}).val);
//
// console.log(lowestCommonAncestor1(testNode, {val: 2 , right:null, left:null},  {val: 8 , right:null, left:null}).val);
// console.log(lowestCommonAncestor1(testNode, {val: 2 , right:null, left:null},  {val: 4 , right:null, left:null}).val);
// console.log(lowestCommonAncestor1(testNode1, {val: 1 , right:null, left:null},  {val: 2 , right:null, left:null}).val);

console.log(lowestCommonAncestor(testNode, {val: 4 , right:null, left:null},  {val: 0, right:null, left:null}).val);
console.log(lowestCommonAncestor1(testNode, {val: 0 , right:null, left:null},  {val: 4, right:null, left:null}).val);
