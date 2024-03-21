// map method 
// map makes new array
// thats why anytime when use ab map function then values are return
const numbers = [3,4,6,1,8];

const square = function(number){
    return number*number;
}
// if use console.log then undefined goes in squareNumber function 
// thats why use return
const squareNumber = numbers.map((number, index)=>{
    return index;
});
console.log(squareNumber);

const users = [
    {firstName: "Rohit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);