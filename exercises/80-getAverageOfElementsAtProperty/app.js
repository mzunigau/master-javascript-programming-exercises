// Write your function here 
function getAverageOfElementsAtProperty(obj, key){
    
    if( obj[key] == null || Array.isArray(obj[key]) === false || obj.hasOwnProperty(key) === false ){
        return 0;
    }else{
        let ave=0;
        let array= obj[key];
        for (let index = 0; index < array.length; index++) {
            ave=array[index]+ave;
        }
        return ave / array.length; 
               
   }


}


var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2

