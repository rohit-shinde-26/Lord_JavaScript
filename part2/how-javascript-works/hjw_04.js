// Uncaught ReferenceError: 
// Cannot access 'firstName' before initialization



// Uncaught ReferenceError: 
// firstName is not defined

console.log(firstName); // uninitialized
let lastName = "Shinde";

console.log(firstName);
let firstName;
console.log(firstName);

console.log(typeof firstName);

// let firstName = "Rohit";