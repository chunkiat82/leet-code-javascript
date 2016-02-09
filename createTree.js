var prettyPrint = require('./prettyPrint');
var nodes = [41, 37, 44, 24, 39, 42, 48, 1, 35, 38, 40, null, 43, 46, 49, 0, 2,
    30, 36, null, null, null, null, null, null, 45, 47, null, null, null, null,
    null, 4, 29, 32, null, null, null, null, null, null, 3, 9, 26, null, 31, 34,
    null, null, 7, 11, 25, 27, null, null, 33, null, 6, 8, 10, 16, null, null,
    null, 28, null, null, 5, null, null, null, null, null, 15, 19, null, null,
    null, null, 12, null, 18, 20, null, 13, 17, null, null, 22, null, 14, null,
    null, 21, 23
];

function createTree(inputNodes) {

    // create a copy
    var nodes = inputNodes.slice();

    var firstNode = {
        val: nodes.shift()
    };
    var stack = [firstNode];
    while (stack.length > 0 && nodes.length > 0) {
        var currNode = stack.shift();
        var leftVal = nodes.shift();
        var rightVal = nodes.shift();

        if (leftVal !== null) {
            currNode.left = {
                val: leftVal,
                left: null,
                right: null
            };
            stack.push(currNode.left);
        }

        if (rightVal !== null) {
            currNode.right = {
                val: rightVal,
                left: null,
                right: null
            };
            stack.push(currNode.right);
        }
    }
    return firstNode;
}

export default createTree;

// prettyPrint(createTree(nodes));
