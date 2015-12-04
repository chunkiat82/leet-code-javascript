// You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

// For example:

// Secret number:  "1807"
// Friends guess: "7810"
// Hint: 1 bull and 3 cows. (The bull is 8, the cows are 0, 1 and 7.)
// Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. In the above example, your function should return "1A3B".

// Please note that both secret number and friend's guess may contain duplicate digits, for example:

// Secret number:  "1123"
// Friend's guess: "0111"
// In this case, the 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow, and your function should return "1A1B".
// You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.

// loop through all guess and find secret
// if there is a duplicate we keep the count;

//not good!
const getHint = function(secret, guess) {

    const sArr = secret.split('');
    const gArr = guess.split('');

    const _secret = [0,0,0,0,0,0,0,0,0,0];
    const _guess = [0,0,0,0,0,0,0,0,0,0];

    var bull = 0;
    var cow = 0;

    gArr.forEach((g,gI)=>{
        var s = sArr[gI];
        // console.log(s);
        _secret[s] += 1;
         // console.log(_secret);
        if (g === s){  
            bull += 1;
            _secret[s] -= 1;
        } else {
            _guess[g] += 1;
        }
         console.log("S");
        console.log(_secret);
         console.log("G");
        console.log(_guess);
        
    });

    

    for (var i=0;i<10;i++){
        cow += _secret[i] >= _guess[i] ? _guess[i]: _secret[i];
    }
    console.log("S");
    console.log(_secret);
    console.log("G");
    console.log(_guess);

    return  bull + "A" + cow + "B";
};

// console.log(getHint("1807","7810"));

console.log(getHint("1123","0111"));

// console.log(getHint("1122","2211"));
