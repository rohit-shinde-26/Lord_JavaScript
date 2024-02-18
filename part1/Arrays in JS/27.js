// array push pop 

// array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// push 
fruits.push("banana");  // adds element is an array
console.log(fruits);
// pop 
let poppedFruit = fruits.pop(); // remove last from array and return
console.log(fruits);
console.log("popped fruits is", poppedFruit);

// unshift 
fruits.unshift("banana");  // adds element from start is in array
fruits.unshift("myfruit");
console.log(fruits);

// shift 
let removedFruit = fruits.shift();  // remove start element from array and return
console.log(fruits);
console.log("removed fruits is ", removedFruit);


// note 
// push pop operation are fast as compare to shift and unshift 