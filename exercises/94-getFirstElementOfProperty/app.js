// Write your function here
function getFirstElementOfProperty(obj, key){
    var arr = obj[key];
    console.log(arr.length);

   if(arr.length > 0){
       return undefined;
   }
   /*if(Array.isArray(obj[key])===false){
       return undefined;
   }
   if(obj.hasOwnProperty(key)===false){
        return undefined;
   }*/
}

var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1