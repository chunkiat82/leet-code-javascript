// There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

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

// Note:
// You may assume all letters are in lowercase.
// If the order is invalid, return an empty string.
// There may be multiple valid order of letters, return any one of them is fine.

// https://github.com/marcelklehr/toposort is the answer
// https://github.com/robrighter/javascript-topological-sort/blob/master/topological-sort.js
// https://github.com/eknkc/tsort

// create an empty graph


var input1 = ["wrt", "wrf", "er", "ett", "rftt"]; //wertf
var input2 = ["vlxpwiqbsg", "cpwqwqcd"];
var input3 = ["z", "x"];
var input4 = ["z", "z"];
var input5 = ["aac", "aabb", "aaba"];
var input6 = ["zy", "zx"];
var input7 = ["a", "b", "a"];

var alienOrder = function(words) {

    var graph = {};

    var final = [];

    var count = 0;

    words.forEach(chars => {
        var letter = chars[0];

        if (chars.length === 1) return assignToGraph(letter, null); 
        
        for (var j = 1; j < chars.length; j++) {
            assignToGraph(letter, chars[j]);
            letter = chars[j];
        }
    });

    function assignToGraph(cur, next) {

        if (cur === next) return;

        if (graph[cur] === undefined) {
            graph[cur] = {
                value: cur,
                next: next,
                count: 1,
                loop: false
            };
            if (graph[next] !== undefined) {
                graph[next].loop = true;
            }
            console.log("graph[cur]U=" + JSON.stringify(graph[cur]));
        } else {
            
            var node = graph[cur];
            node.count += 1;
            
            if (node.next !== next) {
                assignToGraph(node.next, next);
            }
        }
    }

    function prune(graph){

    }

    function sort(graph) {
        if (Object.keys(graph).length === 1) return;

        var keys = Object.keys(graph);
        var firstNode = graph[keys[0]];

        final.push(firstNode.value);
        final.push(firstNode.next);

        for (var i = 1; i < keys.length; i++) {
            var node = graph[keys[i]];
            if (final.indexOf(node.value) > 0) {
                if (final.indexOf(node.next) < 0) {
                    final.push(node.next);
                }
            } else {
                if (final.indexOf(node.next) > 0) {
                    var spliceIndex = final.indexOf(node.next);
                    var spliceArray = final.splice(spliceIndex, final.length);
                    final.push(node.value);
                    final = final.concat(spliceArray);
                }
            }
        }
    }
    prune(graph);
    sort(graph);

    return final.join('');
}


console.log(alienOrder(input5));
