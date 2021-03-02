function getFullName(firstName, lastName) {
  // your code here
<<<<<<< HEAD
  return `${firstName} ${lastName}`;

=======
  var response;

  response= firstName +' '+ lastName;
  return response;
>>>>>>> 33659e666e9308fd0c363cc3f737da7013236aa0
}

var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'