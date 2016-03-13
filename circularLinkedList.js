// create a circular linked list
// non prototype

function generateCLLObject(size){

    var linkedListSize = size;

    var start = 0, end = 0;

    var actualSize = 0;

    var llist = [];

    // instantiatiion
    for (var i = 0; i <linkedListSize; i++) {
        llist.push(null);
    }

    function push(object){
        if (actualSize === 0 ) {
            llist[end] = object;
            end = (end + 1) % linkedListSize;
            actualSize = actualSize + 1;
        }
    }

    function shift(){
        if (actualSize > 0) {
            var temp = llist[start];
            llist[start] = null;
            start = (start + 1) % linkedListSize;
            actualSize = actualSize - 1;
            return temp;
        }
    }

    // need to think about the start point
    function toArray(){
        var loop = actualSize;
        var returnValues = [];
        var loopStart = start;
        while (loop > 0){
            returnValues.push(llist[loopStart]);
            loopStart = (loopStart + 1) % linkedListSize;
            loop = loop - 1;
        }
        return returnValues;
    }

    function toActualArray(){
        return llist;
    }

    return {
        push: push,
        enqueue: push,
        shift: shift,
        dequeue: shift,
        toArray: toArray,
        toActualArray: toActualArray
    };
}

var ll = generateCLLObject(4);
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(4); // should throw error
console.log(ll.toActualArray());
console.log(ll.toArray());
ll.shift();
console.log(ll.toActualArray());
console.log(ll.toArray());
