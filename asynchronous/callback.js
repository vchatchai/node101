const fs = require('fs') 

fs.readFile("callback.js",{encoding: 'utf-8'}, function(err, contents){  
    if(err) { 
        throw err;
    }
    console.log(contents);
});

console.log("Hi");

fs.readFile("example.txt",{encoding: "utf-8", function(err, contents) {
    if(err){
        throw err;
    }

    fs.writeFile("example.txt",function(err){
        if(err){
            throw err;
        }
        console.log("File was written!");
    })
}});