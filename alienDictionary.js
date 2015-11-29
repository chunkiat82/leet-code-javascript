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
var graph = {};

var input = [
    "wrt",
    "wrf",
    "er",
    "ett",
    "rftt"
];

function run(words) {
    input.forEach(chars => {
        var letter = chars[0];
        for (var j = 1; j < chars.length; j++) {
            assignToGraph(letter, chars[j]);
            letter = chars[j];
        }
    });
    sort(graph);
}

function assignToGraph(cur, next) {

    if (cur === next) return;

    if (graph[cur] === undefined) {
        graph[cur] = {
            value: cur,
            next: next
        };
    } else {
        var node = graph[cur];

        if (node.next != next) {
            assignToGraph(node.next, next);
        }
    }
}

var final = [];

function sort(graph) {
    Object.keys(graph).forEach(key => {
        if (final.indexOf(key) < 0 && final.indexOf(graph[key].next) < 0) {
            final.push(key);
            final.push(graph[key].next);
        } else {
            if (final.indexOf(graph[key].next) < 0) {
                final.push(graph[key].next);
            } else {
                if (final.indexOf(key) < 0) {
                    var spliceIndex = final.indexOf(graph[key].next);
                    var cutFinal = final.splice(spliceIndex, final.length);
                    final.push(key);
                    final = final.concat(cutFinal);
                }
            }
        }
    })
}

run(input);
console.log(final.join(''));
