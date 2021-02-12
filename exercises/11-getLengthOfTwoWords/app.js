function getLengthOfTwoWords(word1, word2) {

  // your code here
  var sum;
  sum = parseInt(word1.length) + parseInt(word2.length);
  return sum;
}

var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9