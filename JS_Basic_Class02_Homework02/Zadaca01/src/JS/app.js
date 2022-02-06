let fName;
let lName;
let greeting;

fName = prompt('Enter your first name');
lName = prompt('Enter your last name:');

greeting = `Hello, I am ${fName} ${lName}`;

console.log(greeting);

document.getElementById("greeting").innerHTML = greeting;