// trim() 
// it is used to remove extra spaces

// toUpperCase()

// toLowerCase()
// slice()
//

let firstName = "       Rohit     ";

console.log(firstName.length);
firstName = firstName.trim(); // "Rohit"
console.log(firstName);
// console.log(firstName.length);

// string is immutable thats why used following syntax
// firstName.toUpperCase();  // Invalid
firstName = firstName.toUpperCase();  // Valid
firstName = firstName.toLowerCase();  // Valid
console.log(firstName);

// start index 
// end index

let newString = firstName.slice(0,5); // it take 0 to 3
console.log(newString);

console.log(typeof newString);