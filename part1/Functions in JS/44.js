function singHappyBirthday(){
    console.log("happy birthday to you ......");
}

function sumThreeNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}
console.log(sumThreeNumbers(2,5,6))


// isEven
// input : 1 number 
// output : true , false 


// argument
// function isEven(number){
//     return number % 2 === 0;
// }
function isEven(number){
        if (number % 2 === 0){
            return true;
        }
        return false
     }
// parameter
console.log("Even number is the =>",isEven(4));

// function 
// input : string 
// output: firstCharacter 

function firstChar(anyString){
    return anyString[0];
}

console.log(firstChar("zbc"));

// function 
// input : array, target (number)
// output: index of target if target present in array 

function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,90]
const ans = findTarget(myArray, 90);
console.log(ans);



// note
console.log(undefined + undefined); // NaN
