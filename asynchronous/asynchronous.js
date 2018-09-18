let fs = require("fs")

function run(taskDef) {  
    //create the  iterator.
    let task = taskDef();


    //start the task
    let result  = task.next();

    //recursive function to keep calling next()
    function step(){
        // if there's more to do
        if(!result.done){
            if(typeof result.value === "function"){
                result.value(function(err, data){
                    if(err){
                        result = task.throw(err);
                        return;
                    }

                    result = task.next(data);
                    step()
                });
            }else {
                result = task.next(result.value);
                step()
            }
        }
    }

    step();


}
function readFile(filename){
    return function(callback){
        fs.readFile(filename,{encoding: 'utf-8'} ,callback);
    };
}

run(function*(){
    let contents = yield readFile("window.html");
    console.log(contents);
    console.log("Done");
});