// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

// Example:
// Given 1->2->3->4->5->NULL,
// return 1->3->5->2->4->NULL.

// Note:
// The relative order inside both the even and odd groups should remain as it was in the input. 
// The first node is considered odd, the second node even and so on ...

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {

    if (head === null) return;

    //var odd = null;
    var odd = null,
        evenHead = null,
        even = null;
    //var evenHead = null;

    function splitThem(next) {

        if (next === null) return;

        var val = next.val;        
        if (val % 2 === 1) {
            if (odd === null) {
                odd = next;
            } else {
                odd.next = next;
                odd = next;
            }
        } else {
            if (even === null) {
                even = next;
                evenHead = next;
            } else {
                even.next = next;
                even = next;
            }
        }

        splitThem(next.next);
    }

    splitThem(head);

    if (odd !== null) {
        odd.next = evenHead;
    } else {
        head.next = evenHead;
    }

    if (even !== null) {
        even.next = null;
    }

    return head;
};


var nodes = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: {
                            val: 7,
                            next: {
                                val: 8,
                                next: null
                            }
                        }
                    }
                }
            }
        }
    }
};

console.log(JSON.stringify(oddEvenList(nodes)));

// var profiler = require('gc-profiler');

// profiler.on('gc', function (info) {
//   console.log(info);
// });
// console.log(process.memoryUsage());