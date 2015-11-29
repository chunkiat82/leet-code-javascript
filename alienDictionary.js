// There is a new alien language which uses the latin alphabet. 

// However, the order among letters are unknown to you. 

// You receive a list of words from the dictionary, where words are sorted lexicographically by the rules of this new language. 

// Derive the order of letters in this language.

// For example,
// Given the following words in dictionary,

// [
//   "wrt",
//   "wrf",
//   "er",
//   "ett",
//   "rftt"
// ]

// The correct order is: "wertf".

var store = [];

var alienOrder = function(words) {

    words.forEach(wordCheck);

    return store;
};

function wordCheck(word) {

    let chars = word.split('')

    for (let i = 0; i <chars.length; i++){
        charCheck(i, chars[i]);
    }

    console.log(store);
}

function charCheck(index, char) {
    var found = false;
    var i = 0;
    for (i = 0;i <store.length; i++){
        if (findCharInStoreIndex(store[i],char)){            
            found = true;
        }
    }

    if (!found) {
        if (store[index] === undefined) {
            store[index] = char;
        }else if (store[index] !== char){
            store[index] = store[index] +char;
        };
    }
}

function findCharInStoreIndex(charsInStore, char){
    var found = false;

    if (charsInStore.length === 1){
        return charsInStore === char;
    }
    

    charsInStore.split('').find(charInStore=>{
        if (charInStore === char){

            // console.log('found');
            // console.log(charsInStore);
            // console.log(char);
            found = true;
            return found;
        }
    })

    return found;
}


var input = [
    "wrt",
    "wrf",
    "er",
    "ett",
    "rftt"
];
console.log(alienOrder(input));
