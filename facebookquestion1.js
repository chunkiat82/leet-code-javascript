// convert [1,{a:2},3,4,[5,6,[7,8]]] into [1,{a:2},3,4,5,6,7,8]


const convert = function(input) {

    const finalArray = [];

    function recursive(subInput) {
        if (subInput.length === 0) return;

        const element = subInput.shift();

        if (element.constructor === Array) {
            recursive(element);
        } else {
            finalArray[finalArray.length] = element;
        }

        recursive(subInput);
    }

    recursive(input);

    return finalArray;
}

const convertIterative = function(input) {

    const finalArray = [];

    while (input.length > 0) {

        const element = input.shift();
        
        if (element.constructor === Array) {
            input = element.concat(input);
        } else {
            finalArray[finalArray.length] = element;
        }
    }

    return finalArray;
}


console.log(convert([1,{a:2},3,4,[5,6,[7,8]]]));

console.log(convertIterative([1,{a:2},3,4,[5,6,[7,8]]]));