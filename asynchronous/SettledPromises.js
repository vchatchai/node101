let promise = Promise.resolve(42);

promise.then(function(value){
    console.log(value);
});


promise = Promise.reject(10);
promise.catch(function(err){
    console.log(err);
})

promise.then(null, function(err){
    console.log(err);
})