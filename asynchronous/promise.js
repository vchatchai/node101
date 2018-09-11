let fs = require("fs");


function readFile(filename) {
    return new Promise(function(resolve, reject) {
        
        // trigger the asynchronous operation
        fs.readFile(filename, { encoding: "utf8" }, function(err, contents) {
            
            // check for errors
            if (err) {
                reject(err);
                return;
            }
            
            // the read succeeded
            resolve(contents);
            
        });
    });
}


let promise = readFile('example.txt');

 promise.then(function(contents){
     console.log(contents);
 }, function(err){
     console.log(err.message);
 });

 promise.then(function(contents){
     console.log(contents);
 });

 promise.then(null, function(err){
     console.log(err.message);
 });


 promise.catch(function(err){
     console.log(err.message);
 });


 promise.then(function(contents){
     console.log(contents);
     promise.then(function(contents){
         console.log(contents)
     })
 })