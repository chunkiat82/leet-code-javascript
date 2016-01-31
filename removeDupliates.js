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

	if (Array.isArray(head) || typeof head !== 'object') return head;

    var array = [head.val];
    var holder = head;

    function loop(node) {

        //console.log(array);
        if (node === null) return;

        if (array.indexOf(node.val) === -1) {
            array[array.length] = node.val;
            holder.next = node;
            holder = node;
            loop(node.next);
        }

        // terminating condition
        if (node.next !== null) {
            loop(node.next);
        } else {
            holder.next = null;
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
console.log(deleteDuplicates([]));

