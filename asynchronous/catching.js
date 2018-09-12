let p1  = new Promise(function(resolve, reject){
    resolve(42);
})

p1.then(function(value){
    throw new Error("Boom!");
}).catch(function(error){
    console.log(error.message);
    throw new Error("Finished!");
}).catch(function(error){
    console.log(error.message);
});