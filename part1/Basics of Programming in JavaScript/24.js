// break keywork

// continue keyword 

for(let i = 1; i<=10; i++){
    if(i===4){
        break;
        // break is directly stop the execution
    }
    console.log(i);
}

for(let i = 1; i<=10; i++){
    if(i===4){
        continue;
        // 4 is not is in op
        // in that continue statement was jump in for loop thats why it cant print 4
    }
    console.log(i);
}
console.log("Loed JS");
