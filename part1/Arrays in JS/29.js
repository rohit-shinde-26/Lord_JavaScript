// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];
// we dont want to make same changes in both array but want to clone

// let array2 = ["item1", "item2"];  // not use
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1,["item3", "item4"]);  // make new array with all array1 elements


// new way 
// spread operator
let oneMoreArray = ["item3", "item4"]
// let array2 = [...array1,"item3","item4"];
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2);
console.log(array1)
console.log(array2)


// slice performed fast but most of the developers used the spread operator
