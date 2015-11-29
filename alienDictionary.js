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


var input1 = [ "wrt", "wrf", "er", "ett", "rftt" ];
var input2 = ["vlxpwiqbsg","cpwqwqcd"];
var input3 = ["z","x"];
var input3 = ["z","z"];
var input4 = ["aac","aabb","aaba"];
var input5 = ["zy","zx"];
var input6 = ["a","b","a"];
var alienOrder = function(words) {

    var graph = {};

    var final = [];

    var count = 0;

    words.forEach(chars => {
        var letter = chars[0];
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
            if( graph[next] !== undefined){
                graph[next].loop = true;
            }  
             // console.log("graph[cur]="+JSON.stringify(graph[cur]));
        } else {
            var node = graph[cur];
            node.count += 1;
            if (node.next !== next) {
                // console.log("node.value="+node.value);
                // console.log("node.next="+node.next);
                // console.log("next="+next);

                //bad
                if (count++ > Object.keys(graph).length) {
                    count = 0;
                    return
                }
                assignToGraph(node.next, next);
            }
        }
    }

    function prune(graph){
        
        var pruneYes = true;
        Object.keys(graph).forEach(key => {
            if (pruneYes && (graph[key].count === words.length) && graph[key].loop){
                delete graph[key];
            }else{
                pruneYes=false;                
            }
        });
    }

    function sort(graph) {
        var loopFound = false;

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
            //loopFound = loopFound || graph[key].loop;
        })

        if (loopFound){
            final = [];
        }
    }
    prune(graph);
    console.log(graph);
    sort(graph);

    if (Object.keys(graph).length===0 && final.length > 0 ){
        words.forEach(x=>{
            if (final.indexOf(x) < 0 ){
                final.push(x);
            }
        })
    }

    return final.join('');    
    
    
}
console.log(alienOrder(input));
