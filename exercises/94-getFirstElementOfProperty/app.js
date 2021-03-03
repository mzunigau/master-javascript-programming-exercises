// Write your function here
function getFirstElementOfProperty(obj, key){
    var arr = obj[key];
    
   if(arr.length === 0){
       return undefined;
   }else
   if(Array.isArray(obj[key])===false){
       return undefined;
   }else
   if(obj.hasOwnProperty(key)===false){
        return undefined;
   }

   return arr[0];
}

var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1