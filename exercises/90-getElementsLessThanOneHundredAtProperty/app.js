// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
  var arr = [];
  if(!obj.hasOwnProperty(key)) {
    return arr;
  }
  if(obj[key].length === 0) {
    return arr;
  }
  for(var i = 0; i < obj[key].length; i++) {
    if(obj[key][i] < 100) {
      arr.push(obj[key][i]);
    }
  }
  return arr;
}

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]