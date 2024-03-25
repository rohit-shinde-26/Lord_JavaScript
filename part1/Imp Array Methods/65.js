// splice method 
// start , delete , insert 
// start : start position index 
// delete : how many element you want to delete

const myArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// insert 

myArray.splice(1, 0,'inserted item');

// insert and delete 
// const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
// console.log("delted item", deletedItem);
console.log(myArray);