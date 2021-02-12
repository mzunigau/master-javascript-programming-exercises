function addProperty(obj, key) {
  // your code here
  obj[key]= true;
  return obj;
}
var obj = {};

console.log(addProperty(obj,'myProperty'));
console.log(obj);