// check the file 80.js for brtter understanding
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'Vaste ja bhi du ';
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('Rohit', 'Shinde', 'rohit@gmail.com', 9, "my address");
const user2 = createUser('Ram', 'Gunjal', 'ram@gmail.com', 19, "my address");
const user3 = createUser('Akshay', 'kumar', 'akshay@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.about());
// console.log(user3.sing());