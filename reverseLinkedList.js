var prettyPrint = require('./prettyPrint');
// Reverse a singly linked list.

//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
var reverseList = function(head) {
    
    if (head === null || head.next === null) return head;

	
	var loop = head.next;
	head.next = null;

	var temp = loop.next;
	loop.next = head;
	var tail = loop;
	loop = temp;

    while (loop !== null) {
    	temp = loop.next;
    	//console.log('temp='+ temp.val);
    	loop.next = tail;
    	//console.log('loop.next='+ loop.next.val);
    	tail = loop;
    	//console.log('tail='+ tail.val);
    	loop = temp;
    	//console.log('loop='+ loop.val);
    }

    return tail;
};

var input = {
    val: 1,
    next: {
        val: 2,
        next: null
    }
}

var input1 = {
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
                        next: null
                    }
                }
            }
        }
    }
}


prettyPrint(reverseList(input1));
