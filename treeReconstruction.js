// Enjoy your interview!
//          10
//       /     \
//      5       17
//    /   \     /  \
//   4     7  16   20
//  / \   / \
// 1   3 6   8

var inputList = [10,5,4,1,3,7,6,8,17,16,20];

function Node(val){
  this.val = val;
  this.left = null;
  this.right= null;
}

function reconstructionOfTree(node, inputList){

    if (!Array.isArray(inputList) || inputList.length === 0) return;

    // more corner cases
    const leftIndex = 0;
    const rightIndex = findRightNode(node.val);

    function findRightNode(curVal){
        for (let i = 0; i < inputList.length; i++){
            if (inputList[i] > curVal) return i;
        }
    }
    const leftList = inputList.slice(0,rightIndex);
    const rightList = inputList.slice(rightIndex,inputList.length);


    node.left = new Node(leftList.shift());
    node.right = new Node(rightList.shift());

    reconstructionOfTree(node.left,leftList);
    reconstructionOfTree(node.right,rightList);

}

var head = new Node(inputList.shift());
reconstructionOfTree(head, inputList);

console.log(head);

// [10,5,17,4,7,16,20,1,3,6,8]

