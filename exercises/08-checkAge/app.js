function checkAge(name, age) {
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
