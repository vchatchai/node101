let target = { 
    name: "target",
    value: 42
}
console.log(target);
console.log("value" in target);
console.log("toString" in target);



let proxy = new Proxy(target,{
    has(trapTarget, key){
        if(key === "value"){
            return false;
        } else {
            return Reflect.has(trapTarget,key);
        }
    }
});

console.log("value","value" in proxy);
console.log("name","name" in proxy);
console.log("toString","toString" in proxy);