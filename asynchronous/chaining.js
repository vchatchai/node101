let p1 = new  Promise(function(resolve, reject){
    resolve(42);
});

p1.then(function(value){
    console.log(value);
}).then(function(){
    console.log("Finished");
})



let p2 = p1.then(function(value){
    console.log(value);
});

p2.then(function(){
    console.log("Finished");
})