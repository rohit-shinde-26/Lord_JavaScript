// objects inside array 
// very useful in real world applications

const users = [
    {userId: 1,firstName: 'Rohit', gender: 'male'},
    {userId: 2,firstName: 'Sarthak', gender: 'male'},
    {userId: 3,firstName: 'Akash', gender: 'male'},
]
for(let user of users){
    console.log(user.firstName.toUpperCase());
}
