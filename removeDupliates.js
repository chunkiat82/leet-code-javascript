// Given a sorted linked list, delete all duplicates such that each element appear only once.

// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

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

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var deleteDuplicates = function(head) {

	if (Array.isArray(head) || head === null ) return head;

    var pre = head;

    function loop(next) {

    	if (next === null) {
    		pre.next = null;
    		return;
    	}

        if (pre.val === next.val ){
        	loop(next.next);
        } else {
        	pre.next = next;
        	pre = next;
        	loop(next.next);
        }

    }

    loop(head.next);

    return head;
};

var nodes = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 3,
                    next: null
                }
            }
        }
    }
};

console.log(deleteDuplicates(nodes));
//console.log(deleteDuplicates([]));

