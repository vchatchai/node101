let target = {
    name: "target"
};


let proxy = new Proxy(target, { 
    set(trapTarget, key, value, receiver){
        //ignore existing properties so as not to affect them
        console.log("trapTarget:", trapTarget,"key:",key,"value:",value,'receiver:',receiver);
        if(!trapTarget, key, value,receiver){
            if(!trapTarget.hasOwnProperty(key)){
                if(isNaN(value)){
                    throw new TypeError("Property must be a number.");
                }
            }
        }

        // add the property
        return Reflect.set(trapTarget,key, value, receiver);
    }
});

// adding a new property
proxy.count = 1;
console.log(proxy.count);
console.log(target.count);

//you can assign to name because it exists on target already
proxy.name = "proxy";
console.log(proxy.name);
console.log(target.name);

//throws an error
proxy.anotherName = "proxy";