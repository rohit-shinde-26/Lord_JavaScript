// for in loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];


// it gives index but you can use another name also
for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);

// it not use more time