let fs = require("fs")
fs.readFile("iteratorsAndGenerator/catch.js", function(err, contents){
    if (err) {
        throw err;
    }

    console.log(contents)
    console.log("Done")
    

});