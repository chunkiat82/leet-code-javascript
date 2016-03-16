// Find anagrams in a inputString

function findAnagrams(inputA, anagramA){

  // 1.check for all validations
  // 2.put alpahabets in buckets for quick matching
  // 3.go through the inputString one index at a time and find a match with angaram
  // 4.the check is done by just matching the number of characters on each side
  // 5.if found put in a list
  // 6.return the list in the end
  
  if (typeof(inputA) !== 'string' || inputA.length < 1){
    return "invalid input string";
  }
  
  if (typeof(anagramA) !== 'string' || anagramA.length < 1){
    return "invalid input anagramA";
  }
  
  const anagramLength = anagramA.length;

  const anagramBuckets = {};
  for (let i = 0; i< anagramA.length; i++) {
    if (anagramBuckets[anagramA[i]]) {
      anagramBuckets[anagramA[i]] += 1;
    }else{
      anagramBuckets[anagramA[i]] = 1;
    }
  }

  console.log(anagramBuckets);
  
  var listOfAngrams = [];
  
  for (let i = 0; i < (inputA.length - anagramLength + 1) ; i++ ) {
    var temp = inputA.substring(i, i + anagramLength );
    console.log(temp);
    const anagramBucketsTemp = {};
    for (let j = 0; j < anagramLength; j++) {
      if (anagramBucketsTemp[temp[j]]) {
        anagramBucketsTemp[temp[j]] += 1;
      }else{
        anagramBucketsTemp[temp[j]] = 1;
      }      
    }

    console.log(anagramBucketsTemp);

    let isAnagram = true;
    Object.keys(anagramBuckets).forEach(function(key){
        if (anagramBuckets[key] !== anagramBucketsTemp[key]){
          isAnagram = false;
        }
    });

    if (isAnagram) {
      listOfAngrams[listOfAngrams.length] = temp;
    }

  }
  
  return listOfAngrams;

}

console.log(findAnagrams('abccccabaccccc', 'abcc'));
