// Write your function here

const computeAverageOfNumbers = arr => arr.reduce((a,b) => a + b, 0) / arr.length

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3