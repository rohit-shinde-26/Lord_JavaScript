// every method
const numbers = [2,4,6,10];
const ans = numbers.every((num)=> num%2===0)
console.log(ans)

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]
const myAns = userCart.every((data)=>{
    return data.price<20000
})

console.log(myAns)