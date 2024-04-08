// class createUser{
//     constructor(name,age,email){
//         this.name = name;
//         this.age = age;
//         this.email=email;

//     }

//     about(){
//         return `my name is ${this.name} & i am ${this.age} years old`
//     }
// }

// const user1 = new createUser("rohit",22,"rohit@gmail.com")
// console.log(user1.about())



// 2015 / es6 
// class keyword 
// class are fake

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la ";
    }

}


const user1 = new CreateUser('Rohit', 'Shinde', 'rohit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'gunjal', 'harsh@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'it@gmail.com', 17, "my address");
// console.log(Object.getPrototypeOf(user1));
 