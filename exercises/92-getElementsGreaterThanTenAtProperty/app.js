// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
  var arr = [];
  if(!obj.hasOwnProperty(key)) {
    return arr;
  }
  if(obj[key].length === 0) {
    return arr;
  }
  for(var i = 0; i < obj[key].length; i++) {
    if(obj[key][i] > 10) {
     arr.push(obj[key][i]); 
    }
  }
  return arr;
}

var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]
