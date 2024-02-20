// array destructuring 
const myArray = ["value1", "value2", "value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

//destructure
// dual comma for skip element in array 
// let [myvar1, ,myvar2, ...myNewArray] = myArray;
// wants mid value
// let myNewArray = myArray.slice(2)
let [myvar1, myvar2, ...myNewArray] = myArray;
     // 0     // 1    // spread
console.log("value of  =>", myvar1);
console.log("value of myvar2 =>", myvar2);
console.log(myNewArray);