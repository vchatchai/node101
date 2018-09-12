let rejected; 
process.on("unhandledRejection", function(reason, promise){
    console.log(reason.message);
    console.log(rejected === promise);
});

rejected = Promise.reject(new Error("Explosion!"));



process.on("rejectionHandled", function(promise){
    console.log(rejected === promise);
});

rejected = Promise.reject(new Error("Explosion!"));

setTimeout(function(){
    rejected.catch(function(value){
        console.log(value.message);
    });
},1000);