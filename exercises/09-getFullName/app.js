function getFullName(firstName, lastName) {
  // your code here
  var response;

  response= firstName +' '+ lastName;
  return response;
}

var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'