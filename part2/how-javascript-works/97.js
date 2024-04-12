// lexical environment, scope chain

const lastName = "Shinde";

const printName = function(){
    const firstName = "Rohit";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction()
    
}
printName();