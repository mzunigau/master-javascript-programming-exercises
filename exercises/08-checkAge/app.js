function checkAge(name, age) {
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
