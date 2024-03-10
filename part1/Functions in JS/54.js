// callback function



function myfunc2(name){
    console.log("This is myfunc2")
    console.log(`${name}`)

}

function myfunc(callback){
    console.log("hello")
    callback("Ram")
}
myfunc(myfunc2)
// firstly run myfunc then myfunc2