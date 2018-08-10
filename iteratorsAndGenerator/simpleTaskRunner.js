

function run(taskDef) {
    //create the iterator, make available elsewhere
    let task = taskDef();

    // start the task 
    let result = task.next();

    // recursive function to keep calling next()
    function step() {
        //if there's more to do
        if (!result.done){
            result = task.next();
            step();
        }
    }

    //start the process 
    step();
}

run(function*(){
    console.log(1);
    yield;
    console.log(2);
    yield;
    console.log(3)
})