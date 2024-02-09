// undefined 
// null


// in const make variable but not assign their value thats why it shows an error
// const myName; (invalid)

let firstName;
console.log(typeof firstName);

firstName = "Rohit";
console.log(typeof firstName, firstName);

let myVariable = null;
console.log(typeof myVariable);

myVariable = "Akash";
console.log(myVariable, typeof myVariable);
console.log(typeof null); // bug , error 

// BigInt

let myNumber = BigInt(126546511161512312654645313125465);
let sameMyNumber = 123n;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER); // number have limit
console.log(myNumber + sameMyNumber);
// normal number and bigint cant perform addition