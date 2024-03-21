// important array methods 
// forEach passes an argument


 const numbers = [4,2,5,8];

 // this is an example
function myFunc(number, index){
    console.log(`index is ${index} number is ${number}`);
}
// using loop
// for(let i=0;i<numbers.length;i++){
//     myFunc(numbers[i],i)
// }

// for avoid this loop use the forEach 
// numbers.forEach(myFunc)

// using anonymous
numbers.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`);
});

numbers.forEach(function(number,index){
    console.log(`${number*2}`)
})

const users = [
    {firstName: "Rohit", age: 23},
    {firstName: "Ram", age: 21},
    {firstName: "Laxman", age: 22},
    {firstName: "garima", age: 20},
]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

users.forEach((user, index)=>{
    console.log(user.firstName, index);
})

// for(let user of users){
//     console.log(user.firstName);
// }


