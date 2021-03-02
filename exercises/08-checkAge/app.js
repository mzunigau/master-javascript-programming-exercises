function checkAge(name, age) {
<<<<<<< HEAD
  // your code here
  if(age>=21){
      return `Welcome, ${name}!`
  }
   if(age<=20){
      return `Go home, ${name}`;
  }
}

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'
=======
    var response;
  if(age >= 21){
      response = 'Welcome, '+ name + '!';
  }else{
      response = 'Go home, '+ name + '!';
  }
  return response;
}

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'
>>>>>>> 33659e666e9308fd0c363cc3f737da7013236aa0
