let p1 = Promise.resolve(42);

let p2 = new Promise(function(resolve, reject){
    resolve(43);
});

let p3 = new Promise(function(resolve, reject){
    resolve(44);
});

let p4 = Promise.race([p1,p2,p3]);

p4.then(function(value){
    console.log(value);
})

let p5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(45);
    }, 100);
});

let p6 = new Promise(function(resolve, reject){ 
        resolve(46);
});

let p6ex = new Promise(function(resolve,reject){
    reject(46)
})

let p7 = new Promise(function(resolve, reject){ 
    setTimeout(function(){
        resolve(47);
    }, 50);
});

let p8 = Promise.race([p5,p6,p7]);
p8.then(function(value){
    console.log(value);
});

let p8ex = Promise.race([p5,p6ex,p7]);
p8ex.catch(function(value){
    console.log(value);
})