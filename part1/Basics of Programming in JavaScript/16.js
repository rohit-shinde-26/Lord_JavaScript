// and  or operator 

let firstName = "Rohit";
let age = 36;

if(firstName[0] === "R"){
    console.log("your name starts with R")
}

if(age > 18){
    console.log("you are above 18");
}

// if both condition has true and && operator has used then if statement has run
if(firstName[0] === "R" && age>18){
    console.log("Name starts with H and above 18");
}else{
    console.log("inside else");
}


// let firstName = "arshit";
// let age = 16;

// If any one condition has true then if statement run
if(firstName[0] === "R" || age>18){
    console.log("inside if");
}else{
    console.log("inside else");
}