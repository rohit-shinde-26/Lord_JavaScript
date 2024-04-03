function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "Rohit",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}

// call
about.call(user2, "guitar", "bach");

// apply
// it is like an call method but arguments are written in array
about.apply(user1, ["guitar", "bach"]);

// bind 
// it is like call but it not print anything it returns function
const func = about.bind(user2, "guitar", "bach");
func();
 