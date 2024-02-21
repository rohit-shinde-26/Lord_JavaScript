// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const person = {name:"Rohit",age:22};
const person = {
    name: "Rohit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects 
console.log(person["name"]);  // bidefault in object it comes with string
console.log(person["age"]);
console.log(person.hobbies);

// how to add key value pair to objects
// person.gender = "male";  // dot notation
person["person"] = "male";  // bracket notation
console.log(person);