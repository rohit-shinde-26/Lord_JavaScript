// block scope vs function scope 


// let and const are block scope
// var is function scope 

// if(true){
//     var firstName = "Rohit";
//     console.log(firstName);
// }

// console.log(firstName);  // throws error

function myApp(){
    if(true){
        var firstName = "Rohit";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();