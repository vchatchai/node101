class MyPromise extends Promise {  
    success(resolve, reject){
        return this.then(resolve, reject);
    }

    failure(reject) { 
        return this.catch(reject);
    }
}

let promise = new MyPromise(function(resolve, reject){
    resolve(42);
});

promise.success(function(value){
    console.log(value);
}).failure(function(value){
    console.log(value);
})


console.log( p2)