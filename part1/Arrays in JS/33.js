// for of loop in array
let cars = ["Harrier","sclass","Verna","City"]
let showRoom = [];
// for(let car of cars){
//     // console.log(car.toLocaleUpperCase())
//     showRoom.push(car)
// }
// console.log(showRoom);

for(let i= 0;i<cars.length;i++){
    // console.log(cars[i])
    showRoom.push(cars[i].toLocaleUpperCase())
}
console.log(showRoom);