// Write your function here
function getLastElementOfProperty(ob, ky){
    let arr = ob[ky];    
    return arr[arr.length-1];
}

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5


