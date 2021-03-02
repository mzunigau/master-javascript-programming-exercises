// Write your function here
function select(arr, obj){
    var newObj={};
    for (let index = 0; index < arr.length; index++) {
        if(obj.hasOwnProperty(arr[index])){
            newObj[arr[index]]= obj[arr[index]];            
        }        
    } 
    return newObj;  
}


var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }