// optional chaining 

const user  = {
    firstName: "Rohit",
    // address: {houseNumber: '1234'}
}

// if that time property was not exist in code but after some time ans comes then we cant take error msg

console.log(user?.firstName);
console.log(user?.address?.houseNumber);

// ?. => check user exist 