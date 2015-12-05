// You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

// Write a function to compute all possible states of the string after one valid move.

// For example, given s = "++++", after one move, it may become one of the following states:

// [
//   "--++",
//   "+--+",
//   "++--"
// ]
// If there is no valid move, return an empty list [].

const generatePossibleNextMoves = (s) => {
    const results = [];    
    for (var i=0;i<s.length;){      
        var x = s.indexOf("++",i);    
        if (x>=0){      
            results[results.length]=s.substring(0,x)+'--'+s.substring(x+2,s.length);
            i=x+1;     
        }else{
            break;
        }
    }
    return results;
};

console.log(generatePossibleNextMoves("++++"));


//console.log(generatePossibleNextMoves("---+++-+++-+"));