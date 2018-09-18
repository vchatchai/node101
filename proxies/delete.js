let target = { 
    name: "target",
    value: 42
}

Object.defineProperty(target, "name", {configurable:false});

console.log("value" in target);

let result1 = delete target.value;
console.log(result1);
console.log("value","value" in target);

let result2 = delete target.name ;
console.log(result2);
console.log("name", "name" in target);


let proxy = new Proxy(target, { 
    deleteProperty(trapTarget, key){
        if(key === "value"){
            return false;
        }else{
            return Reflect.deleteProperty(trapTarget, key);
        }
    }
});


console.log("value", "value" in proxy);

let result3 = delete proxy.value;
console.log(result1);

console.log("value", "value" in proxy);
console.log("name", "name" in proxy);
let result4 = delete proxy.name;
console.log(result2);

console.log("name" in proxy);