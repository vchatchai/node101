var funcs =  []

for (var i =0 ; i < 10; i++){
    funcs.push(function(){console.log("var %d",i);});
}

for( let i =0; i < 10; i++){
    funcs.push(function(){
        console.log('let %d',i);
    })
}

object = {
    a: true,
    b: true,
    c: true
}

for (const key in object){
    funcs.push(function(){
        console.log("const object: %s", key)
    })
}


funcs.forEach(function(func){
    func();
})