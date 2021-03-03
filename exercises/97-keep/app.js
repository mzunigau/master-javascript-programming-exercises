// Write your function here
function keep(arr, num){
    var newArr=[];
    for (let index = 0; index < arr.length; index++) {

        if(arr[index]==num){
            newArr.push(num);
        }        
    }
    return newArr;
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output);// --> [2, 2]