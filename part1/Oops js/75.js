// arrow functions 
// it does  not have this 
// it takes from surrounding
// you cant change arrow func this
const user1 = {
    firstName : "Rohit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

user1.about(user1); 