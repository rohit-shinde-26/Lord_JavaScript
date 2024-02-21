// difference between dot and bracket notaion
const key = "email";
// add var in object
const person = {
    name: "Ram",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
    // write in string and access with bracket notation
}

console.log(person["person hobbies"]);
// person["key"] = "rohit26@g";  // this is not var it make new
person[key] = "rohit26@gmail.com";
console.log(person);
