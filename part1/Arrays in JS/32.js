// while loop in array 
const cars = ["Harrier","City","Verna","Vertus"]
const newCars = [];
let i = 0;
while(i < cars.length){
    console.log(cars[i].toUpperCase())
    newCars.push(cars[i])
    i++;
}
console.log(newCars)