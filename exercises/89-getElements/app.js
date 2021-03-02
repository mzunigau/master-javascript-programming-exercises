// Write your function here

function getElementsThatEqual10AtProperty(obj, key) {
  var arr = [];
  if(!obj.hasOwnProperty(key)) { 
    return arr;
  }
  if(obj[key].length === 0) { 
    return arr;
  }
  for(var i = 0; i < obj[key].length; i++) {
    if(obj[key][i] === 10) {
      arr.push(obj[key][i]);
    }
  }
  return arr;
}


var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]