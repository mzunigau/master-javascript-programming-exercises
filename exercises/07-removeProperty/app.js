function removeProperty(obj, key) {
  // your code here
  delete obj[key];

}

var obj = {
  name: 'Sam',
  age: 20
}
<<<<<<< HEAD
=======

>>>>>>> 33659e666e9308fd0c363cc3f737da7013236aa0
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined