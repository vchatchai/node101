let fs = require("fs");


function readFile(filename){
    return new Promise(function(resolve,reject){
        fs.readFile(filename,{encoding: "utf8"}, function(err, contents){
            if(err){
                reject(err);
                return;
            }

            resolve(contents);
        });
    });
}

let promise = readFile("example.txt");

promise.then(function(contents){
    console.log(contents);
},
function(err){
    console.error(err.message);
}
);

setTimeout(function(){
    console.log("timeout");
}, 500)


promise = new Promise(function(resolve, reject){
    console.log("Promise");
    resolve();
});

promise.then(function(){
    console.log("Resolved.");
})

console.log("Hi!");