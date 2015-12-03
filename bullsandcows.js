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

    const bulls = [0,0,0,0,0,0,0,0,0,0];
    const cows = [0,0,0,0,0,0,0,0,0,0];

    gArr.forEach((g,gI)=>{
        const sI = sArr.indexOf(g);
        console.log(sI);
        if (gI===sI || sArr[gI] === g){                    
            bulls[g] += 1;
        } else if (sI >= 0) {
            cows[g] += 1;
        }
        
        
    });

    let bull = 0;
    let cow = 0;

    for (let i=0;i<10;i++){
        bull += bulls[i];
        cow += cows[i];
    }

    console.log(bulls);
    console.log(cows);

    return  bull + "A" + cow + "B";
};

console.log(getHint("1807","7810"));

console.log(getHint("1123","0111"))

