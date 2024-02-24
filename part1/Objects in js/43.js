// nested destructuring 
const users = [
    {userId: 1,firstName: 'Rohit', gender: 'male'},
    {userId: 2,firstName: 'Sarthak', gender: 'male'},
    {userId: 3,firstName: 'Akash', gender: 'male'},
]

const [user1,user2,user3]=users;
console.log(user1)



const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
// const [{firstName, userId}, , {gender}] = users;

console.log(user1firstName);
console.log(userId);
console.log(user3gender);