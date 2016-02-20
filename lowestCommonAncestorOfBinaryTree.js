'use strict';// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
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

    function recursiveFind(node, p, q) {

        if (node.left !== null) {
            var left = recursiveFind(node.left, p, q);
        }

        if (node.right !== null) {
            var right = recursiveFind(node.right, p, q);
        }

        // if (right === undefined || left === undefined) {
        //     console.log('either or both side empty='+node.val);
        //     return node;
        // }
        if (left){
            console.log("left="+left.val);
        }
        if (right){
            console.log("right="+right.val);
        }

        if (left && left.val === p.val){
            if (right && right.val === q.val) {
                console.log('found final='+node.val);
                return node;
            }
        }

        if (node.val === p.val ||  node.val === q.val) {
            return node;
        }

        if (left && (left.val === p.val || left.val === q.val)) {
            console.log("left="+left.val);
            return left;
        }

        if (right && (right.val === p.val || right.val === q.val)) {
            console.log("right="+right.val);
            return right;
        }

        if (left && left.val > p.val) {
            if (right && right.val > p.val) {
                return left;
            }
        }

        if (left && left.val < q.val) {
            if (right && right.val < q.val) {
                return right;
            }
        }

        return node;
    }

    if (a.val > b.val) {
        return recursiveFind(root, b, a);
    } else {
        return recursiveFind(root, a, b);
    }

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
};

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
var testNodes = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];

var p = {
    val: 8,
    right: null,
    left: null
};
var q = {
    val: 9,
    right: null,
    left: null
};

var lowestCommonAncestor1 = function(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor1(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor1(root.right, p, q);
    } else {
        return root;
    }
};
//testNode = createTree(nodes);
console.log('final='+lowestCommonAncestor(testNode, p, q).val);
console.log('------');
console.log('final1='+lowestCommonAncestor1(testNode, p, q).val);

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


// console.log(lowestCommonAncestor1(testNode, {
//     val: 8,
//     right: null,
//     left: null
// }, {
//     val: 9,
//     right: null,
//     left: null
// }).val);
